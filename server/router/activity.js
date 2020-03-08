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
 // TODO: 分页
router.post('/list', async (req, res) => {
    try {
        let { offset, limit, name, district, type } = req.body;
        let sqlStr = `SELECT * FROM activity_info WHERE 1=1`; // 保证没有条件时依然可查询
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from activity_info`);
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
        sqlStr = `${sqlStr} limit ${offset},${limit}`;
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
 * 删除活动
 */
router.get('/delete', async (req, res) => {
    let id = req.query.id;
    try {
        const data = await db(`DELETE FROM activity_info WHERE id=${id}`);
        console.log(data.affectedRows)
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
        console.log(data.affectedRows)
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

module.exports = router;
