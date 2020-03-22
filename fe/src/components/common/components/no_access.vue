<style scoped>
</style>

<template>
  <div class="container">
  	{{tips}}
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