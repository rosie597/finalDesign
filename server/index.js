const express=require('express');
const static=require('express-static');
const c_parser=require('cookie-parser');
const c_session=require('cookie-session'); // session 基于 cookie
const consolidate=require('consolidate');
const bodyParser = require('body-parser');
const db = require('./utils/database');
const multer=require('multer'); //可以解析multipart/form-data类型数据
const pathLib=require('path');
const fs=require('fs');

const server=express();
server.listen(8883);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/www/upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const multerObj=multer({ dest: './www/upload' });

// cookie签名加密验证
server.use(c_parser('djfaisdhfiu'));
server.use(c_session({
	// name:'session1',
	// keys:['asdf','fasf','greasd','asfae'],
	// maxAge:2000000
  secret: 'aaa',
  resave: false, //保存session值
  saveUninitialized: true, //设置session cookie
  cookie: { maxAge: 7200 * 1000 },//设置有效期
}));

//文件上传
server.use(multerObj.any());

// post 数据
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// 路由模块
server.use('/backend/user', require(__dirname + '/router/user'));
server.use('/backend/community', require(__dirname + '/router/community'));
server.use('/backend/activity', require(__dirname + '/router/activity'));

// 图片上传储存并返回路径
server.post('/img/upload',function(req, res){
  console.log(req.files)
  var newName = req.files[0].originalname;
  var path = req.files[0].destination + '/' + req.files[0].filename
  console.log(path)
  fs.rename(path, './www/upload/' + newName, function(err){
    if(err){
      res.json({message:'上传失败', data:null, code: -1})
    }else{
      res.json({message:'上传成功', data:`/upload/${newName}`, code: 0})
    }
  })
});

/**
 * 学校区域信息
 */
server.use('/districts', async (req, res) => {
    try {
        const { id } = req.query;
        const [ data ] = await db('select * from districts');
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
 * 学院
 */
server.use('/academics', async (req, res) => {
    try {
        const { id } = req.query;
        const [ data ] = await db('select * from academy_map');
        if (data) {
          res.json({ code: 0, data, message: '' });
        } else {
          res.json({ code: -1, data: null, message: '数据不存在' });
        }
    } catch (e) {
        res.json({code: -1, data: null, message: e});
    }
});

// 配置模板引擎
server.engine('html',consolidate.ejs);
server.set('view engine','html');
server.set('views', './www');

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Content-Type','application/json;charset=utf-8');
  next();
});

server.get('/',(req,res)=>{
	res.type('html');
	res.render('index.html');
})

// 设置 cookie
// server.use(function(req,res,next){
// 	req.secret='djfaisdhfiu'; // 可以不需要
// 	res.cookie('user','lxr',{signed:true}); // path,maxAge
// 	req.session['user'];
// 	if(req.session["count"]===null){
// 		req.session["count"]=1;
// 	}else{
// 		req.session["count"]++;
// 	}
// 	console.log(req.session);
// 	//res.clearCookie(name) // 删除 cookie
// 	//delete res.session // 删除 session
// 	console.log('无签名cookie',req.cookies);
// 	res.send('cookiekkk');
// })

server.use(static('./www'));