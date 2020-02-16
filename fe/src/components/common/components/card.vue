<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

<template>
  <div class="card">
  	<div class="card-header">
  		{{title}}
  	</div>
  	<div class="card-ctn">
  		<slot name="ctn"></slot>
  	</div>
  	<div class="card-footer">
  		<slot name="footer"></slot>
  	</div>
  </div>
</template>

<script>
	export default {
	  name: 'card',
	  props: {
	  	title: ''
	  },
	  data() {
	    return {
	    };
	  }
	};
</script>