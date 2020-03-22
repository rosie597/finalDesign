<style scoped>
</style>

<template>
  <div class="container">
  	{{tips}}
  </div>
</template>

<script>
	export default {
	  name: 'NeedLogin',
	  data() {
	    return {
	    	tips: '请先登陆'
	    };
	  }
	};
</script>