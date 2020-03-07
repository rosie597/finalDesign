<style scoped>
.container h1 {
  padding: 20px 0;
}
</style>

<template>
  <div class="container">
  	<h1>组织管理</h1>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
	  <el-form-item label="活动名">
	    <el-input v-model="queryForm.name" placeholder="活动名"></el-input>
	  </el-form-item>
	  <el-form-item label="活动区域">
	    <el-select v-model="queryForm.district">
	      <el-option v-for="item in districts" :key="item" :label="item" :value="item"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="活动类型">
	    <el-select v-model="queryForm.type">
    		<el-option v-for="item in activityType" :key="item" :label="item" :value="item"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="queryData(0)">查询</el-button>
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
	  :total="totalPage"
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
    	districts: [],
      activityType: {},
      activityStatus: {},
    	queryList: [],
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
    	totalPage: 1000
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
        d
      }).then(res => {
         this.queryList = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
    getDistricts () {
      this.$axios.get('/districts').then(res => {
        this.districts = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
    getActivityactivityType () {
      this.$axios.get('/backend/activity/types').then(res => {
        this.activityType = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
    getActivityStatus () {
      this.$axios.get('/backend/activity/status').then(res => {
        this.activityStatus = res.data.data;
      }).catch(err => {
        console.log(err)
      })
    },
  	viewActivity(item) {
      // 跳转到详情页
  	},
  	finishActivity(item) {
      let _this = this;
  		this.$axios.get(`/backend/activity/finish?id=${item.id}`).then(res => {
        // TODO: 返回码的判断
        _this.$message({
          message: '操作成功',
          type: 'success'
        });
        _this.queryData(this.page);
      }).catch(err => {
        console.log(err)
      })
  	},
  	deleteActivity(item) {
      let _this = this;
      this.$axios.get(`/backend/activity/delete?id=${item.id}`).then(res => {
        // TODO: 返回码的判断
        _this.$message({
          message: '删除成功',
          type: 'success'
        });
        _this.queryData(this.page);
      }).catch(err => {
        console.log(err)
      })
  	}
  },
  mounted() {
  	this.queryData(1);
    this.getActivityactivityType();
    this.getDistricts();
  }
};
</script>
