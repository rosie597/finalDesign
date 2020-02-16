<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card {
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
	<div class="card">
    	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">展示信息</el-menu-item>
		  <el-menu-item index="2">基本设置</el-menu-item>
		  <el-menu-item index="3">成员管理</el-menu-item>
		</el-menu>
    	<div v-if="activeIndex === '1'">
    		<show-info></show-info>
    	</div>
    	<div v-if="activeIndex === '2'">
    		<basic-info></basic-info>
    	</div>
    	<div v-if="activeIndex === '3'">
    		<enrolment-manage></enrolment-manage>
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
	export default {
	  name: 'CommunitySetup',
	  components: { 
	  	'basic-info': BasicSetup, 
	    'enrolment-manage': EnrolmentManage, 
	    'show-info': ShowInfo 
	  },
	  data() {
	    return {
	    	activeIndex: "1",
	    };
	  },
	  methods: {
	  	handleSelect(key) {
	        this.activeIndex = key
        }
	  },
	  mounted () {
	  	console.log(this.$route.params.data)
	  }
	};
</script>

