const express=require('express')
const static=require('express-static')
const b_parser=require('body-parser')
const c_parser=require('cookie-parser')
const c_session=require('cookie-session')//session基于cookie
const multer=require('multer')//可以解析multipart/form-data类型数据
const mysql=require('mysql')
const ejs=require('ejs')
const consolidate=require('consolidate')
const pathLib=require('path')
const fs=require('fs')

const multerStorage=multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'./www/upload/')
	},
})
const multerObj=multer({
	storage:multerStorage
})
//数据库连接池
const db=mysql.createPool({host:'localhost',user:'root',password:'635834',database:'blog_demo'})

var server=express()
server.listen(8882)

server.use(c_parser('djfaisdhfiu'))//cookie签名加密验证
// server.use(c_parser())
server.use(c_session({
	name:'session1',
	keys:['asdf','fasf','greasd','asfae'],
	maxAge:2000000
}))
//post数据
server.use(b_parser.json({limit: '1mb'}));
server.use(b_parser.urlencoded({
	extended:false,//扩展模式
}))
//文件上传
server.use(multerObj.any());
//配置模板引擎
server.engine('html',consolidate.ejs)
server.set('view engine','html')
server.set('views','./dist')

server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Content-Type','application/json;charset=utf-8');
  next();
});

server.get('/',(req,res,next)=>{
	db.query("SELECT * FROM `banner_table`",(err,data)=>{
		if(err){
			console.log(err)
			res.status(500).send('出错了').end()
		}else{
			res.banners=data
			next(); 
		}
	})
})

server.get('/',(req,res,next)=>{
	db.query("SELECT * FROM `article_table`",(err,data)=>{
		if(err){
			console.log(err)
			res.status(500).send('出错了').end()
		}else{
			res.article=data
			next();
		}
	})
});

server.get('/',(req,res)=>{
	res.type('html')
	res.render('index.html',{banners:res.banners,article:res.article})
})

server.get('/article',(req,res)=>{
	if(req.query.id){
		db.query(`SELECT * FROM article_table WHERE ID= ${req.query.id}`,(err,data)=>{
			if(err){
				console.log(err)
				res.status(500).send('数据库出错了').end()
			}else{
				if(data.length==0){
					res.status(404).send('请求的资源不存在').end()
				}else{
					res.type('html');
					res.render('article.ejs',{article_data:data[0]});
				}
			}
		})
	}else{
		res.status(404).send('请求的资源不存在').end()
	}
})

server.get('/like',function(req,res){
	if(req.query.articleId){
		db.query(`UPDATE article_table set likes = likes+1 WHERE ID=${req.query.articleId}`,(err,data)=>{
			if(err){
				res.status(500).send('数据库出错了').end()
			}else{
				db.query(`SELECT likes FROM article_table WHERE ID=${req.query.articleId}`,function(err,data){
					if(err){
						res.status(500).send('数据库出错率').end()
					}else{
						res.send({message:'点赞成功',data:data[0],code:200})
					}
				})
			}
		})
	}else{
		res.status(404).send('请求的资源不存在').end()
	}
})

server.post('/img',multerObj.single('cover'),function(req,res){
	var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext
	fs.rename(req.files[0].path,newName,function(err, data){
		if(err){
			res.status(500).send('数据库出错了').end()
			console.log('change failed')
		}else{
			var url=newName.substr(4).replace(/\\/g, '/')
			res.status(200).send({message:'上传成功',data:`${url}`,code:200}).end()
		}
	})
})

server.post('/newArticle',function(req,res){
	var data=req.body
	if(data) {
		var sqlQuery=`INSERT INTO article_table
			(title,cover,author,content,intro)
			VALUES('${data.title}','${data.cover}','hhh','${data.content}','${data.content}')`
		console.log(sqlQuery)
		db.query(sqlQuery, (err, data) => {
			if(err) {
				console.log('数据库出错了',err)
				res.status(500).send('数据库出错了').end()
			} else {
				res.status(200).send({message:'提交成功',data:''}).end()
			}
		})
	}
})

// server.use(function(req,res,next){
// 	req.secret='djfaisdhfiu'//可以不需要
// 	res.cookie('user','lxr',{signed:true})//path,maxAge
// 	req.session['user']
// 	if(req.session["count"]===null){
// 		req.session["count"]=1
// 	}else{
// 		req.session["count"]++
// 	}
// 	console.log(req.session)
// 	//res.clearCookie(name)//删除cookie
// 	//delete res.session//删除session
// 	console.log('无签名cookie',req.cookies)
// 	res.send('cookiekkk')
// })

// server.post('/user',function(req,res,next){
// 	//req.query get数据,req.body post数据
// 	console.log(JSON.parse(req.body.data))
// 	res.send({data:'登录成功',code:200})
// 	next();//链式传递
// })

server.use(static('./dist'));