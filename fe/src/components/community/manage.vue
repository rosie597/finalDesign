<style scoped>
.container {
  margin-top: 40px;
  background: rgba(176,224,230,.1);
  padding: 20px;
}
.container h1 {
  letter-spacing: 5px;
}
.export-ctn {
  display: inline-block;
}
div[data-v-ca82064a] {
  font-weight: bold;
}
</style>

<template>
  <div class="container">
    <div v-if="$store.state.isLogin">
      <h1>组织列表管理</h1>
      <el-divider></el-divider>
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
      <el-form-item label="组织名称">
        <el-input v-model="queryForm.name" placeholder="组织名称"></el-input>
      </el-form-item>
      <el-form-item label="组织区域">
        <el-select v-model="queryForm.region">
          <el-option v-for="(item, key) in districts" :key="item" :label="item" :value="key">{{item}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="组织类型">
        <el-select v-model="queryForm.type">
          <el-option v-for="(item, key) in types" :key="item" :label="item" :value="key">{{item}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryData(1)">查询</el-button>
        <div class="export-ctn">
          <export-excel :data="queryList" :fields="jsonFields" name="community_list.xls">
            <el-button type="primary" @click="">导出excel</el-button>
          </export-excel>
        </div>
      </el-form-item>
    </el-form>

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
            <el-button type="text" size="small" @click="toEditPage(scope.row)">查看</el-button>
            <el-button @click="deleteCommunity(scope.row)" type="text" size="small" v-if="$store.state.role == 2">删除</el-button>
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
    <div v-else>
      <need-login></need-login>
    </div>
  </div>
</template>

<script>
  import JsonExcel from 'vue-json-excel';
  import NeedLogin from '../common/components/need_login.vue';
  export default {
    name: 'CommunityManage',
    components: { 'need-login': NeedLogin, 'export-excel': JsonExcel },
    data() {
      return {
      	queryForm: {
      		name: '',
      		region: '',
      		type: ''
        },
      	districts: [],
      	types: [],
      	queryList: [],
      	totalPage: 1,
      	limit: 10,
      	// 表格的列配置
      	tableColumnConfig: this.COMMUNITY_TABLE_CONFIG,
        jsonFields: {
            '组织名称': 'name',
            '组织区域': 'district',
            '组织类型': 'type',
            '组织人数': 'enrolment',
            '负责人': 'sponsor',
            '负责人手机': 'phone',
            '创建时间': 'create_time'
        },
      };
    },
    computed: {
      listenLogin () {
        return this.$store.state.isLogin
      }
    },
    watch: {
      listenLogin (prev, cur) {
        if (cur) {
          this.queryData();
        }
      }
    },
    methods: {
    	deleteCommunity (item) {
    		let _this = this;
        this.$axios.get(`/backend/community/delete?id=${item.id}`).then(res => {
          if (res.data.code == 0) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            _this.queryData(this.page);
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
        let data = this.queryForm;
        data.limit = this.limit;
        data.offset = (p - 1) * this.limit;
        this.$axios({
          url: '/backend/community/list',
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

      toEditPage(data) {
        this.$router.push({ path: '/community/setup', query: data });
      }
    },
    created() {
      this.getDistricts();
      this.getCommunityTypes();
    },
    mounted() {
      if (this.$store.state.isLogin) {
        this.queryData(1);
      }
    }
  };
</script>
