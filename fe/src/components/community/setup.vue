<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card {
	  position: relative;
	  width: 900px;
	  border-radius: 15px;
	  border: 1px solid #eee;
	  box-shadow: 1px 5px 15px #eee;
	  margin-right: 20px;
	  padding: 20px;
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
	    	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1">主页信息</el-menu-item>
			  <el-menu-item index="2">基本设置</el-menu-item>
			  <el-menu-item index="3">成员管理</el-menu-item>
			</el-menu>
	    	<div v-if="activeIndex === '1'">
	    		<show-info :id="id"></show-info>
	    	</div>
	    	<div v-if="activeIndex === '2'">
	    		<basic-info :id="id"></basic-info>
	    	</div>
	    	<div v-if="activeIndex === '3'">
	    		<enrolment-manage :id="id"></enrolment-manage>
	    	</div>
		</div>
	</div>
  </div>
</template>

<script>
	import { 
		BasicSetup, 
		EnrolmentManage, 
		ShowInfo 
	} from './components/index.js';
	import { NeedLogin, NoAccess } from '../common';
	export default {
	  name: 'CommunitySetup',
	  components: { 
	  	'basic-info': BasicSetup, 
	    'enrolment-manage': EnrolmentManage, 
	    'show-info': ShowInfo,
	    'need-login': NeedLogin, 
	    'no-access': NoAccess
	  },
	  data() {
	    return {
	    	activeIndex: "1",
	    	id: ''
	    };
	  },
	  methods: {
	  	handleSelect(key) {
	        this.activeIndex = key
        }
	  },
	  created() {
	  	this.id = this.$route.query.id;
	  },
	  mounted() {
	  }
	};
</script>

