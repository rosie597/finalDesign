<style scoped>
.container h1 {
  padding: 20px 0;
}
</style>

<template>
  <div class="container">
  	<h1>活动管理</h1>
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
	    <!-- 暂定功能 -->
	    <el-button type="primary" @click="">导出excel</el-button>
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
	      <template slot-scope="scope">
	        <el-button @click="viewActivity(scope.row)" type="text" size="small">查看</el-button>
	        <el-button @click="finishActivity(scope.row)" type="text" size="small">结束</el-button>
	        <el-button @click="deleteActivity(scope.row)" type="text" size="small">删除</el-button>
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
</template>

<script>
export default {
  name: 'ActivityManage',
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
    	queryList: [{
        id: 111,
        name: '123',
        district: '123'
      }],
    	// 表格的列配置
    	tableColumnConfig: [
    		{
    			row: 'name',
    			width: 150,
    			label: '活动名称'
    		},
    		{
    			row: 'district',
    			width: 120,
    			label: '活动区域'
    		},
    		{
    			row: 'type',
    			width: 120,
    			label: '活动类型'
    		},
    		{
    			row: 'time',
    			width: 120,
    			label: '活动时间'
    		},
    		{
    			row: 'sponsor',
    			width: 120,
    			label: '负责人'
    		},
    		{
    			row: 'phone',
    			width: 120,
    			label: '负责人手机'
    		},
    		{
    			row: 'create_time',
    			width: 120,
    			label: '创建时间'
    		},
    		{
    			row: 'status',
    			width: 120,
    			label: '当前状态'
    		},
    	],
    	totalPage: 1
    };
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
  mounted() {
    this.queryData(1);
  }
};
</script>
