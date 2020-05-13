const express = require('express');
const router = express.Router();
const multer=require('multer'); // 可以解析 multipart/form-data 类型数据
const pathLib=require('path');
const fs=require('fs');
const db = require('../utils/database');
const upload = require('../utils/multer');

/**
 * 活动类型
 */
router.get('/types', async (req, res) => {
    try {
        const [ data ] = await db('select * from activity_type');
        if (data) {
	        res.json({ code: 0, data, message: '' });
        } else {
	        res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 活动状态
 */
router.get('/status', async (req, res) => {
    try {
        const [ data ] = await db('select * from activity_status');
        if (data) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 活动列表
 */
router.post('/list', async (req, res) => {
    try {
        let { offset, limit, name, district, type } = req.body;
        let sqlStr = `SELECT * FROM activity_info WHERE review_status=102`;
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from activity_info WHERE review_status=102`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);
        if (name) {
            sqlStr = `${sqlStr} AND name LIKE '%${name}%'`
        }
        if (district) {
            sqlStr = `${sqlStr} AND district=${district}`
        }
        if (type) {
            sqlStr = `${sqlStr} AND type=${type}`
        }
        sqlStr = `${sqlStr} order by create_time desc limit ${offset},${limit}`;
        let data = await db(sqlStr);
        if (data) {
            res.json({ code: 0, data, message: '', total_page });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 未审批列表
 */
 router.post('/unreview/list', async (req, res) => {
    try {
        let { limit, offset } = req.body;
        
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from activity_info WHERE review_status=100`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);

        let sqlStr = `SELECT * FROM activity_info WHERE review_status=100`;
        sqlStr = `${sqlStr} limit ${offset},${limit}`;
        let data = await db(sqlStr);

        if (data) {
            res.json({ code: 0, data, message: 'ok', total_page });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }

    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
 });

 /**
 * 未审批未通过列表
 */
 router.post('/fail/list', async (req, res) => {
    try {
        let { limit, offset } = req.body;
        
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from activity_info WHERE review_status=101`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);

        let sqlStr = `SELECT * FROM activity_info WHERE review_status=101`;
        sqlStr = `${sqlStr} limit ${offset},${limit}`;
        let data = await db(sqlStr);

        if (data) {
            res.json({ code: 0, data, message: 'ok', total_page });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }

    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
 });

/**
 * 活动审批
 */
router.post('/approval', async (req, res) => {
    let { id, action } = req.body;
    try {
        const data = await db(`UPDATE activity_info SET review_status=${action} WHERE id=${id}`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '修改失败' });
        } 
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});
 
/**
 * 删除活动
 */
router.get('/delete', async (req, res) => {
    let id = req.query.id;
    try {
        const data = await db(`DELETE FROM activity_info WHERE id=${id}`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

 /**
 * 结束活动
 */
router.get('/finish', async (req, res) => {
    let id = req.query.id;
    try {
        const data = await db(`UPDATE activity_info SET status=2 WHERE id=${id}`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 新增活动
 */
router.post('/new', async (req, res) => {
    let { district, type, name, description, sponsor, phone, rich_content, logo, time, place } = req.body;
    let create_time = new Date().getTime();
    try {
        // TODO: insert语句的语法有误
        const data = await db(`INSERT INTO activity_info (create_time,district,type,name,description,sponsor,phone,rich_content,logo,time,place) VALUE ('${create_time}',${district || 0},${type || 0},'${name || ''}','${description || ''}','${sponsor || ''}','${phone || ''}','${rich_content || ''}','${logo || ''}','${time || ''}','${place || ''}')`);
        if (data.affectedRows) {
            res.json({ code: 0,data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

module.exports = router;
