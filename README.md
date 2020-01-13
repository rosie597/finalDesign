# final-design

> The final design for graduation

### 一. 项目结构  
* 前端 vue 代码： fe 目录下
* 后端 node 代码： server 目录下  
  * 其中图片上传至 www/images 目录下，文件上传至 www/files 目录下
  * 可以考虑使用七牛云sdk ：  https://developer.qiniu.com/kodo/manual/1233/console-quickstart
  * 前端代码接入了 eslint
### 二. 数据库
* 推荐安装 mysql 的可视化工具 navicat ，根据 server\utils\database.js 创建 soms 数据库，创建所需的表
### 三. 技术栈
* 前端： Vue 生态、ES6、Axios、ElementUI 等
* 后端：NodeJs、Express、MySQL 等
### 四. 项目启动
* 分别在 fe 和 server 目录下执行  
> npm install
* 纯前端代码开发在 fe 目录下执行
> npm run dev
* 前端代码打包在 fe 目录下执行
> npm run build
* node 启动服务在 server 目录下执行
> npm run start
* 若端口占用则修改端口号重新启动服务即可
### 五. 线上部署
暂无，敬请期待