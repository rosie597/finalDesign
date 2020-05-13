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
    	<h1>组织审批</h1>
    	<el-table
  	    :data="queryList"
  	    border
  	    style="width: 100%">
  	    <el-table-column
  	      v-for="(item, index) in tableColumnConfig"
  	      :key="item.rows"
  	      :fixed="index === 0"
  	      :prop="item.row"
  	      :label="item.label"
  	      :width="item.width">
  	    </el-table-column>
  	    <el-table-column
  	      fixed="right"
  	      label="操作"
  	    >
  	      <template slot-scope="scope">
  	        <el-button type="text" size="small" @click="communityApproval(scope.row, 102)">通过</el-button>
  	        <el-button type="text" size="small" @click="communityApproval(scope.row, 101)">不通过</el-button>
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
  name: 'CommunityApproval',
  components: { 'need-login': NeedLogin, 'no-access': NoAccess },
  data() {
    return {
    	districts: [],
    	types: [],
    	queryList: [],
    	totalPage: 1,
    	limit: 10,
    	// 表格的列配置
    	tableColumnConfig: this.COMMUNITY_TABLE_CONFIG
    };
  },
  computed: {
    listenLogin () {
      return this.$store.state.isLogin
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
    communityApproval (data, action) {
      this.$axios({
        url: '/backend/community/approval',
        data: {
          id: data.id,
          action
        },
        method: 'post'
      }).then(res => {
        if (res.data.code == 0) {
          this.$message({
            type: 'success',
            message: '操作成功'
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
          message: '网络错误'
        })
      })
    },

    getDistricts () {
      this.$axios.get('/districts').then(res => {
        if (res.data.code == 0) {
          this.districts = res.data.data;
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

    getCommunityTypes () {
      this.$axios.get('/backend/community/types').then(res => {
        if (res.data.code == 0) {
          this.types = res.data.data;
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

    queryData (page) {
      let _this = this;
      let p = (typeof page === 'number') ? page : 1;
      let data = {
      	limit: this.limit,
      	offset: (p - 1) * this.limit
      };

      this.$axios({
        url: '/backend/community/unreview/list',
        method: 'post',
        data
      }).then(res => {
        if (res.data.code == 0) {
          let list = res.data.data;
          list.forEach(el => {
            el.type = _this.types[el.type];
            el.district = _this.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
          })
          _this.queryList = list;
          _this.totalPage = Number(res.data.total_page);
        } else {
          _this.$message({
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

    agree () {

    },
    disagree () {

    }
  },
  created() {
    this.getDistricts();
    this.getCommunityTypes();
  },
  mounted() {
    this.$store.state.isLogin && this.queryData(1);
  }
};
</script>
