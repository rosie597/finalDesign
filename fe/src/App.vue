<template>
  <div id="app">
    <el-container>
        <el-aside width="260px">
          <div class="top-logo">
            <el-image src="/upload/gdut.jpg" style="height: 100%;" fit="contain"></el-image>
          </div>
          <div class="directory">
            <el-col :span="24">
              <h5>目录</h5>
              <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                router>
                <el-menu-item index="/">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>组织</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/communityCreate">组织创建</el-menu-item>
                    <el-menu-item index="/communityManage">组织管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>活动</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/activityCreate">活动创建</el-menu-item>
                    <el-menu-item index="/activityManage">活动管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>审批中心</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/communityApproval">组织审批</el-menu-item>
                    <el-menu-item index="/activityApproval">活动审批</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="/accountManage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">账户管理</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </div>
        </el-aside>
        <el-container>
          <top-header></top-header>
          <el-main>
            <div class="main">
              <keep-alive>
                <router-view :key="$route.path + $route.query.id"/>
              </keep-alive>
            </div>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import { TopHeader } from './components/common/index.js';

export default {
  name: 'App',
  components: {
    'top-header': TopHeader,
  },
};
</script>

<style scoped>
  .body-ctn {
    padding: 0;
    margin: 30px;
  }
  .top-logo {
    height: 48px;
/*    line-height: 44px;
    letter-spacing: 8px;
    border-bottom: 1px solid #eee;
    background-color: rgba(0, 0, 255, 0.1);
    font-weight: 800;
    font-size: 24px;
    color: #409eff;
    text-align: center;
    vertical-align: center;*/
  }
  .el-aside {
    padding-left: 10px;
  }
  .directory {
    width: 100%;
    margin-top: 20px;
  }
  .el-container {
    /*padding-top: 15px;*/
  }
</style>
