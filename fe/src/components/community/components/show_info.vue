<style scoped>
	.btn-ctn {
		position: absolute;
        right: 50px;
	    top: 35px;
	}
	.show-item {
		padding: 20px 0;
		color: #606266;
		font-size: 14px;
	}
	.show-item span {
		margin: 26px;
	}
	.show-item img {
		width: 300px;
		height: 150px;
	}
</style>

<template>
  <div class="container">
  	<div class="btn-ctn">
  		<el-button @click="handleClick" type="primary">
	  		{{ status === 'edit' ? '保存' : '编辑' }}
	  	</el-button>
  	</div>
  	<div class="form-ctn">
  		<el-form v-if="status === 'edit'" label-width="100px">
			<el-form-item label="组织名称">
				<el-input v-model="queryList.name" placeholder="请输入名称"></el-input>
			</el-form-item>

			<el-form-item label="校区">
				<el-select v-model="queryList.district" placeholder="请选择">
				    <el-option
				      v-for="item in districts"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
			    </el-select>
			</el-form-item>
			
			<el-form-item label="组织类型">
				<el-select v-model="queryList.type" placeholder="请选择">
				    <el-option
				      v-for="item in types"
				      :key="item"
				      :label="item"
				      :value="item">
				    </el-option>
			    </el-select>
			</el-form-item>

			<el-form-item label="组织简介">
				<el-input
				  type="textarea"
				  :autosize="{ minRows: 2, maxRows: 6}"
				  placeholder="社团简介不少于200字"
				  v-model="queryList.desc">
				</el-input>
			</el-form-item>

			<el-form-item label="组织logo">
				<el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>

			<el-form-item label="组织slogan">
				<el-input
				  type="textarea"
				  :autosize="{ minRows: 2, maxRows: 6}"
				  placeholder="请输入 slogan"
				  v-model="queryList.slogan">
				</el-input>
			</el-form-item>
	    </el-form>
  	</div>
    
    <div v-if="status === 'show'">
    	<div class="show-item">
    		<span>组织名称: </span>
    		<span>{{queryList.name}}</span>
    	</div>
    	<div class="show-item">
    		<span>组织类型: </span>
    		<span>{{queryList.type}}</span>
    	</div>
    	<div class="show-item">
    		<span>组织校区: </span>
    		<span>{{queryList.district}}</span>
    	</div>
    	<div class="show-item">
    		<span>组织简介: </span>
    		<span>{{queryList.desc}}</span>
    	</div>
    	<div class="show-item">
    		<span>组织logo: </span>
    		<img :src="queryList.logo">
    	</div>
    	<div class="show-item">
    		<span>组织slogan: </span>
    		<span>{{queryList.slogan}}</span>
    	</div>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'ShowInfo',
	  data() {
	    return {
	    	status: 'show',
	    	queryList: {
	    		logo: '1111.jpg',
	    		slogan: 'we do chicken first',
	    		name: '大家的社团',
	    		desc: 'f会丢撒回复i啊后的归热火求湖人队回复i',
	    		district: '龙洞',
	    		type: '222'
	    	},
	    	districts: ['大学城', '东风路', '龙洞', '番禺'],
	    	types: ['111', '222']
	    };
	  },
	  methods: {
	  	handleClick() {
	  		if (this.status === 'show') {
	  			this.status = 'edit';
	  		} else {
	  			// 保存操作
	  			this.status = 'show';
	  		}
	  	}
	  }
	};
</script>