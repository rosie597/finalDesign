<style scoped>
.content {
	margin-top: 30vh;
	color: #ccc;
}
.text-ctn {
	font-size: 22px;
	text-align: center;
	margin-top: 20px;
}
.icon-ctn {
	text-align: center;
}
.icon-ctn i {
	font-size: 76px;
}
</style>

<template>
  <div class="content">
  	<div class="icon-ctn">
  		<i class="el-icon-warning"></i>
  	</div>
  	<div class="text-ctn">{{tips}}</div>
  </div>
</template>

<script>
	export default {
	  name: 'NeedLogin',
	  data() {
	    return {
	    	tips: '请先点击右上角登陆'
	    };
	  }
	};
</script>