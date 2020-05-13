<style scoped>
  .container {
      background: rgba(176,224,230,.1);
      margin-top: 40px;
  }
</style>

<template>
  <div class="container">
    <div v-if="!this.$store.state.isLogin">
      <need-login></need-login>
    </div>
    <!-- 管理员以上可见 -->
    <div v-if="this.$store.state.isLogin && this.$store.state.role != 2">
      <no-access></no-access>
    </div>
    <div v-if="this.$store.state.isLogin && this.$store.state.role == 2">
      <h1>活动审批</h1>
      <el-table
        :data="queryList"
        border
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in tableColumnConfig"
          :key="item.row"
          :fixed="index === 0"
          :prop="item.row"
          :label="item.label"
          :width="item.width">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="activityApproval(scope.row, 102)">通过</el-button>
            <el-button type="text" size="small" @click="activityApproval(scope.row, 101)">不通过</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        layout="prev, pager, next"
        :page-count="totalPage"
        :page-size="limit"
        @current-change="queryData">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { NeedLogin, NoAccess } from '../common';
export default {
  name: 'ActivityApproval',
  components: { 'need-login': NeedLogin, 'no-access': NoAccess },
  data() {
    return {
      limit: 10,
      districts: {},
      activityType: {},
      activityStatus: {},
    	queryList: [],
    	// 表格的列配置
    	tableColumnConfig: this.ACTIVITY_TABLE_CONFIG,
    	totalPage: 1
    };
  },
  computed: {
    listenLogin () {
      return this.$store.state.isLogin
    }
  },
  watch: {
    listenLogin (prev, cur) {
      if (cur && this.$store.state.role == 2) {
        this.queryData();
      }
    }
  },
  methods: {
  	queryData (page) {
      let p = (typeof page === 'number') ? page : 1;
      let data = {
      	limit: this.limit,
      	offset: (p - 1) * this.limit
      };

      this.$axios({
        url: '/backend/activity/unreview/list',
        method: 'post',
        data
      }).then(res => {
        if (res.data.code == 0) {
          let list = res.data.data;
          list.forEach(el => {
            el.status = this.activityStatus[el.status];
            el.type = this.activityType[el.type];
            el.district = this.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
            el.time = new Date(el.time).toLocaleDateString();
          })
          this.queryList = list;
          this.totalPage = Number(res.data.total_page);
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '网络错误'
        })
      })
    },

    getDistricts () {
      this.$axios.get('/districts').then(res => {
        if (res.data.code == 0) {
          this.districts = res.data.data;
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '网络错误'
        })
      })
    },

    getActivityactivityType () {
      this.$axios.get('/backend/activity/types').then(res => {
        if (res.data.code == 0) {
          this.activityType = res.data.data;
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '网络错误'
        })
      })
    },

    getActivityStatus () {
      this.$axios.get('/backend/activity/status').then(res => {
        if (res.data.code == 0) {
          this.activityStatus = res.data.data;
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '网络错误'
        })
      })
    },

    activityApproval (data, action) {
      this.$axios({
        url: '/backend/activity/approval',
        data: {
          id: data.id,
          action
        },
        method: 'post'
      }).then(res => {
        if (res.data.code == 0) {
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.queryData();
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      }).catch(err => {
        this.$message({
          type: 'error',
          message: '网络错误'
        })
      })
    },

  created() {
    this.getActivityactivityType();
    this.getDistricts();
    this.getActivityStatus();
  },

  mounted() {
    this.queryData(1);
  }
}
}
</script>
