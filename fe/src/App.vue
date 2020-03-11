<template>
  <div id="app">
    <el-container>
        <el-aside width="250px">
          <div class="top-logo"></div>
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
                    <el-menu-item index="/communityApproval">社团审批</el-menu-item>
                    <el-menu-item index="/activityApproval">活动审批</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
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

<style>
  * {
    margin: 0;
  }
  .body-ctn {
    padding: 0;
    margin: 30px;
  }
  .top-logo {
    height: 48px;
    background: blue;
  }
  .directory {
    width: 100%;
    margin-top: 20px;
  }
  .el-container {
    /*padding-top: 15px;*/
  }
</style>
