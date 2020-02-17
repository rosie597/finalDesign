<style scoped>
</style>

<template>
  <div class="container">
  	<h1>组织管理</h1>
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
	  <el-form-item label="活动名">
	    <el-input v-model="queryForm.name" placeholder="活动名"></el-input>
	  </el-form-item>
	  <el-form-item label="活动区域">
	    <el-select v-model="queryForm.region">
	      <el-option v-for="item in districts" :key="item" :label="item" :value="item"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="活动类型">
	    <el-select v-model="queryForm.type">
    		<el-option v-for="item in types" :key="item" :label="item" :value="item"></el-option>
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
	        <el-button @click="finishActivity(scope.row)" type="text" size="small">下架</el-button>
	        <el-button @click="deleteActivity(scope.row)" type="text" size="small">删除</el-button>
	      </template>
	    </el-table-column>
    </el-table>

	<el-pagination
	  layout="prev, pager, next"
	  :total="totalPage"
	  :page-size="pageSize"
	  @current-change="queryData">
	</el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ActivityManage',
  data() {
    return {
    	queryForm: {
    		name: '',
    		region: '',
    		type: ''
    	},
    	districts: ['大学城', '东风路', '龙洞', '番禺'],
    	types: [111, 222],
    	queryList: [
    		{
    			name: '测试活动',
    			region: '大学城',
    			time: '2019-12-30 14:30',
    			type: '组织性',
    			sponsor: '刘德华',
    			phone: 1318888888,
    			create_time: '2019-11-28 18:00:01',
    			status: 2
    		}
    	],
    	// 表格的列配置
    	tableColumnConfig: [
    		{
    			row: 'name',
    			width: 150,
    			label: '活动名称'
    		},
    		{
    			row: 'region',
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
    	totalPage: 1000,
    	pageSize: 10,
    };
  },
  methods: {
  	queryData(page) {
  		let p = page || 0;
  		// 查询列表
  	},
  	viewActivity(item) {

  	},
  	finishActivity(item) {
  		
  	},
  	deleteActivity(item) {

  	}
  },
  mounted() {
  	this.queryData(0);
  }
};
</script>
