const express = require('express');
const router = express.Router();
const multer=require('multer'); // 可以解析 multipart/form-data 类型数据
const pathLib=require('path');
const fs=require('fs');
const db = require('../utils/database');
const upload = require('../utils/multer');
const { sqlencode } = require('../utils/tool')

/**
 * 组织类型
 */
router.get('/types', async (req, res) => {
    try {
        const [ data ] = await db('select * from community_type');
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
 * 组织列表
 */
 // TODO: 分页
router.post('/list', async (req, res) => {
    try {
        let { offset, limit, name, district, type, id } = req.body;
        let sqlStr = `SELECT * FROM community_info WHERE 1=1`; // 保证没有条件时依然可查询
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from community_info`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);
        if (id) {
            sqlStr = `${sqlStr} AND id=${id}`;
        } else {
            if (name) {
                sqlStr = `${sqlStr} AND name LIKE '%${name}%'`;
            }
            if (district) {
                sqlStr = `${sqlStr} AND district=${district}`;
            }
            if (type) {
                sqlStr = `${sqlStr} AND type=${type}`;
            }
            sqlStr = `${sqlStr} limit ${offset},${limit}`;
        }
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
 * 新增组织
 */
router.post('/new', async (req, res) => {
    let { district, type, name, desc, sponsor, phone, slogan, logo } = req.body;
    let create_time = new Date();
    try {
        // TODO: insert语句的语法有误
        const data = await db(`INSERT INTO community_info(district,type,name,desc,sponsor,phone,slogan,logo,create_time) VALUES(${district || 0},${type || 0},${name || ''},${desc || ''},${sponsor || ''},${phone || ''},${slogan || ''},${logo || ''},${create_time})`);
        if (data.affectedRows) {
            res.json({ code: 0,data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 删除组织
 */
router.get('/delete', async (req, res) => {
    let id = req.query.id;
    try {
        const data = await db(`DELETE FROM community_info WHERE id=${id}`);
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