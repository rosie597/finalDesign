// const fs = require('fs');
const multer = require('multer');
const multerStorage=multer.diskStorage({
    // 设置上传文件路径
	destination:function(req,file,cb){
		cb(null,'./www/upload/')
	},
});

const upload=multer({
	storage:multerStorage
});

module.exports = upload;