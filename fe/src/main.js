import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import App from './App';
import router from './router';
import config from './lib/config/config.js';

// Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(config);
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
  	a: 123
  }
});
