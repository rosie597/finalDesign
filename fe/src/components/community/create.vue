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
  <div class="container">
    <div class="card">
	    <div class="card-header">
	      新建组织
	    </div>
	    <div class="card-ctn">
	    	<el-form ref="form" label-width="100px">
	    		<el-form-item label="校区">
	    			<el-select v-model="queryForm.district" placeholder="请选择">
					    <el-option
					      v-for="item in districts"
					      :key="item"
					      :label="item"
					      :value="item">
					    </el-option>
				    </el-select>
	    		</el-form-item>

	    		<el-form-item label="组织名称">
	    			<el-input v-model="queryForm.name" placeholder="请输入名称"></el-input>
	    		</el-form-item>
	    		
	    		<el-form-item label="组织类型">
	    			<el-select v-model="queryForm.type" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				    </el-select>
	    		</el-form-item>

	    		<el-form-item label="组织简介">
	    			<el-input
					  type="textarea"
					  :autosize="{ minRows: 2, maxRows: 6}"
					  placeholder="社团简介不少于200字"
					  v-model="queryForm.desc">
					</el-input>
	    		</el-form-item>
	    		
	    		<el-form-item label="组织负责人">
	    			<el-input v-model="queryForm.master" placeholder="请输入负责人真实姓名"></el-input>
	    		</el-form-item>

	    		<el-form-item label="负责人手机">
	    			<el-input v-model="queryForm.phone" placeholder="请输入手机号"></el-input>
	    		</el-form-item>
	    	</el-form>
	    </div>
	    <div class="card-footer">
	      <el-button type="primary">提交</el-button>
	    </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityCreate',
  data() {
    return {
    	queryForm: {
    		district: '',
    		type: '',
    		name: '',
    		desc: '',
    		master: '',
    		phone: ''
    	},
    	districts: ['大学城', '东风路', '龙洞', '番禺']
    };
  },
};
</script>
