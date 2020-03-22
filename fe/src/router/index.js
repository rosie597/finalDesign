import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import ActivityCreate from '@/components/activity/create';
import ActivityManage from '@/components/activity/manage';
import ActivityApproval from '@/components/approval/activity';
import CommunityApproval from '@/components/approval/community';
import CommunityCreate from '@/components/community/create';
import CommunityManage from '@/components/community/manage';
import CommunitySetup from '@/components/community/setup';
import AccountManage from '@/components/account/manage';
import NeedLogin from '@/components/common/components/need_login';
import NoAccess from '@/components/common/components/no_access';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requireLogin: false, // 访问是否需要登陆
        role: 0, // 可以访问的角色 0为全部、1为管理员以上、2为超级管理员
      },
    },
    {
      path: '/needLogin',
      name: 'needLogin',
      component: NeedLogin,
      meta: {
        requireLogin: false,
        role: 0,
      },
    },
    {
      path: '/noAccess',
      name: 'noAccess',
      component: NoAccess,
      meta: {
        requireLogin: true,
        role: 0,
      },
    },
    {
      path: '/accountManage',
      name: 'accountManage',
      component: AccountManage,
      meta: {
        requireLogin: true,
        role: 2,
      },
    },
    {
      path: '/activityCreate',
      name: 'activityCreate',
      component: ActivityCreate,
      meta: {
        requireLogin: true,
        role: 1,
      },
    },
    {
      path: '/activityManage',
      name: 'activityManage',
      component: ActivityManage,
      meta: {
        requireLogin: true,
        role: 0,
      },
    },
    {
      path: '/activityApproval',
      name: 'activityApproval',
      component: ActivityApproval,
      meta: {
        requireLogin: true,
        role: 2,
      },
    },
    {
      path: '/communityApproval',
      name: 'communityApproval',
      component: CommunityApproval,
      meta: {
        requireLogin: true,
        role: 2,
      },
    },
    {
      path: '/communityCreate',
      name: 'communityCreate',
      component: CommunityCreate,
      meta: {
        requireLogin: true,
        role: 1,
      },
    },
    {
      path: '/communityManage',
      name: 'communityManage',
      component: CommunityManage,
      meta: {
        requireLogin: true,
        role: 0,
      },
    },
    {
      path: '/community/setup',
      name: 'communitySetup',
      component: CommunitySetup,
      meta: {
        requireLogin: true,
        role: 1,
      },
    },
  ],
});
