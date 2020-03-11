<style scoped>
	h1 {
		margin-bottom: 20px;
	}
	.btn-ctn {
		position: absolute;
	    right: 50px;
	    top: 35px;
	}
	.job-list {
		width: 60%;
		color: #606266;
		font-size: 14px;
	}
	.job-item {
		padding: 10px 0;
	}
	.job-item span {
		margin-right: 20px;
	}
	.delete {
		color: red;
		text-decoration: underline;
		float: right;
		cursor: pointer;
	}
</style>

<template>
  <div class="container">
  	<h1>职务设置</h1>
    <el-form :inline="true" :model="jobItem" class="demo-form-inline">
	  <el-form-item label="名字">
	    <el-input v-model="jobItem.name" placeholder="名字"></el-input>
	  </el-form-item>
	  <el-form-item label="职务">
        <el-input v-model="jobItem.job" placeholder="职务"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="newJob()">新增</el-button>
	  </el-form-item>
	</el-form>
	<div class="job-list">
		<div class="job-item" v-for="item in queryList" :key="item.id">
			<span>{{item.job}}: </span>
			<span>{{item.name}}</span>
			<span>{{item.phone}}</span>
			<a @click="deleteItem(item.id)" class="delete">删除</a>
		</div>
	</div>
  </div>
</template>

<script>
	export default {
	  name: 'BasicSetup',
	  data() {
	    return {
	    	queryList: [
	    		{
	    			id: 1,
	    			job: '会长',
	    			name: '千千',
	    			phone: 1888888888
	    		},
	    		{
	    			id: 2,
	    			job: '副会长',
	    			name: '易易',
	    			phone: 1888888881
	    		}
	    	],
	    	jobItem: { job: '', name: '', phone: ''},
	    };
	  },
	  methods: {
	  	newJob () {
	  		// 新增职务
	  	},
	  	deleteItem (id) {
	  		// 删除职务
	  	}
	  }
	};
</script>