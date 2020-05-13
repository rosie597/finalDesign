<style scoped>
.btn-ctn {
    position: absolute;
    right: 50px;
    top: 35px;
}
</style>

<template>
  <div class="container">
    <div class="btn-ctn" v-if="this.$store.state.role != 0">
        <el-button @click="showModal('new')" type="primary">
            新增成员
        </el-button>
    </div>
  	<el-form :inline="true" :model="queryForm" class="demo-form-inline">
	  <el-form-item label="姓名">
	    <el-input v-model="queryForm.name" placeholder="姓名"></el-input>
	  </el-form-item>
	  <el-form-item label="学号">
	    <el-input v-model="queryForm.number" placeholder="学号"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="queryData(1)">查询</el-button>
	  </el-form-item>
	</el-form>
    <el-table
	    :data="queryList"
	    border
	    style="width: 100%">
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
	      <template slot-scope="scope">
	        <el-button @click="showModal('edit',scope.row)" type="text" size="small" disabled="$store.state.role == 0">编辑</el-button>
	        <el-button @click="deleteMember(scope.row)" type="text" size="small" disabled="$store.state.role == 0">删除</el-button>
	      </template>
	    </el-table-column>
    </el-table>

	<el-pagination
	  layout="prev, pager, next"
	  :page-count="totalPage"
	  :page-size="limit"
      :current-page.sync="page"
	  @current-change="queryData">
	</el-pagination>

    <el-dialog :title="operateType == 'new' ? '新 增 成 员' : '编 辑'" :visible.sync="modalVisible">
      <el-form label-position="left" :rules="formRules" :model="editForm" ref="editForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="学号" prop="number">
            <el-input v-model="editForm.number" placeholder="请输入学号"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="editForm.phone" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="editForm.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
                <el-radio :label="2">其它</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="学院" prop="academy">
            <el-select v-model="editForm.academy" placeholder="请选择学院">
                <el-option
                  v-for="(item, index) in academyMap"
                  :key="item"
                  :label="item"
                  :value="index">
                </el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="modalVisible = false">取 消</el-button>
        <el-button type="primary" @click="newMember" v-if="operateType == 'new'">新 增</el-button>
        <el-button type="primary" @click="editMember" v-if="operateType == 'edit'">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'EnrolmentManage',
  props: ['id'],
  data() {
    let validatePhone = (rule, value, callback) => {
        let reg = /^1[345789]{1}[0-9]{9}/;
        if (value !== '' && !reg.test(value)) {
          callback(new Error('手机号码格式错误！'));
        } else {
          callback();
        }
    };
    return {
    	totalPage: 0,
    	limit: 10,
        page: 1,
    	queryForm: {
    		name: '',
    		number: ''
    	},
        editForm: {
            name: '',
            number: '',
            phone: '',
            academy: '',
            sex: '',
            community_id: this.id
        },
    	queryList: [
    		{
                id: 111,			
                name: '火星哥',
    			number: '3116009989',
    			academy: 0,
    			sex: 0,
    			phone: '1223321212',
                community_id: 10002
    		}
    	],
        academyMap: {0: '材能学院'},
    	tableColumnConfig: this.PEOPLE_TABLE_CONFIG,
        modalVisible: false,
        operateType: 'new',
        formRules: {
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
            number: [
                { required: true, message: '请输入学号', trigger: 'blur' }
            ],
            phone: [
                { validator: validatePhone, trigger: 'blur'}
            ]
        },
    };
  },
  methods: {
  	queryData (page) {
      this.page = page;
      let p = (typeof page === 'number') ? page : 1;
      let d = this.queryForm;
      d.limit = this.limit;
      d.offset = (p - 1) * this.limit;
      this.$axios({
        url: '/backend/user/list',
        method: 'post',
        data: d
      }).then(res => {
        if (res.data.code == 0) {
          let list = res.data.data;
          list.forEach(el => {
            el.academyText = this.academyMap[el.academy];
            el.sexText = Number(el.sex) ? '男' : '女';
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

    queryAcademyMap() {
      this.$axios.get('/academics').then(res => {
        if (res.data.code == 0) {
          this.academyMap = res.data.data;
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

    deleteMember(item) {
      let _this = this;
      this.$axios.get(`/backend/user/delete?id=${item.id}`).then(res => {
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

    showModal(type, item) {
        this.operateType = type;
        if (type == 'edit') {
            this.editForm = item; 
        } else {
            this.editForm = {
                name: '',
                number: '',
                phone: '',
                academy: '',
                sex: ''
            };
        }
        this.editForm.community_id = this.id;
        this.modalVisible = true;
    },

    newMember() {
      let _this = this;
      this.$axios({
        method: 'post',
        url: '/backend/user/new',
        data: this.editForm
      }).then(res => {
        if (res.data.code == 0) {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          _this.queryData(this.page);
          _this.modalVisible = false;
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

    editMember() {
      let _this = this;
      this.$axios({
        method: 'post',
        url: '/backend/user/edit',
        data: this.editForm
      }).then(res => {
        if (res.data.code == 0) {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          _this.queryData(this.page);
          _this.modalVisible = false;
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
    }
  },

  created() {
    this.queryAcademyMap();
    this.queryForm.community_id = this.id;
  },
  
  mounted() {
    this.queryData(1);
  }
};
</script>