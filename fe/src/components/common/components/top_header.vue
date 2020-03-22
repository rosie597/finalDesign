<style>
	.header-ctn {
		width: calc(100vw - 250px);
	    height: 48px;
	    border-bottom: 1px solid #ccc;
	    position: fixed;
	    background-color: white;
	    z-index: 999;
	    top: 0;
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    justify-content: flex-end;
	}
	.header-ctn img {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		margin-left: 20px;
		margin-right: 15px;
	}
	.info {
		margin-right: 20px;
	}
	.btn-ctn {
		margin-right: 20px;
	}
	.el-button {
		height: 32px;
		line-height: 0.6;
	}
	.btn-ctn {
	    position: absolute;
	    right: 22px;
	}
	.v-modal {
		z-index: 99 !important;
	}
	.dialog-footer {
		text-align: center;
	}
	.el-dialog {
		width: 35%;
	}
</style>

<template>
	<div class="header-ctn">
		<div class="info" v-if="this.$store.state.isLogin">
			<span>{{this.$store.state.nickname}}</span>

			<el-dropdown @command="handleCommand">
			  <span class="el-dropdown-link">
			    <img :src="this.$store.state.avatar" alt="头像" />
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item command="setup">账号设置</el-dropdown-item>
			    <el-dropdown-item command="logout">注销登陆</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="btn-ctn" v-if="!this.$store.state.isLogin">
			<el-button type="primary" @click="loginFormVisible = true">登 陆</el-button>
			<el-button @click="registFormVisible = true">注 册</el-button>
		</div>

		<el-dialog title="登 陆" :visible.sync="loginFormVisible">
		  <el-form label-position="left" :rules="loginRules" :model="loginForm" ref="loginForm">
		    <el-form-item label="手机号" :label-width="formLabelWidth" prop="account">
		      <el-input v-model="loginForm.account"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
		      <el-input v-model="loginForm.password" type="password"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="loginFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="login">登 陆</el-button>
		  </div>
		</el-dialog>
		
		<el-dialog title="账 号 注 册" :visible.sync="registFormVisible">
		  <el-form label-position="left" :rules="registRules" :model="registForm" ref="registForm">
		    <el-form-item label="手机号" :label-width="formLabelWidth" prop="account">
		      <el-input v-model="registForm.account"></el-input>
		    </el-form-item>
		    <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
		      <el-input v-model="registForm.nickname"></el-input>
		    </el-form-item>
		    <el-form-item label="学号/工号" :label-width="formLabelWidth" prop="number">
		      <el-input v-model="registForm.number"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
		      <el-input v-model="registForm.password" type="password"></el-input>
		    </el-form-item>
		    <el-form-item label="再次输入密码" :label-width="formLabelWidth" prop="password2">
		      <el-input v-model="registForm.password2" type="password"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="registFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="regist">注 册</el-button>
		  </div>
		</el-dialog>
		
	</div>
</template>

<script>
	export default {
		name: 'TopHeader',
		data () {
			let validatePass2 = (rule, value, callback) => {
		        if (value !== this.registForm.password) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
	        };
			return {
		        loginFormVisible: false,
		        registFormVisible: false,
		        password2: '',
		        registForm: {
		        	account: '',
		        	password: '',
		        	number: '',
		        	password2: '',
		        	nickname: ''
		        },
		        loginForm: {
		        	account: '',
		        	password: ''
		        },
		        formLabelWidth: '110px',
		        loginRules: {
		        	account: [
		        		{ required: true, message: '请输入手机号', trigger: 'blur' }
		        	],
		        	password: [
		        		{ required: true, message: '请输入密码', trigger: 'blur' }
		        	]
		        },
		        registRules: {
		        	account: [
		        		{ required: true, message: '请输入手机号', trigger: 'blur' }
		        	],
		        	password: [
		        		{ required: true, message: '请输入密码', trigger: 'blur' }
		        	],
		        	password2: [
			        	{ required: true, message: '请再次输入密码', trigger: 'blur' },
			        	{ validator: validatePass2, trigger: 'blur' }
		        	]
		        }
			}
		},
		methods: {
			handleCommand(command) {
				// 注销登陆
				if (command === 'logout') {
					this.logout();
				}
			},
			login() {
				this.$refs['loginForm'].validate((valid) => {
					if (valid) {
				      this.$axios({
				        method: 'post',
				        url: '/backend/user/login',
				        data: this.loginForm
				      }).then(res => {
				        if (res.data.code == 0) {
				          this.loginFormVisible = false;
				          this.$store.dispatch('loginFn', res.data.data);
				          this.$message({
				            type: 'success',
				            message: '登陆成功'
				          });
				        } else {
				          this.$message({
				            type: 'error',
				            message: res.data.message
				          })
				        }
				      }).catch(err => {
				      	console.log(err)
				        this.$message({
				          type: 'error',
				          message: '出错了'
				        })
				      })
					}
				})
			},

			regist() {
				this.$refs['registForm'].validate((valid) => {
					if (valid) {
				      this.$axios({
				        method: 'post',
				        url: '/backend/user/regist',
				        data: this.registForm
				      }).then(res => {
				        if (res.data.code == 0) {
				          this.$message({
				            type: 'success',
				            message: '注册成功'
				          });
				        } else {
				          this.$message({
				            type: 'error',
				            message: res.data.message
				          })
				        }
				        this.registFormVisible = false;
				      }).catch(err => {
				        this.$message({
				          type: 'error',
				          message: err.data.message
				        })
				      })
					}
				})
			},

			logout() {
			  this.$axios({
		        method: 'get',
		        url: '/backend/user/logout'
		      }).then(res => {
		        if (res.data.code == 0) {
		          this.$message({
		            type: 'success',
		            message: '注销成功'
		          });
		          
		          this.$store.dispatch('logoutFn');
		        } else {
		          this.$message({
		            type: 'error',
		            message: res.data.message
		          })
		        }
		      }).catch(err => {
	        	this.$message({
		          type: 'error',
		          message: '请重试'
		        })
		      })
			}
		},

		mounted () {
		}
	}
</script>
