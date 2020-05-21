<style scoped>
.container {
  margin-top: 40px;
  background: rgba(176,224,230,.1);
  padding: 20px;
}
.container h1 {
  letter-spacing: 5px;
}
.export-ctn {
  display: inline-block;
}
div[data-v-5fe69405] {
  font-weight: bold;
}
</style>

<template>
  <div class="container">
    <div v-if="$store.state.isLogin">
    	<h1>活动列表管理</h1>
      <el-divider></el-divider>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
    	  <el-form-item label="活动名">
    	    <el-input v-model="queryForm.name" placeholder="活动名"></el-input>
    	  </el-form-item>
    	  <el-form-item label="活动区域">
    	    <el-select v-model="queryForm.district">
    	      <el-option v-for="(item, key) in districts" :key="item" :label="item" :value="key">{{item}}</el-option>
    	    </el-select>
    	  </el-form-item>
    	  <el-form-item label="活动类型">
    	    <el-select v-model="queryForm.type">
        		<el-option v-for="(item, key) in activityType" :key="item" :label="item" :value="key">{{item}}</el-option>
    	    </el-select>
    	  </el-form-item>
    	  <el-form-item>
    	    <el-button type="primary" @click="queryData(1)">查询</el-button>
          <div class="export-ctn">
            <export-excel :data="queryList" :fields="jsonFields" name="activity_list.xls">
              <el-button type="primary" @click="">导出excel</el-button>
            </export-excel>
          </div>
    	  </el-form-item>
    	</el-form>

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
    	      <template>
    	        <el-button @click="viewActivity(scope.row)" type="text">查看</el-button>
    	        <el-button @click="finishActivity(scope.row)" v-if="$store.state.role != 0" type="text">结束</el-button>
    	        <el-button @click="deleteActivity(scope.row)" v-if="$store.state.role == 2" type="text">删除</el-button>
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

    <div v-else>
      <need-login></need-login>
    </div>
  </div>
</template>

<script>
  import JsonExcel from 'vue-json-excel';
  import NeedLogin from '../common/components/need_login.vue';
  export default {
    name: 'ActivityManage',
    components: { 'need-login': NeedLogin, 'export-excel': JsonExcel },
    data() {
      return {
        limit: 10,
      	queryForm: {
      		name: '',
      		district: '',
      		type: ''
      	},
      	districts: {},
        activityType: {},
        activityStatus: {},
      	queryList: [],
      	// 表格的列配置
      	tableColumnConfig: this.ACTIVITY_TABLE_CONFIG,
      	totalPage: 1,
        // excel 需要导出的字段
        jsonFields: {
            '活动名称': 'name',
            '活动区域': 'district',
            '活动类型': 'type',
            '活动地点': 'place',
            '活动时间': 'time',
            '负责人': 'sponsor',
            '负责人手机': 'phone',
            '创建时间': 'create_time',
            '当前状态': 'status'
        },
      };
    },
    computed: {
      listenLogin () {
        return this.$store.state.isLogin
      }
    },
    watch: {
      listenLogin (prev, cur) {
        if (cur) {
          this.queryData();
        }
      }
    },
    methods: {
    	queryData (page) {
        let p = (typeof page === 'number') ? page : 1;
        let d = this.queryForm;
        d.limit = this.limit;
        d.offset = (p - 1) * this.limit;
        this.$axios({
          url: '/backend/activity/list',
          method: 'post',
          data: d
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

    	viewActivity(item) {
        // 跳转到详情页
    	},

    	finishActivity(item) {
        let _this = this;
        console.log(item)
    		this.$axios.get(`/backend/activity/finish?id=${item.id}`).then(res => {
          if (res.data.code == 0) {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            _this.queryData(this.page);
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

    	deleteActivity(item) {
        let _this = this;
        this.$axios.get(`/backend/activity/delete?id=${item.id}`).then(res => {
          if (res.data.code == 0) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            _this.queryData(this.page);
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
    	}
    },
    created() {
      this.getActivityactivityType();
      this.getDistricts();
      this.getActivityStatus();
    },
    activated() {
      this.$store.state.isLogin && this.queryData(1);
    }
  };
</script>
