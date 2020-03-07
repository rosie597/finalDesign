const express = require('express');
const router = express.Router();
const multer=require('multer'); // 可以解析 multipart/form-data 类型数据
const pathLib=require('path');
const fs=require('fs');
const db = require('../utils/database');
const upload = require('../utils/multer');

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
        const data = await db('select * from community_info');
        if (data) {
	        res.json({ code: 0, data, message: '' });
        } else {
	        res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

module.exports = router;