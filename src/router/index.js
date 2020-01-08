import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import ActivityCreate from '@/components/activity/create';
import ActivityManage from '@/components/activity/manage';
import ActivityApproval from '@/components/approval/activity';
import CommunityApproval from '@/components/approval/community';
import CommunityCreate from '@/components/community/create';
import CommunityManage from '@/components/community/manage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/activityCreate',
      name: 'activityCreate',
      component: ActivityCreate,
    },
    {
      path: '/activityManage',
      name: 'activityManage',
      component: ActivityManage,
    },
    {
      path: '/activityApproval',
      name: 'activityApproval',
      component: ActivityApproval,
    },
    {
      path: '/communityApproval',
      name: 'communityApproval',
      component: CommunityApproval,
    },
    {
      path: '/communityCreate',
      name: 'communityCreate',
      component: CommunityCreate,
    },
    {
      path: '/communityManage',
      name: 'communityManage',
      component: CommunityManage,
    },
  ],
});
