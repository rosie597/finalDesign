<style scoped>
.card {
  width: 900px;
  border-radius: 15px;
  border: 1px solid #eee;
  box-shadow: 1px 5px 15px #eee;
  margin-right: 20px;
}
.card-ctn {
  padding: 20px;
}
.card-header {
  height: 20px;
  border-bottom: 1px solid #eee;
  padding: 15px;
}
.card-footer {
  height: 50px;
  text-align: center;
}
.success {
	text-align: center;
	color: lightgreen;
}
.success i {
	font-size: 56px;
}
</style>

<template>
	<div class="container">
		<div class="card">
	    <div class="card-header">
	      新建活动
	    </div>
	    <div class="card-ctn">
	    	<el-steps :active="active" finish-status="success">
				<el-step title="活动信息"></el-step>
				<el-step title="负责人信息">
				</el-step>
				<el-step title="活动展示"></el-step>
				<el-step title="提交成功"></el-step>
			</el-steps>
	    </div>
	    <div class="card-ctn">
	    	<div class="step1" v-if="active === CREATE_STATUS.base_info">
	    		<el-form ref="form" label-width="100px">
		    		<el-form-item label="校区">
		    			<el-select v-model="queryForm.district" placeholder="请选择">
						    <el-option
						      v-for="item in districts"
						      :key="item"
						      :label="item"
						      :value="item">
						    </el-option>
					    </el-select>
		    		</el-form-item>

		    		<el-form-item label="活动名称">
		    			<el-input v-model="queryForm.name" placeholder="请输入名称"></el-input>
		    		</el-form-item>
		    		
		    		<el-form-item label="活动类型">
		    			<el-select v-model="queryForm.type" placeholder="请选择">
						    <el-option
						      v-for="item in activityType"
						      :key="item"
						      :label="item"
						      :value="item">
						    </el-option>
					    </el-select>
		    		</el-form-item>

		    		<el-form-item label="活动地点">
		    			<el-input v-model="queryForm.place" placeholder="请输入具体地点"></el-input>
		    		</el-form-item>

		    		<el-form-item label="活动时间">
		    			<div>
						    <el-date-picker
						      v-model="queryForm.time"
						      type="datetime"
						      placeholder="选择日期时间"
						      default-time="12:00:00">
						    </el-date-picker>
						</div>
		    		</el-form-item>
		    	</el-form>
	    	</div>
	    	<div class="step2" v-if="active === CREATE_STATUS.sponsor_info">
	    		<el-form ref="form" label-width="100px">
		    		<el-form-item label="活动负责人">
		    			<el-input v-model="queryForm.master" placeholder="请输入真实姓名"></el-input>
		    		</el-form-item>

		    		<el-form-item label="联系方式">
		    			<el-input v-model="queryForm.phone" placeholder="请输入手机号"></el-input>
		    		</el-form-item>
		    	</el-form>
	    	</div>
	    	<div class="step3" v-if="active === CREATE_STATUS.displayment">
	    		<el-form ref="form" label-width="100px">
	    			<el-form-item label="活动封面">
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
	    			<el-form-item label="活动简介">
		    			<el-input
						  type="textarea"
						  :autosize="{ minRows: 2, maxRows: 6}"
						  placeholder="活动简介不少于100字"
						  v-model="queryForm.desc">
						</el-input>
		    		</el-form-item>
		    		<el-form-item label="活动内容介绍">
		    			<vue-ueditor-wrap v-model="queryForm.rich_content" :myConfig="myConfig"></vue-ueditor-wrap>
		    		</el-form-item>
	    		</el-form>
	    	</div>
	    	<div class="success" v-if="active === CREATE_STATUS.success">
	    		<i class="el-icon-success"></i>
	    		<div>提交成功</div>
	    	</div>
	    </div>
	    <div class="card-footer">
	    	<el-button v-if="active && active !== CREATE_STATUS.success" @click="toLast">上一步</el-button>
		    <el-button v-if="active < CREATE_STATUS.displayment" @click="toNext">下一步</el-button>
		    <el-button v-if="active === CREATE_STATUS.displayment" type="primary" @click="submitForm">提交</el-button>
		    <el-button v-if="active === CREATE_STATUS.success" type="primary" @click="toCreate">继续新建</el-button>
	    </div>
	  </div>
	</div>
</template>

<script>
	import vueUeditorWrap from 'vue-ueditor-wrap';
	export default {
		name: 'ActivityCreate',
		components: {'vue-ueditor-wrap': vueUeditorWrap},
		data() {
			return {
				active: this.CREATE_STATUS.base_info,
				activityType: ['111', '222'],
				districts: ['大学城', '东风路', '龙洞', '番禺'],
				queryForm: {
					type: '',
					district: '',
					name: '',
					place: '',
					time: '',
					master: '',
					phone: '',
					rich_content: ''
				},
				myConfig: {
			      autoHeightEnabled: false,
			      initialFrameHeight: 240,
			      initialFrameWidth: '100%',
			      serverUrl: '', // 图片上传路径
			      UEDITOR_HOME_URL: '/static/UEditor/'
			    }
			}
		},
		methods: {
			toNext() {
		        if (this.active++ > this.CREATE_STATUS.displayment) {
		        	this.active = this.CREATE_STATUS.base_info;
		        }
		    },
		    toLast() {
		    	this.active--;
		    },
		    submitForm() {
		    	// TODO: 提交表单操作
		    	this.active = this.CREATE_STATUS.success;
		    },
		    // 继续新建
		    toCreate() {
		    	this.active = this.CREATE_STATUS.base_info;
		    	this.queryForm = {
					type: '',
					district: '',
					name: '',
					place: '',
					time: '',
					master: '',
					phone: '',
					rich_content: ''
				};
		    }
		}
	}
</script>