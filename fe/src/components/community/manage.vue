<style scoped>
</style>

<template>
  <div class="container">
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
	  <el-form-item label="组织名称">
	    <el-input v-model="queryForm.name" placeholder="组织名称"></el-input>
	  </el-form-item>
	  <el-form-item label="组织区域">
	    <el-select v-model="queryForm.region">
	      <el-option v-for="item in districts" :key="item" :label="item" :value="item"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="组织类型">
	    <el-select v-model="queryForm.type">
    		<el-option v-for="item in types" :key="item" :label="item" :value="item"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="queryData(0)">查询</el-button>
	  </el-form-item>
	</el-form>

	<el-table
	    :data="queryList"
	    border
	    style="width: 100%">
	    <el-table-column
	      v-for="(item, index) in tableColumnConfig"
	      :key="item.rows"
	      :fixed="index === 0"
	      :prop="item.row"
	      :label="item.label"
	      :width="item.width">
	    </el-table-column>
	    <el-table-column
	      fixed="right"
	      label="操作"
	      width="100">
	      <template slot-scope="scope">
	        <router-link :to="{ name: 'communitySetup', params: { data: scope.row } }">
	        	<el-button type="text" size="small">编辑</el-button>
	        </router-link>
	        <el-button @click="switchStatus(scope.row)" type="text" size="small">{{scope.row.status ? '关闭' : '开启'}}</el-button>
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
let COM_STATUS = {
	1: '开启',
	0: '关闭'
}
export default {
  name: 'CommunityManage',
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
    			name: '测试组织',
    			region: '大学城',
    			enrolment: 32,
    			type: '组织性',
    			sponsor: '刘德华',
    			phone: 1318888888,
    			create_time: '2019-11-28 18:00:01',
    			status: 1
    		}
    	],
    	totalPage: 1000,
    	pageSize: 10,
    	// 表格的列配置
    	tableColumnConfig: [
    		{
    			row: 'name',
    			width: 150,
    			label: '组织名称'
    		},
    		{
    			row: 'region',
    			width: 120,
    			label: '组织区域'
    		},
    		{
    			row: 'type',
    			width: 120,
    			label: '组织类型'
    		},
    		{
    			row: 'enrolment',
    			width: 120,
    			label: '组织人数'
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
    	]
    };
  },
  methods: {
  	queryData(page) {
  		let p = page || 0;
  		// 查询列表
  	},
  	switchStatus(item) {
  		
  	}
  },
  mounted() {
  	this.queryData(0);
  }
};
</script>
