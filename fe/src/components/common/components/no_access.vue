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
	  name: 'NoAccess',
	  data() {
	    return {
	    	tips: '您没有此页面操作权限噢'
	    };
	  }
	};
</script>