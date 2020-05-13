const express = require('express');
const router = express.Router();
const multer=require('multer'); // 可以解析 multipart/form-data 类型数据
const pathLib=require('path');
const fs=require('fs');
const db = require('../utils/database');
const upload = require('../utils/multer');

/**
 * 登陆
 */
router.post('/login', async (req, res) => {
    let { account, password } = req.body;
    if (!account || !password) {
        res.json({ code: -1, data: null, message: '数据不可以为空' })
    } else {
        try {
            const [ data ] = await db(`select * from user_info where account='${account}'`);
            if (data) {
                req.session.login = true;
                req.session.user = account;
                res.json({ code: 0, data, message: '登陆成功' });
            } else {
                res.json({ code: -1, data: null, message: '账号不存在' });
            }
        } catch (e) {
            res.json({code: -1, data: null, message: e});
        }
    }
});

/**
 * 用户注册
 */
router.post('/regist', async (req, res) => {
    let { account, password, number, nickname } = req.body;
    if (!account || !password) {
        res.json({ code: -1, data: null, message: '数据不可以为空' })
    } else {
        try {
            const [ data ] = await db(`SELECT * FROM user_info WHERE account='${account}'`);
            if (!data) {
                const data = await db(`INSERT INTO user_info (account,password,number,nickname) VALUE ('${account}','${password}','${number}','${nickname}')`);
                if (data.affectedRows) {
                    res.json({ code: 0, data, message: '' });
                } else {
                    res.json({ code: -1, data: null, message: '注册失败，请重试' });
                }
            } else {
                res.json({ code: -1, data: null, message: '账号已经存在' });
            }
        } catch (e) {
            res.json({code: -1, data: null, message: e});
        }
    }
});

/**
 * 注销登陆
 */
router.get('/logout', (req, res)=>{
    req.session.login = false;
    req.session.user = '';
    res.json({ code: 0, message:'已退出' });
});

/**
 * 账号列表
 */
 router.post('/account/list', async (req, res) => {
    try {
        let { limit, offset } = req.body;
        
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from user_info`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);
        let sqlStr = `SELECT * FROM user_info`;
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
* 角色列表
*/
router.get('/role/list', async (req, res) => {
    try {
        const [ data ] = await db('select * from roles');
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
* 将账号设置为管理员
*/
router.post('/master', async (req, res) => {
    let { uid } = req.body;
    try {
        const data = await db(`UPDATE user_info SET role=1 WHERE uid=${uid}`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '设置失败' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
})

/**
 * 社团成员列表
 */
router.post('/list', async (req, res) => {
    try {
        let { offset, limit, community_id, name, number, id } = req.body;
        let sqlStr = `SELECT * FROM member_info WHERE 1=1`; // 保证没有条件时依然可查询
        // 总条目查询
        let totalData = await db(`SELECT COUNT(*) from member_info WHERE 1=1`);
        let total_page = Math.ceil(totalData[0]['COUNT(*)'] / +limit);
        if (id) {
            // 查询特定学生信息
            sqlStr = `${sqlStr} AND id=${id}`;
        } else {
            if (community_id) {
                sqlStr = `${sqlStr} AND community_id=${community_id}`;
            }
            if (name) {
                sqlStr = `${sqlStr} AND name LIKE '%${name}%'`;
            }
            if (number) {
                sqlStr = `${sqlStr} AND number=${number}`;
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
 * 删除成员
 */
router.get('/delete', async (req, res) => {
    let id = req.query.id;
    try {
        const data = await db(`DELETE FROM member_info WHERE id=${id}`);
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
 * 新增成员
 */
router.post('/new', async (req, res) => {
    let { community_id, name, number, phone, academy, sex } = req.body;
    try {
        // TODO： 无数据兼容
        const data = await db(`INSERT INTO member_info (community_id, name, number, phone, academy, sex) VALUE (${community_id}, '${name}', '${number}', '${phone}', ${academy}, ${sex})`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '新增失败' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

/**
 * 编辑成员
 */
router.post('/edit', async (req, res) => {
    let { id, name, number, phone, academy, sex } = req.body;
    try {
        const data = await db(`UPDATE member_info SET name='${name}',number='${number}',phone='${phone}',sex=${sex},academy=${academy} WHERE id=${id}`);
        if (data.affectedRows) {
            res.json({ code: 0, data, message: '' });
        } else {
            res.json({ code: -1, data: null, message: '编辑失败' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

module.exports = router;

