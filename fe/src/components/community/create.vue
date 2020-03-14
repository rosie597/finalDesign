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
	  font-weight: bold;
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
    <div class="card">
	    <div class="card-header">
	      新建组织
	    </div>
	    <div class="card-ctn">
	    	<el-steps :active="active" finish-status="success">
				<el-step title="社团信息"></el-step>
				<el-step title="负责人信息"></el-step>
				<el-step title="社团展示"></el-step>
				<el-step title="提交成功"></el-step>
			</el-steps>
	    </div>
	    <div class="card-ctn" v-if="active === CREATE_STATUS.base_info">
	    	<el-form ref="form1" label-width="100px" :model="queryForm" :rules="rules1">
	    		<el-form-item label="校区" prop="district">
	    			<el-select v-model="queryForm.district" placeholder="请选择">
					    <el-option
					      v-for="(item, index) in districts"
					      :key="item"
					      :label="item"
					      :value="index">
					    </el-option>
				    </el-select>
	    		</el-form-item>

	    		<el-form-item label="组织名称" prop="name">
	    			<el-input v-model="queryForm.name" placeholder="请输入名称"></el-input>
	    		</el-form-item>
	    		
	    		<el-form-item label="组织类型" prop="type">
	    			<el-select v-model="queryForm.type" placeholder="请选择">
					    <el-option
					      v-for="(item, index) in types"
					      :key="item"
					      :label="item"
					      :value="index">
					    </el-option>
				    </el-select>
	    		</el-form-item>

	    		<el-form-item label="组织简介">
	    			<el-input
					  type="textarea"
					  :autosize="{ minRows: 2, maxRows: 6}"
					  placeholder="社团简介不少于200字"
					  v-model="queryForm.description">
					</el-input>
	    		</el-form-item>
	    	</el-form>
	    </div>
	    <div class="card-ctn" v-if="active === CREATE_STATUS.sponsor_info">
	    	<el-form ref="form2" label-width="100px" :model="queryForm" :rules="rules2">
		    	<el-form-item label="组织负责人" prop="sponsor">
	    			<el-input v-model="queryForm.sponsor" placeholder="请输入负责人真实姓名"></el-input>
	    		</el-form-item>

	    		<el-form-item label="负责人手机" prop="phone">
	    			<el-input v-model="queryForm.phone" placeholder="请输入手机号"></el-input>
	    		</el-form-item>
	    	</el-form>
	    </div>
	    <div class="card-ctn" v-if="active === CREATE_STATUS.displayment">
	    	<el-form ref="form" label-width="100px">
    			<el-form-item label="组织logo">
    				<el-upload
					  class="upload-demo"
					  drag
					  :limit="1"
					  :on-success="uploadSuccess"
					  action="/img/upload"
					>
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
					  v-model="queryForm.slogan">
					</el-input>
	    		</el-form-item>
    		</el-form>
	    </div>
	    <div class="success" v-if="active === CREATE_STATUS.success">
    		<i class="el-icon-success"></i>
    		<div>提交成功</div>
    	</div>
	    <div class="card-footer">
	    	<el-button v-if="active && active !== CREATE_STATUS.success" @click="toLast">上一步</el-button>
		    <el-button v-if="active < CREATE_STATUS.displayment" @click="toNext" type="primary">下一步</el-button>
		    <el-button v-if="active === CREATE_STATUS.displayment" type="primary" @click="submitForm">提交</el-button>
		    <el-button v-if="active === CREATE_STATUS.success" type="primary" @click="toCreate">继续新建</el-button>
	    </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityCreate',
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
    	queryForm: {
    		district: '',
    		type: '',
    		name: '',
    		description: '',
    		sponsor: '',
    		phone: '',
    		slogan: '',
    		logo: ''
    	},
    	districts: [],
    	types: [],
    	rules1: {
	    	name: [
	    		{ required: true, message: '请输入活动名', trigger: 'blur' }
	    	],
	    	district: [
	    		{ required: true, message: '请选择区域', trigger: 'blur' }
	    	],
	    	type: [
	    		{ required: true, message: '请选择活动类型', trigger: 'blur' }
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
    };
  },
  methods: {
  	toNext() {
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
    toLast() {
    	this.active--;
    },
    getDistricts () {
    	this.$axios.get('/districts').then(res => {
    		this.districts = res.data.data
    	}).catch(err => {
	        this.$message({
	          type: 'error',
	          message: '网络错误'
	        })
	    })
    },
    getCommunityTypes () {
    	this.$axios.get('/backend/community/types').then(res => {
    		this.types = res.data.data
    	}).catch(err => {
	        this.$message({
	          type: 'error',
	          message: '网络错误'
	        })
	    })
    },
    uploadSuccess(res) {
    	this.queryForm.logo = res.data.data;
    },
    submitForm() {
    	this.$axios({
    		url: './backend/community/new',
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
    toCreate() {
    	this.active = this.CREATE_STATUS.base_info;
    	this.queryForm = {
    		district: '',
    		type: '',
    		name: '',
    		description: '',
    		sponsor: '',
    		phone: '',
    		slogan: '',
    		logo: ''
    	};
    }
  },
  mounted () {
  	this.getDistricts();
  	this.getCommunityTypes();
  }
};
</script>
