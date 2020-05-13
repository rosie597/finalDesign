<style scoped>
  .container {
    background: rgba(176,224,230,.1);
    margin-top: 40px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .card {
    width: 460px;
    border-radius: 15px;
    border: 1px solid #eee;
    box-shadow: 1px 5px 15px #eee;
    margin: 50px;
    background-color: #fff;
  }
  .card-ctn {
    padding: 20px;
    padding-top: 0;
  }
  .card-ctn img {
    height: 220px;
    width: 220px;
  }
  .notice-item {
    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 50px;
  }
  .notice-item span {
    vertical-align: middle;
    cursor: pointer;
    font-family: serif;
  }
  .card-header {
    height: 20px;
    border-bottom: 1px solid #eee;
    padding: 15px;
    color: #fff;
    font-weight: bold;
    background-color: #409EFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .card-footer {
    height: 50px;
    padding-left: 20px;
  }
</style>

<template>
  <div class="container">
    <div>
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="img in topImgs" :key="img">
            <el-image :src="img" fit="fill" style="height: 100%;"></el-image>
          </el-carousel-item>
        </el-carousel>
      </template>
      <div class="card-ctn" style="display: flex;">
        <div class="card">
          <div class="card-header">
            校内网站
          </div>
          <div class="card-ctn">
            <div class="notice-item" v-for="item in webInfo">
              <el-link type="primary" :href="item.url" target="blank">{{item.name}}({{item.url}})</el-link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            校内新闻
          </div>
          <div class="card-ctn">
            <div class="notice-item" v-for="item in noticeInfo">
              <span>{{item.msg}}</span>
              <span style="float: right;">{{item.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NeedLogin } from './common';
export default {
  name: 'Home',
  components: { 'need-login': NeedLogin },
  data() {
    return {
      noticeInfo: [
        {
          msg: "关于2020年春季学期学生返校的通知",
          time: "1分钟前"
        },
        {
          msg: "我校喜获9项广东省教育教学成果奖",
          time: "1天前"
        },
        {
          msg: '校领导率队赴雅堂村调研指导脱贫攻坚工作',
          time: "10天前"
        },
        {
          msg: '我校国际学生参加钟南山院士与外籍人士座谈会',
          time: "1月前"
        },
        {
          msg: '校领导率队指导第六届“互联网+”大赛备赛工作',
          time: "1月前"
        }
      ],
      webInfo: [
        {
          name: "广东工业大学官网",
          url: "https://www.gdut.edu.cn/"
        },
        {
          name: "广东工业大学新闻网",
          url: "https://gdutnews.gdut.edu.cn/"
        },
        {
          name: "广东工业大学图书馆",
          url: "http://library.gdut.edu.cn/"
        },
        {
          name: "广东工业大学教务处",
          url: "https://jwc.gdut.edu.cn/"
        },
        {
          name: "广东工业大学招生办",
          url: "https://zsb.gdut.edu.cn/"
        },
      ],
      topImgs: ['/upload/gdut1.jpg','/upload/gdut2.jpg','/upload/gdut3.jpg','/upload/gdut4.jpg']
    };
  },
  mounted() {
  },
};
</script>

