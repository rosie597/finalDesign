<template>
  <div class="container">
    <div class="card-ctn" style="display: flex;">
      <div class="card">
        <div class="card-header">
          当前活动
        </div>
        <div class="card-ctn">
          <img src="" alt="活动封面">
        </div>
        <div class="card-footer">
          <el-button type="primary">活动详情</el-button>
          <el-button type="primary">报名情况</el-button>
          <el-button type="primary">更多活动</el-button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          消息卡片
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
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      noticeInfo: [
        {
          msg: "活动123审批不通过",
          time: "1分钟前"
        },
        {
          msg: "社团申请审批通过",
          time: "1天前"
        }
      ]
    };
  },
  mounted() {
    this.$axios.get('/backend/user/info').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
    this.$axios({
      method: 'post',
      url: '/backend/user/register',
      data: this.qs.stringify({
        user_name: 'rosie',
        password: 123,
      }),
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>

<style scoped>
.card {
  width: 460px;
  border-radius: 15px;
  border: 1px solid #eee;
  box-shadow: 1px 5px 15px #eee;
  margin-right: 20px;
}
.card-ctn {
  padding: 20px;
}
.card-ctn img {
  height: 220px;
  width: 220px;
}
.notice-item {
  height: 50px;
  border-bottom: 1px solid #eee;
}
.notice-item span {
  vertical-align: middle;
}
.card-header {
  height: 20px;
  border-bottom: 1px solid #eee;
  padding: 15px;
}
.card-footer {
  height: 50px;
  padding-left: 20px;
}
</style>
