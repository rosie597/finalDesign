const express = require('express');
const router = express.Router();
const multer=require('multer'); // 可以解析 multipart/form-data 类型数据
const pathLib=require('path');
const fs=require('fs');
const db = require('../utils/database');
const upload = require('../utils/multer');

/**
 * 获取用户基本信息
 */
router.get('/info', async (req, res) => {
    res.json({ code: 0, data: 'abcd', message: 'ok' });
    // try {
    //     const { id } = req.query;
    //     const [data] = await db('select * from tour_user where id="' + id + '"');
    //     if (data) {
    //     res.json({ code: 0, data, message: '' });
    //     } else {
    //     res.json({ code: -1, data: null, message: '用户不存在' });
    //     }
    // } catch (e) {
    //     res.json({code: -1, data: null, message: e});
    // }
});

/**
 * 用户注册信息上传
 */
router.post('/register', async (req, res) => {
    console.log(req.body);
    res.json({ code: 0, data: 'abcd', message: 'ok' });
})

module.exports = router;

