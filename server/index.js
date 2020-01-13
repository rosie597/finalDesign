const express=require('express');
const static=require('express-static');
const c_parser=require('cookie-parser');
const c_session=require('cookie-session'); // session 基于 cookie
const consolidate=require('consolidate');
const bodyParser = require('body-parser');

var server=express();
server.listen(8883);

// cookie签名加密验证
server.use(c_parser('djfaisdhfiu'));
server.use(c_session({
	name:'session1',
	keys:['asdf','fasf','greasd','asfae'],
	maxAge:2000000
}));

// post 数据
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// 路由模块
server.use('/backend/user', require(__dirname + '/router/user'));
server.use('/backend/community', require(__dirname + '/router/community'));
server.use('/backend/activity', require(__dirname + '/router/activity'));

// 配置模板引擎
server.engine('html',consolidate.ejs);
server.set('view engine','html');
server.set('views', __dirname + '/../fe/dist/');

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

server.use(static(__dirname + '/../fe/dist'));