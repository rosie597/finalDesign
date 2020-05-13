<style scoped>
	.container {
	  margin-top: 40px;
	  background: rgba(176,224,230,.1);
	}
	.card {
	  width: 900px;
	  border-radius: 15px;
	  border: 1px solid #eee;
	  box-shadow: 1px 5px 15px #eee;
	  margin-left: 100px;
      margin-top: 30px;
	  background: #fff;
	}
	.card-ctn {
	  padding: 20px;
	}
	.card-header {
	  height: 20px;
	  border-bottom: 1px solid #eee;
	  padding: 15px;
	  font-weight: bold;
	  color: white;
	  background: #409EFF;
	  border-top-left-radius: 15px;
	  border-top-right-radius: 15px;
	}
	.card-footer {
	  height: 50px;
	  text-align: center;
	}
	.success {
		text-align: center;
		color: lightgreen;
		margin-top: 68px;
		margin-bottom: 88px;
	}
	.success i {
		font-size: 56px;
	}
</style>

<template>
	<div class="container">
		<div v-if="!this.$store.state.isLogin">
			<need-login></need-login>
		</div>
		<!-- 管理员以上可见 -->
		<div v-if="this.$store.state.isLogin && this.$store.state.role == 0">
			<no-access></no-access>
		</div>
		<div v-if="this.$store.state.isLogin && this.$store.state.role != 0">
			<div class="card">
			    <div class="card-header">
			      新建活动
			    </div>
			    <div class="card-ctn">
			    	<el-steps :active="active" finish-status="success">
						<el-step title="活动信息"></el-step>
						<el-step title="负责人信息"></el-step>
						<el-step title="活动展示"></el-step>
						<el-step title="提交成功"></el-step>
					</el-steps>
			    </div>
			    <div class="card-ctn">
			    	<div class="step1" v-if="active === CREATE_STATUS.base_info">
			    		<el-form ref="form1" label-width="100px" :model="queryForm" :rules="rules1">
				    		<el-form-item label="校区" prop="district">
				    			<el-select v-model="queryForm.district" placeholder="请选择">
								    <el-option
								      v-for="(item, key) in districts"
								      :key="item"
								      :label="item"
								      :value="key">
								    </el-option>
							    </el-select>
				    		</el-form-item>

				    		<el-form-item label="活动名称" prop="name">
				    			<el-input v-model="queryForm.name" placeholder="请输入名称"></el-input>
				    		</el-form-item>
				    		
				    		<el-form-item label="活动类型" prop="type">
				    			<el-select v-model="queryForm.type" placeholder="请选择">
								    <el-option
								      v-for="(item, key) in activityType"
								      :key="item"
								      :label="item"
								      :value="key">
								    </el-option>
							    </el-select>
				    		</el-form-item>

				    		<el-form-item label="活动地点" prop="place">
				    			<el-input v-model="queryForm.place" placeholder="请输入具体地点"></el-input>
				    		</el-form-item>

				    		<el-form-item label="活动时间" prop="time">
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
			    		<el-form ref="form2" label-width="100px" :rules="rules2" :model="queryForm">
				    		<el-form-item label="活动负责人" prop="sponsor">
				    			<el-input v-model="queryForm.sponsor" placeholder="请输入真实姓名"></el-input>
				    		</el-form-item>

				    		<el-form-item label="联系方式" prop="phone">
				    			<el-input v-model="queryForm.phone" placeholder="请输入手机号"></el-input>
				    		</el-form-item>
				    	</el-form>
			    	</div>
			    	<div class="step3" v-if="active === CREATE_STATUS.displayment">
			    		<el-form ref="form3" label-width="100px">
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
								  v-model="queryForm.description">
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
			    	<el-button 
			    		v-if="active && active !== CREATE_STATUS.success" 
			    		@click="toLast"
			    	>
			    		上一步
			    	</el-button>
				    <el-button 
				    	v-if="active < CREATE_STATUS.displayment" 
				    	@click="toNext" 
				    	type="primary"
				    >
						下一步
					</el-button>
				    <el-button 
				    	v-if="active === CREATE_STATUS.displayment" 
				    	type="primary" 
				    	@click="submitForm"
				    >
						提交
					</el-button>
				    <el-button 
				    	v-if="active === CREATE_STATUS.success"
				    	type="primary"
				    	@click="toCreate"
				    >
				    	继续新建
					</el-button>
			    </div>
		    </div>
		</div>
	</div>
</template>

<script>
	import vueUeditorWrap from 'vue-ueditor-wrap';
	import { Card, NeedLogin, NoAccess } from '../common';
	export default {
		name: 'ActivityCreate',
		components: { 'vue-ueditor-wrap': vueUeditorWrap, 'card': Card, 'need-login': NeedLogin, 'no-access': NoAccess },
		data() {
			let validatePhone = (rule, value, callback) => {
				let reg = /^1[345789]{1}[0-9]{9}/;
		        if (!reg.test(value)) {
		          callback(new Error('手机号码格式错误！'));
		        } else {
		          callback();
		        }
	        };
			return {
				active: this.CREATE_STATUS.base_info,
				activityType: [],
				districts: [],
				queryForm: {
					type: '',
					district: '',
					name: '',
					place: '',
					time: '',
					sponsor: '',
					phone: '',
					rich_content: '',
					description: '',
					logo: ''
				},
				myConfig: {
			      autoHeightEnabled: false,
			      initialFrameHeight: 240,
			      initialFrameWidth: '100%',
			      serverUrl: '', // 图片上传路径
			      UEDITOR_HOME_URL: '/static/UEditor/'
			    },
			    rules1: {
			    	name: [
			    		{ required: true, message: '请输入活动名', trigger: 'blur' }
			    	],
			    	district: [
			    		{ required: true, message: '请选择区域', trigger: 'blur' }
			    	],
			    	type: [
			    		{ required: true, message: '请选择活动类型', trigger: 'blur' }
			    	],
			    	place: [
			    		{ required: true, message: '请输入活动地址', trigger: 'blur' }
			    	],
			    	time: [
			    		{ required: true, message: '请选择活动时间', trigger: 'blur' }
			    	]
			    },
			    rules2: {
			    	sponsor: [
			    		{ required: true, message: '请输入负责人姓名', trigger: 'blur' }
			    	],
			    	phone: [
			    		{ required: true, message: '请输入负责人手机', trigger: 'blur' },
			    		{ validator: validatePhone, trigger: 'blur'}
			    	]
			    }
			}
		},
		methods: {
			// 进入下一步
			toNext () {
				if (this.active === this.CREATE_STATUS.base_info) {
					this.$refs['form1'].validate((valid) => {
						if (valid) {
							this.active++;
						}
					})
				} else if (this.active === this.CREATE_STATUS.sponsor_info) {
					this.$refs['form2'].validate((valid) => {
						if (valid) {
							this.active++;
						}
					})
				}
				
		        if (this.active > this.CREATE_STATUS.displayment) {
		        	this.active = this.CREATE_STATUS.base_info;
		        }
		    },
		    // 回到上一步
		    toLast () {
		    	this.active--;
		    },
		    getDistricts () {
		    	this.$axios.get('/districts').then(res => {
		    		this.districts = res.data.data;
		    	}).catch(err => {
		    		this.$message({
			          type: 'error',
			          message: '网络错误'
			        })
		    	})
		    },
		    getActivityTypes () {
		    	this.$axios.get('/backend/activity/types').then(res => {
		    		this.activityType = res.data.data;
		    	}).catch(err => {
		    		this.$message({
			          type: 'error',
			          message: '网络错误'
			        })
		    	})
		    },
		    submitForm () {
		    	let time = this.queryForm.time;
		    	this.queryForm.time = time.getTime();
		    	this.$axios({
		    		url: './backend/activity/new',
		    		method: 'post',
		    		data: this.queryForm
		    	}).then(res => {
		    		if (res.data.code == 0) {
				    	this.active = this.CREATE_STATUS.success;
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
		    // 继续新建
		    toCreate () {
		    	this.active = this.CREATE_STATUS.base_info;
		    	this.queryForm = {
					type: '',
					district: '',
					name: '',
					place: '',
					time: '',
					sponsor: '',
					phone: '',
					rich_content: '',
					description: '',
					logo: ''
				};
	    }
		},
		mounted () {
			this.getDistricts();
			this.getActivityTypes();
		}
	}
</script>