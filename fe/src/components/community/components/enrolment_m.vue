<style scoped>
</style>

<template>
  <div class="container">
  	<el-form :inline="true" :model="queryForm" class="demo-form-inline">
	  <el-form-item label="姓名">
	    <el-input v-model="queryForm.name" placeholder="姓名"></el-input>
	  </el-form-item>
	  <el-form-item label="学号">
	    <el-input v-model="queryForm.number" placeholder="学号"></el-input>
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
	      :key="item.row"
	      :fixed="index === 0"
	      :prop="item.row"
	      :label="item.label"
	      :width="item.width">
	    </el-table-column>
	    <!-- <el-table-column
	      fixed="right"
	      label="操作"
	      width="150">
	      <template slot-scope="scope">
	        <el-button @click="viewActivity(scope.row)" type="text" size="small">查看</el-button>
	        <el-button @click="finishActivity(scope.row)" type="text" size="small">下架</el-button>
	        <el-button @click="deleteActivity(scope.row)" type="text" size="small">删除</el-button>
	      </template>
	    </el-table-column> -->
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
  name: 'EnrolmentManage',
  data() {
    return {
    	totalPage: 1000,
    	pageSize: 10,
    	queryForm: {
    		name: '',
    		number: ''
    	},
    	queryList: [
    		{
    			name: '火星哥',
    			number: 3116009989,
    			academy: '艺术学院',
    			major: '音乐',
    			phone: 1223321212
    		}
    	],
    	tableColumnConfig: [
    		{
    			row: 'name',
    			width: 180,
    			label: '名字'
    		},
    		{
    			row: 'number',
    			width: 180,
    			label: '学号'
    		},
    		{
    			row: 'academy',
    			width: 180,
    			label: '学院'
    		},
    		{
    			row: 'major',
    			width: 180,
    			label: '专业'
    		},
    		{
    			row: 'phone',
    			width: 180,
    			label: '手机'
    		}
    	]
    };
  },
  methods: {
  	queryData(page) {

  	}
  }
};
</script>