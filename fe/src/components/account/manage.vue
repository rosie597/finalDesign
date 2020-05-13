<style scoped>
.container {
    background: rgba(176,224,230,.1);
    margin-top: 40px;
}
</style>

<template>
  <div class="container">
    <div v-if="!this.$store.state.isLogin">
      <need-login></need-login>
    </div>
    <!-- 管理员以上可见 -->
    <div v-if="this.$store.state.isLogin && this.$store.state.role != 2">
      <no-access></no-access>
    </div>
    <div v-if="this.$store.state.isLogin && this.$store.state.role == 2">
    	<h1>账户管理</h1>

    	<el-table
  	    :data="queryList"
  	    border
  	    style="width: 70%">
  	    <el-table-column
  	      v-for="(item, index) in tableColumnConfig"
  	      :key="item.row"
  	      :fixed="index === 0"
  	      :prop="item.row"
  	      :label="item.label"
  	      :width="item.width">
  	    </el-table-column>
  	    <el-table-column
  	      fixed="right"
  	      label="操作"
  	      width="150">
  	      <template slot-scope="scope" v-if="scope.row.role == '游客'">
  	        <el-button @click="setMaster(scope.row)" type="text" size="small">设为管理员</el-button>
  	      </template>
  	    </el-table-column>
      </el-table>

    	<el-pagination
    	  layout="prev, pager, next"
    	  :page-count="totalPage"
    	  :page-size="limit"
    	  @current-change="queryData">
    	</el-pagination>
    </div>
  </div>
</template>

<script>
  import { NeedLogin, NoAccess } from '../common';
  export default {
    name: 'AccountManage',
    components: { 'need-login': NeedLogin, 'no-access': NoAccess },
    data() {
      return {
        limit: 10,
        queryList: [],
      	// 表格的列配置
        tableColumnConfig: this.USER_TABLE_CONFIG,
        roleList: [],
        totalPage: 1
      };
    },
    computed: {
      listenLogin () {
        return this.$store.state.isLogin;
      }
    },
    watch: {
      listenLogin (prev, cur) {
        if (cur && this.$store.state.role == 2) {
          this.queryData();
        }
      }
    },
    methods: {
    	queryData (page) {
        let p = (typeof page === 'number') ? page : 1;
        let data = {
        	limit: this.limit,
        	offset: (p - 1) * this.limit
        };

        this.$axios({
          url: '/backend/user/account/list',
          method: 'post',
          data
        }).then(res => {
          if (res.data.code == 0) {
            let list = res.data.data;
            list.forEach(el => {
              el.role = this.roleList[el.role];
            })
            this.queryList = list;
            this.totalPage = Number(res.data.total_page);
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

      getRoles () {
        this.$axios.get('/backend/user/role/list').then(res => {
          if (res.data.code == 0) {
            this.roleList = res.data.data;
          } else {
            this.$message({
              type: 'error',
              message: res.data.message
            })
          }
        }).catch(err => {
          this.$message({
            type: 'error',
            message: '请求错误'
          })
        })
      },

      setMaster (item) {
      	this.$axios({
      		url: '/backend/user/master',
      		data: {
      			uid: item.uid
      		},
      		method: 'post'
      	}).then(res => {
      		if (res.data.code == 0) {
  	          this.$message({
  	            type: 'success',
  	            message: '设置成功'
  	          })
  	          this.queryData();
  	        } else {
  	          this.$message({
  	            type: 'error',
  	            message: res.data.message
  	          })
  	        }
      	}).catch(err => {
          this.$message({
            type: 'error',
            message: '请求错误'
          })
        })
      }
    },
    created() {
    	this.getRoles();
    },
    mounted() {
      this.$store.state.isLogin && this.queryData(1);
    }
  };
</script>