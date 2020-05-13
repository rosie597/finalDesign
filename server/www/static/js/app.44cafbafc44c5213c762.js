webpackJsonp([1],{

/***/ "+D0l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/tFJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3Gtn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Df4b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ECTh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "L/5f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MSkE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__("mw3O");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("zL8q");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__("erWL");
var common_default = /*#__PURE__*/__webpack_require__.n(common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/common/components/card.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var card = ({
  name: 'card',
  props: {
    title: ''
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00fcc723","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/common/components/card.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v("\n\t\t"+_vm._s(_vm.title)+"\n\t")]),_vm._v(" "),_c('div',{staticClass:"card-ctn"},[_vm._t("ctn")],2),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_vm._t("footer")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_card = (esExports);
// CONCATENATED MODULE: ./src/components/common/components/card.vue
function injectStyle (ssrContext) {
  __webpack_require__("L/5f")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00fcc723"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  card,
  components_card,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var common_components_card = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/common/components/top_header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var top_header = ({
	name: 'TopHeader',
	data: function data() {
		var _this = this;

		var validatePass2 = function validatePass2(rule, value, callback) {
			if (value !== _this.registForm.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			loginFormVisible: false,
			registFormVisible: false,
			password2: '',
			registForm: {
				account: '',
				password: '',
				number: '',
				password2: '',
				nickname: ''
			},
			loginForm: {
				account: '',
				password: ''
			},
			formLabelWidth: '110px',
			loginRules: {
				account: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			},
			registRules: {
				account: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				password2: [{ required: true, message: '请再次输入密码', trigger: 'blur' }, { validator: validatePass2, trigger: 'blur' }]
			}
		};
	},

	methods: {
		handleCommand: function handleCommand(command) {
			// 注销登陆
			if (command === 'logout') {
				this.logout();
			}
		},
		login: function login() {
			var _this2 = this;

			this.$refs['loginForm'].validate(function (valid) {
				if (valid) {
					_this2.$axios({
						method: 'post',
						url: '/backend/user/login',
						data: _this2.loginForm
					}).then(function (res) {
						if (res.data.code == 0) {
							_this2.loginFormVisible = false;
							_this2.$store.dispatch('loginFn', res.data.data);
							_this2.$message({
								type: 'success',
								message: '登陆成功'
							});
						} else {
							_this2.$message({
								type: 'error',
								message: res.data.message
							});
						}
					}).catch(function (err) {
						console.log(err);
						_this2.$message({
							type: 'error',
							message: '出错了'
						});
					});
				}
			});
		},
		regist: function regist() {
			var _this3 = this;

			this.$refs['registForm'].validate(function (valid) {
				if (valid) {
					_this3.$axios({
						method: 'post',
						url: '/backend/user/regist',
						data: _this3.registForm
					}).then(function (res) {
						if (res.data.code == 0) {
							_this3.$message({
								type: 'success',
								message: '注册成功'
							});
						} else {
							_this3.$message({
								type: 'error',
								message: res.data.message
							});
						}
						_this3.registFormVisible = false;
					}).catch(function (err) {
						_this3.$message({
							type: 'error',
							message: err.data.message
						});
					});
				}
			});
		},
		logout: function logout() {
			var _this4 = this;

			this.$axios({
				method: 'get',
				url: '/backend/user/logout'
			}).then(function (res) {
				if (res.data.code == 0) {
					_this4.$message({
						type: 'success',
						message: '注销成功'
					});

					_this4.$store.dispatch('logoutFn');
				} else {
					_this4.$message({
						type: 'error',
						message: res.data.message
					});
				}
			}).catch(function (err) {
				_this4.$message({
					type: 'error',
					message: '请重试'
				});
			});
		}
	},

	mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0ea7cd99","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/common/components/top_header.vue
var top_header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-ctn"},[(this.$store.state.isLogin)?_c('div',{staticClass:"info"},[_c('span',[_vm._v(_vm._s(this.$store.state.nickname))]),_vm._v(" "),_c('el-dropdown',{on:{"command":_vm.handleCommand}},[_c('span',{staticClass:"el-dropdown-link"},[_c('img',{attrs:{"src":this.$store.state.avatar,"alt":"头像"}})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{attrs:{"command":"setup"}},[_vm._v("账号设置")]),_vm._v(" "),_c('el-dropdown-item',{attrs:{"command":"logout"}},[_vm._v("注销登陆")])],1)],1)],1):_vm._e(),_vm._v(" "),(!this.$store.state.isLogin)?_c('div',{staticClass:"btn-ctn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.loginFormVisible = true}}},[_vm._v("登 陆")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.registFormVisible = true}}},[_vm._v("注 册")])],1):_vm._e(),_vm._v(" "),_c('el-dialog',{attrs:{"title":"登 陆","visible":_vm.loginFormVisible},on:{"update:visible":function($event){_vm.loginFormVisible=$event}}},[_c('el-form',{ref:"loginForm",attrs:{"label-position":"left","rules":_vm.loginRules,"model":_vm.loginForm}},[_c('el-form-item',{attrs:{"label":"手机号","label-width":_vm.formLabelWidth,"prop":"account"}},[_c('el-input',{model:{value:(_vm.loginForm.account),callback:function ($$v) {_vm.$set(_vm.loginForm, "account", $$v)},expression:"loginForm.account"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","label-width":_vm.formLabelWidth,"prop":"password"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.loginForm.password),callback:function ($$v) {_vm.$set(_vm.loginForm, "password", $$v)},expression:"loginForm.password"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.loginFormVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.login}},[_vm._v("登 陆")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"账 号 注 册","visible":_vm.registFormVisible},on:{"update:visible":function($event){_vm.registFormVisible=$event}}},[_c('el-form',{ref:"registForm",attrs:{"label-position":"left","rules":_vm.registRules,"model":_vm.registForm}},[_c('el-form-item',{attrs:{"label":"手机号","label-width":_vm.formLabelWidth,"prop":"account"}},[_c('el-input',{model:{value:(_vm.registForm.account),callback:function ($$v) {_vm.$set(_vm.registForm, "account", $$v)},expression:"registForm.account"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"昵称","label-width":_vm.formLabelWidth,"prop":"nickname"}},[_c('el-input',{model:{value:(_vm.registForm.nickname),callback:function ($$v) {_vm.$set(_vm.registForm, "nickname", $$v)},expression:"registForm.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"学号/工号","label-width":_vm.formLabelWidth,"prop":"number"}},[_c('el-input',{model:{value:(_vm.registForm.number),callback:function ($$v) {_vm.$set(_vm.registForm, "number", $$v)},expression:"registForm.number"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码","label-width":_vm.formLabelWidth,"prop":"password"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.registForm.password),callback:function ($$v) {_vm.$set(_vm.registForm, "password", $$v)},expression:"registForm.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"再次输入密码","label-width":_vm.formLabelWidth,"prop":"password2"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.registForm.password2),callback:function ($$v) {_vm.$set(_vm.registForm, "password2", $$v)},expression:"registForm.password2"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.registFormVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.regist}},[_vm._v("注 册")])],1)],1)],1)}
var top_header_staticRenderFns = []
var top_header_esExports = { render: top_header_render, staticRenderFns: top_header_staticRenderFns }
/* harmony default export */ var components_top_header = (top_header_esExports);
// CONCATENATED MODULE: ./src/components/common/components/top_header.vue
function top_header_injectStyle (ssrContext) {
  __webpack_require__("MSkE")
}
var top_header_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var top_header___vue_template_functional__ = false
/* styles */
var top_header___vue_styles__ = top_header_injectStyle
/* scopeId */
var top_header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var top_header___vue_module_identifier__ = null
var top_header_Component = top_header_normalizeComponent(
  top_header,
  components_top_header,
  top_header___vue_template_functional__,
  top_header___vue_styles__,
  top_header___vue_scopeId__,
  top_header___vue_module_identifier__
)

/* harmony default export */ var common_components_top_header = (top_header_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/common/components/need_login.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var need_login = ({
  name: 'NeedLogin',
  data: function data() {
    return {
      tips: '请先点击右上角登陆'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24bf2966","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/common/components/need_login.vue
var need_login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text-ctn"},[_vm._v(_vm._s(_vm.tips))])])}
var need_login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-ctn"},[_c('i',{staticClass:"el-icon-warning"})])}]
var need_login_esExports = { render: need_login_render, staticRenderFns: need_login_staticRenderFns }
/* harmony default export */ var components_need_login = (need_login_esExports);
// CONCATENATED MODULE: ./src/components/common/components/need_login.vue
function need_login_injectStyle (ssrContext) {
  __webpack_require__("Df4b")
}
var need_login_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var need_login___vue_template_functional__ = false
/* styles */
var need_login___vue_styles__ = need_login_injectStyle
/* scopeId */
var need_login___vue_scopeId__ = "data-v-24bf2966"
/* moduleIdentifier (server only) */
var need_login___vue_module_identifier__ = null
var need_login_Component = need_login_normalizeComponent(
  need_login,
  components_need_login,
  need_login___vue_template_functional__,
  need_login___vue_styles__,
  need_login___vue_scopeId__,
  need_login___vue_module_identifier__
)

/* harmony default export */ var common_components_need_login = (need_login_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/common/components/no_access.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var no_access = ({
  name: 'NoAccess',
  data: function data() {
    return {
      tips: '您没有此页面操作权限噢'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-586da988","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/common/components/no_access.vue
var no_access_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text-ctn"},[_vm._v(_vm._s(_vm.tips))])])}
var no_access_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-ctn"},[_c('i',{staticClass:"el-icon-warning"})])}]
var no_access_esExports = { render: no_access_render, staticRenderFns: no_access_staticRenderFns }
/* harmony default export */ var components_no_access = (no_access_esExports);
// CONCATENATED MODULE: ./src/components/common/components/no_access.vue
function no_access_injectStyle (ssrContext) {
  __webpack_require__("qa/e")
}
var no_access_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var no_access___vue_template_functional__ = false
/* styles */
var no_access___vue_styles__ = no_access_injectStyle
/* scopeId */
var no_access___vue_scopeId__ = "data-v-586da988"
/* moduleIdentifier (server only) */
var no_access___vue_module_identifier__ = null
var no_access_Component = no_access_normalizeComponent(
  no_access,
  components_no_access,
  no_access___vue_template_functional__,
  no_access___vue_styles__,
  no_access___vue_scopeId__,
  no_access___vue_module_identifier__
)

/* harmony default export */ var common_components_no_access = (no_access_Component.exports);

// CONCATENATED MODULE: ./src/components/common/index.js






// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var App = ({
  name: 'App',
  components: {
    'top-header': common_components_top_header
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3c7483b1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('el-container',[_c('el-aside',{attrs:{"width":"250px"}},[_c('div',{staticClass:"top-logo"},[_c('i',{staticClass:"el-icon-school"}),_vm._v("\n          组织管理系统\n        ")]),_vm._v(" "),_c('div',{staticClass:"directory"},[_c('el-col',{attrs:{"span":24}},[_c('h5',[_vm._v("目录")]),_vm._v(" "),_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/","router":""}},[_c('el-menu-item',{attrs:{"index":"/"}},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("首页")])]),_vm._v(" "),_c('el-submenu',{attrs:{"index":"2"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-location"}),_vm._v(" "),_c('span',[_vm._v("组织")])]),_vm._v(" "),_c('el-menu-item-group',[_c('el-menu-item',{attrs:{"index":"/communityCreate"}},[_vm._v("组织创建")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/communityManage"}},[_vm._v("组织管理")])],1)],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"3"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-location"}),_vm._v(" "),_c('span',[_vm._v("活动")])]),_vm._v(" "),_c('el-menu-item-group',[_c('el-menu-item',{attrs:{"index":"/activityCreate"}},[_vm._v("活动创建")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/activityManage"}},[_vm._v("活动管理")])],1)],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"4"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-location"}),_vm._v(" "),_c('span',[_vm._v("审批中心")])]),_vm._v(" "),_c('el-menu-item-group',[_c('el-menu-item',{attrs:{"index":"/communityApproval"}},[_vm._v("社团审批")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/activityApproval"}},[_vm._v("活动审批")])],1)],2),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/accountManage"}},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("账户管理")])])],1)],1)],1)]),_vm._v(" "),_c('el-container',[_c('top-header'),_vm._v(" "),_c('el-main',[_c('div',{staticClass:"main"},[_c('keep-alive',[_c('router-view',{key:_vm.$route.path + _vm.$route.query.id})],1)],1)])],1)],1)],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("aO1s")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var home = ({
  name: 'Home',
  components: { 'need-login': common_components_need_login },
  data: function data() {
    return {
      noticeInfo: [{
        msg: "活动123审批不通过",
        time: "1分钟前"
      }, {
        msg: "社团申请审批通过",
        time: "1天前"
      }]
    };
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6210cbbe","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/home.vue
var home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',[_c('div',{staticClass:"card-ctn",staticStyle:{"display":"flex"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v("\n          当前活动\n        ")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("活动详情")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"}},[_vm._v("报名情况")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"}},[_vm._v("更多活动")])],1)]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v("\n          消息卡片\n        ")]),_vm._v(" "),_c('div',{staticClass:"card-ctn"},_vm._l((_vm.noticeInfo),function(item){return _c('div',{staticClass:"notice-item"},[_c('span',[_vm._v(_vm._s(item.msg))]),_vm._v(" "),_c('span',{staticStyle:{"float":"right"}},[_vm._v(_vm._s(item.time))])])}),0)])])])])}
var home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-ctn"},[_c('img',{attrs:{"src":"","alt":"活动封面"}})])}]
var home_esExports = { render: home_render, staticRenderFns: home_staticRenderFns }
/* harmony default export */ var components_home = (home_esExports);
// CONCATENATED MODULE: ./src/components/home.vue
function home_injectStyle (ssrContext) {
  __webpack_require__("3Gtn")
}
var home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var home___vue_template_functional__ = false
/* styles */
var home___vue_styles__ = home_injectStyle
/* scopeId */
var home___vue_scopeId__ = "data-v-6210cbbe"
/* moduleIdentifier (server only) */
var home___vue_module_identifier__ = null
var home_Component = home_normalizeComponent(
  home,
  components_home,
  home___vue_template_functional__,
  home___vue_styles__,
  home___vue_scopeId__,
  home___vue_module_identifier__
)

/* harmony default export */ var src_components_home = (home_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-ueditor-wrap/lib/vue-ueditor-wrap.min.js
var vue_ueditor_wrap_min = __webpack_require__("Pgpu");
var vue_ueditor_wrap_min_default = /*#__PURE__*/__webpack_require__.n(vue_ueditor_wrap_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/activity/create.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var create = ({
	name: 'ActivityCreate',
	components: { 'vue-ueditor-wrap': vue_ueditor_wrap_min_default.a, 'card': common_components_card, 'need-login': common_components_need_login, 'no-access': common_components_no_access },
	data: function data() {
		var validatePhone = function validatePhone(rule, value, callback) {
			var reg = /^1[345789]{1}[0-9]{9}/;
			if (!reg.test(value)) {
				callback(new Error('手机号码格式错误！'));
			} else {
				callback();
			}
		};
		return {
			active: this.CREATE_STATUS.base_info,
			activityType: [],
			districts: [],
			queryForm: {
				type: '',
				district: '',
				name: '',
				place: '',
				time: '',
				sponsor: '',
				phone: '',
				rich_content: '',
				description: '',
				logo: ''
			},
			myConfig: {
				autoHeightEnabled: false,
				initialFrameHeight: 240,
				initialFrameWidth: '100%',
				serverUrl: '', // 图片上传路径
				UEDITOR_HOME_URL: '/static/UEditor/'
			},
			rules1: {
				name: [{ required: true, message: '请输入活动名', trigger: 'blur' }],
				district: [{ required: true, message: '请选择区域', trigger: 'blur' }],
				type: [{ required: true, message: '请选择活动类型', trigger: 'blur' }],
				place: [{ required: true, message: '请输入活动地址', trigger: 'blur' }],
				time: [{ required: true, message: '请选择活动时间', trigger: 'blur' }]
			},
			rules2: {
				sponsor: [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }],
				phone: [{ required: true, message: '请输入负责人手机', trigger: 'blur' }, { validator: validatePhone, trigger: 'blur' }]
			}
		};
	},

	methods: {
		// 进入下一步
		toNext: function toNext() {
			var _this = this;

			if (this.active === this.CREATE_STATUS.base_info) {
				this.$refs['form1'].validate(function (valid) {
					if (valid) {
						_this.active++;
					}
				});
			} else if (this.active === this.CREATE_STATUS.sponsor_info) {
				this.$refs['form2'].validate(function (valid) {
					if (valid) {
						_this.active++;
					}
				});
			}

			if (this.active > this.CREATE_STATUS.displayment) {
				this.active = this.CREATE_STATUS.base_info;
			}
		},

		// 回到上一步
		toLast: function toLast() {
			this.active--;
		},
		getDistricts: function getDistricts() {
			var _this2 = this;

			this.$axios.get('/districts').then(function (res) {
				_this2.districts = res.data.data;
			}).catch(function (err) {
				_this2.$message({
					type: 'error',
					message: '网络错误'
				});
			});
		},
		getActivityTypes: function getActivityTypes() {
			var _this3 = this;

			this.$axios.get('/backend/activity/types').then(function (res) {
				_this3.activityType = res.data.data;
			}).catch(function (err) {
				_this3.$message({
					type: 'error',
					message: '网络错误'
				});
			});
		},
		submitForm: function submitForm() {
			var _this4 = this;

			var time = this.queryForm.time;
			this.queryForm.time = time.getTime();
			this.$axios({
				url: './backend/activity/new',
				method: 'post',
				data: this.queryForm
			}).then(function (res) {
				if (res.data.code == 0) {
					_this4.active = _this4.CREATE_STATUS.success;
				} else {
					_this4.$message({
						type: 'error',
						message: res.data.message
					});
				}
			}).catch(function (err) {
				_this4.$message({
					type: 'error',
					message: '网络错误'
				});
			});
		},

		// 继续新建
		toCreate: function toCreate() {
			this.active = this.CREATE_STATUS.base_info;
			this.queryForm = {
				type: '',
				district: '',
				name: '',
				place: '',
				time: '',
				sponsor: '',
				phone: '',
				rich_content: '',
				description: '',
				logo: ''
			};
		}
	},
	mounted: function mounted() {
		this.getDistricts();
		this.getActivityTypes();
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-11c9b8eb","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/activity/create.vue
var create_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role == 0)?_c('div',[_c('no-access')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role != 0)?_c('div',[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v("\n\t\t      新建活动\n\t\t    ")]),_vm._v(" "),_c('div',{staticClass:"card-ctn"},[_c('el-steps',{attrs:{"active":_vm.active,"finish-status":"success"}},[_c('el-step',{attrs:{"title":"活动信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"负责人信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"活动展示"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"提交成功"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"card-ctn"},[(_vm.active === _vm.CREATE_STATUS.base_info)?_c('div',{staticClass:"step1"},[_c('el-form',{ref:"form1",attrs:{"label-width":"100px","model":_vm.queryForm,"rules":_vm.rules1}},[_c('el-form-item',{attrs:{"label":"校区","prop":"district"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryForm.district),callback:function ($$v) {_vm.$set(_vm.queryForm, "district", $$v)},expression:"queryForm.district"}},_vm._l((_vm.districts),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入名称"},model:{value:(_vm.queryForm.name),callback:function ($$v) {_vm.$set(_vm.queryForm, "name", $$v)},expression:"queryForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryForm.type),callback:function ($$v) {_vm.$set(_vm.queryForm, "type", $$v)},expression:"queryForm.type"}},_vm._l((_vm.activityType),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动地点","prop":"place"}},[_c('el-input',{attrs:{"placeholder":"请输入具体地点"},model:{value:(_vm.queryForm.place),callback:function ($$v) {_vm.$set(_vm.queryForm, "place", $$v)},expression:"queryForm.place"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动时间","prop":"time"}},[_c('div',[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期时间","default-time":"12:00:00"},model:{value:(_vm.queryForm.time),callback:function ($$v) {_vm.$set(_vm.queryForm, "time", $$v)},expression:"queryForm.time"}})],1)])],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.sponsor_info)?_c('div',{staticClass:"step2"},[_c('el-form',{ref:"form2",attrs:{"label-width":"100px","rules":_vm.rules2,"model":_vm.queryForm}},[_c('el-form-item',{attrs:{"label":"活动负责人","prop":"sponsor"}},[_c('el-input',{attrs:{"placeholder":"请输入真实姓名"},model:{value:(_vm.queryForm.sponsor),callback:function ($$v) {_vm.$set(_vm.queryForm, "sponsor", $$v)},expression:"queryForm.sponsor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式","prop":"phone"}},[_c('el-input',{attrs:{"placeholder":"请输入手机号"},model:{value:(_vm.queryForm.phone),callback:function ($$v) {_vm.$set(_vm.queryForm, "phone", $$v)},expression:"queryForm.phone"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.displayment)?_c('div',{staticClass:"step3"},[_c('el-form',{ref:"form3",attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"活动封面"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"drag":"","action":"https://jsonplaceholder.typicode.com/posts/","multiple":""}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v("将文件拖到此处，或"),_c('em',[_vm._v("点击上传")])]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("只能上传jpg/png文件，且不超过500kb")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动简介"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2, maxRows: 6},"placeholder":"活动简介不少于100字"},model:{value:(_vm.queryForm.description),callback:function ($$v) {_vm.$set(_vm.queryForm, "description", $$v)},expression:"queryForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动内容介绍"}},[_c('vue-ueditor-wrap',{attrs:{"myConfig":_vm.myConfig},model:{value:(_vm.queryForm.rich_content),callback:function ($$v) {_vm.$set(_vm.queryForm, "rich_content", $$v)},expression:"queryForm.rich_content"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.success)?_c('div',{staticClass:"success"},[_c('i',{staticClass:"el-icon-success"}),_vm._v(" "),_c('div',[_vm._v("提交成功")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[(_vm.active && _vm.active !== _vm.CREATE_STATUS.success)?_c('el-button',{on:{"click":_vm.toLast}},[_vm._v("\n\t\t    \t\t上一步\n\t\t    \t")]):_vm._e(),_vm._v(" "),(_vm.active < _vm.CREATE_STATUS.displayment)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.toNext}},[_vm._v("\n\t\t\t\t\t下一步\n\t\t\t\t")]):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.displayment)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("\n\t\t\t\t\t提交\n\t\t\t\t")]):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.success)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.toCreate}},[_vm._v("\n\t\t\t    \t继续新建\n\t\t\t\t")]):_vm._e()],1)])]):_vm._e()])}
var create_staticRenderFns = []
var create_esExports = { render: create_render, staticRenderFns: create_staticRenderFns }
/* harmony default export */ var activity_create = (create_esExports);
// CONCATENATED MODULE: ./src/components/activity/create.vue
function create_injectStyle (ssrContext) {
  __webpack_require__("hrS3")
}
var create_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var create___vue_template_functional__ = false
/* styles */
var create___vue_styles__ = create_injectStyle
/* scopeId */
var create___vue_scopeId__ = "data-v-11c9b8eb"
/* moduleIdentifier (server only) */
var create___vue_module_identifier__ = null
var create_Component = create_normalizeComponent(
  create,
  activity_create,
  create___vue_template_functional__,
  create___vue_styles__,
  create___vue_scopeId__,
  create___vue_module_identifier__
)

/* harmony default export */ var components_activity_create = (create_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/downloadjs/download.js
var download = __webpack_require__("sJst");
var download_default = /*#__PURE__*/__webpack_require__.n(download);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-json-excel/JsonExcel.vue





//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var JsonExcel = ({
  props: {
    // mime type [xls, csv]
    type: {
      type: String,
      default: "xls"
    },
    // Json to download
    data: {
      type: Array,
      required: false,
      default: null
    },
    // fields inside the Json Object that you want to export
    // if no given, all the properties in the Json are exported
    fields: {
      type: Object,
      required: false
    },
    // this prop is used to fix the problem with other components that use the
    // variable fields, like vee-validate. exportFields works exactly like fields
    exportFields: {
      type: Object,
      required: false
    },
    // Use as fallback when the row has no field values
    defaultValue: {
      type: String,
      required: false,
      default: ""
    },
    // Title(s) for the data, could be a string or an array of strings (multiple titles)
    title: {
      default: null
    },
    // Footer(s) for the data, could be a string or an array of strings (multiple footers)
    footer: {
      default: null
    },
    // filename to export
    name: {
      type: String,
      default: "data.xls"
    },
    fetch: {
      type: Function
    },
    meta: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    worksheet: {
      type: String,
      default: "Sheet1"
    },
    //event before generate was called
    beforeGenerate: {
      type: Function
    },
    //event before download pops up
    beforeFinish: {
      type: Function
    }
  },
  computed: {
    // unique identifier
    idName: function idName() {
      var now = new Date().getTime();
      return "export_" + now;
    },
    downloadFields: function downloadFields() {
      if (this.fields !== undefined) return this.fields;

      if (this.exportFields !== undefined) return this.exportFields;
    }
  },
  methods: {
    generate: function generate() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var data, json;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _this.beforeGenerate === 'function')) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _this.beforeGenerate();

              case 3:
                data = _this.data;

                if (!(typeof _this.fetch === 'function' || !data)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return _this.fetch();

              case 7:
                data = _context.sent;

              case 8:
                if (!(!data || !data.length)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                json = _this.getProcessedJson(data, _this.downloadFields);

                if (!(_this.type === "html")) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", _this.export(_this.jsonToXLS(json), _this.name.replace(".xls", ".html"), "text/html"));

              case 15:
                if (!(_this.type === "csv")) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return", _this.export(_this.jsonToCSV(json), _this.name.replace(".xls", ".csv"), "application/csv"));

              case 17:
                return _context.abrupt("return", _this.export(_this.jsonToXLS(json), _this.name, "application/vnd.ms-excel"));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    /*
    Use downloadjs to generate the download link
    */
    export: function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(data, filename, mime) {
        var blob;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                blob = this.base64ToBlob(data, mime);

                if (!(typeof this.beforeFinish === 'function')) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return this.beforeFinish();

              case 4:
                download_default()(blob, filename, mime);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _export(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return _export;
    }(),
    /*
    jsonToXLS
    ---------------
    Transform json data into an xml document with MS Excel format, sadly
    it shows a prompt when it opens, that is a default behavior for
    Microsoft office and cannot be avoided. It's recommended to use CSV format instead.
    */
    jsonToXLS: function jsonToXLS(data) {
      var xlsTemp = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>';
      var xlsData = "<thead>";
      var colspan = keys_default()(data[0]).length;
      var _self = this;

      //Header
      if (this.title != null) {
        xlsData += this.parseExtraData(this.title, '<tr><th colspan="' + colspan + '">${data}</th></tr>');
      }

      //Fields
      xlsData += "<tr>";
      for (var key in data[0]) {
        xlsData += "<th>" + key + "</th>";
      }
      xlsData += "</tr>";
      xlsData += "</thead>";

      //Data
      xlsData += "<tbody>";
      data.map(function (item, index) {
        xlsData += "<tr>";
        for (var _key in item) {
          xlsData += "<td>" + _self.valueReformattedForMultilines(item[_key]) + "</td>";
        }
        xlsData += "</tr>";
      });
      xlsData += "</tbody>";

      //Footer
      if (this.footer != null) {
        xlsData += "<tfoot>";
        xlsData += this.parseExtraData(this.footer, '<tr><td colspan="' + colspan + '">${data}</td></tr>');
        xlsData += "</tfoot>";
      }

      return xlsTemp.replace("${table}", xlsData).replace("${worksheet}", this.worksheet);
    },

    /*
    jsonToCSV
    ---------------
    Transform json data into an CSV file.
    */
    jsonToCSV: function jsonToCSV(data) {
      var csvData = [];
      //Header
      if (this.title != null) {
        csvData.push(this.parseExtraData(this.title, "${data}\r\n"));
      }
      //Fields
      for (var key in data[0]) {
        csvData.push(key);
        csvData.push(",");
      }
      csvData.pop();
      csvData.push("\r\n");
      //Data
      data.map(function (item) {
        for (var _key2 in item) {
          var escapedCSV = '=\"' + item[_key2] + '\"'; // cast Numbers to string
          if (escapedCSV.match(/[,"\n]/)) {
            escapedCSV = '"' + escapedCSV.replace(/\"/g, '""') + '"';
          }
          csvData.push(escapedCSV);
          csvData.push(",");
        }
        csvData.pop();
        csvData.push("\r\n");
      });
      //Footer
      if (this.footer != null) {
        csvData.push(this.parseExtraData(this.footer, "${data}\r\n"));
      }
      return csvData.join("");
    },

    /*
    getProcessedJson
    ---------------
    Get only the data to export, if no fields are set return all the data
    */
    getProcessedJson: function getProcessedJson(data, header) {
      var keys = this.getKeys(data, header);
      var newData = [];
      var _self = this;
      data.map(function (item, index) {
        var newItem = {};
        for (var label in keys) {
          var property = keys[label];
          newItem[label] = _self.getValue(property, item);
        }
        newData.push(newItem);
      });

      return newData;
    },
    getKeys: function getKeys(data, header) {
      if (header) {
        return header;
      }

      var keys = {};
      for (var key in data[0]) {
        keys[key] = key;
      }
      return keys;
    },

    /*
    parseExtraData
    ---------------
    Parse title and footer attribute to the csv format
    */
    parseExtraData: function parseExtraData(extraData, format) {
      var parseData = "";
      if (Array.isArray(extraData)) {
        for (var i = 0; i < extraData.length; i++) {
          parseData += format.replace("${data}", extraData[i]);
        }
      } else {
        parseData += format.replace("${data}", extraData);
      }
      return parseData;
    },
    getValue: function getValue(key, item) {
      var field = (typeof key === "undefined" ? "undefined" : typeof_default()(key)) !== "object" ? key : key.field;
      var indexes = typeof field !== "string" ? [] : field.split(".");
      var value = this.defaultValue;

      if (!field) value = item;else if (indexes.length > 1) value = this.getValueFromNestedItem(item, indexes);else value = this.parseValue(item[field]);

      if (key.hasOwnProperty('callback')) value = this.getValueFromCallback(value, key.callback);

      return value;
    },


    /*
    convert values with newline \n characters into <br/>
    */
    valueReformattedForMultilines: function valueReformattedForMultilines(value) {
      if (typeof value == "string") return value.replace(/\n/ig, "<br/>");else return value;
    },
    getValueFromNestedItem: function getValueFromNestedItem(item, indexes) {
      var nestedItem = item;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(indexes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var index = _step.value;

          if (nestedItem) nestedItem = nestedItem[index];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this.parseValue(nestedItem);
    },
    getValueFromCallback: function getValueFromCallback(item, callback) {
      if (typeof callback !== "function") return this.defaultValue;
      var value = callback(item);
      return this.parseValue(value);
    },
    parseValue: function parseValue(value) {
      return value || value === 0 || typeof value === 'boolean' ? value : this.defaultValue;
    },
    base64ToBlob: function base64ToBlob(data, mime) {
      var base64 = window.btoa(window.unescape(encodeURIComponent(data)));
      var bstr = atob(base64);
      var n = bstr.length;
      var u8arr = new Uint8ClampedArray(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  } // end methods
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56fa764e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-json-excel/JsonExcel.vue
var JsonExcel_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.idName},on:{"click":_vm.generate}},[_vm._t("default",[_vm._v("\n\t\tDownload "+_vm._s(_vm.name)+"\n\t")])],2)}
var JsonExcel_staticRenderFns = []
var JsonExcel_esExports = { render: JsonExcel_render, staticRenderFns: JsonExcel_staticRenderFns }
/* harmony default export */ var vue_json_excel_JsonExcel = (JsonExcel_esExports);
// CONCATENATED MODULE: ./node_modules/vue-json-excel/JsonExcel.vue
var JsonExcel_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var JsonExcel___vue_template_functional__ = false
/* styles */
var JsonExcel___vue_styles__ = null
/* scopeId */
var JsonExcel___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var JsonExcel___vue_module_identifier__ = null
var JsonExcel_Component = JsonExcel_normalizeComponent(
  JsonExcel,
  vue_json_excel_JsonExcel,
  JsonExcel___vue_template_functional__,
  JsonExcel___vue_styles__,
  JsonExcel___vue_scopeId__,
  JsonExcel___vue_module_identifier__
)

/* harmony default export */ var node_modules_vue_json_excel_JsonExcel = (JsonExcel_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/activity/manage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var manage = ({
  name: 'ActivityManage',
  components: { 'need-login': common_components_need_login, 'export-excel': node_modules_vue_json_excel_JsonExcel },
  data: function data() {
    return {
      limit: 10,
      queryForm: {
        name: '',
        district: '',
        type: ''
      },
      districts: {},
      activityType: {},
      activityStatus: {},
      queryList: [],
      // 表格的列配置
      tableColumnConfig: this.ACTIVITY_TABLE_CONFIG,
      totalPage: 1,
      // excel 需要导出的字段
      jsonFields: {
        '活动名称': 'name',
        '活动区域': 'district',
        '活动类型': 'type',
        '活动地点': 'place',
        '活动时间': 'time',
        '负责人': 'sponsor',
        '负责人手机': 'phone',
        '创建时间': 'create_time',
        '当前状态': 'status'
      }
    };
  },

  computed: {
    listenLogin: function listenLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    listenLogin: function listenLogin(prev, cur) {
      if (cur) {
        this.queryData();
      }
    }
  },
  methods: {
    queryData: function queryData(page) {
      var _this2 = this;

      var p = typeof page === 'number' ? page : 1;
      var d = this.queryForm;
      d.limit = this.limit;
      d.offset = (p - 1) * this.limit;
      this.$axios({
        url: '/backend/activity/list',
        method: 'post',
        data: d
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.status = _this2.activityStatus[el.status];
            el.type = _this2.activityType[el.type];
            el.district = _this2.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
            el.time = new Date(el.time).toLocaleDateString();
          });
          _this2.queryList = list;
          _this2.totalPage = Number(res.data.total_page);
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getDistricts: function getDistricts() {
      var _this3 = this;

      this.$axios.get('/districts').then(function (res) {
        if (res.data.code == 0) {
          _this3.districts = res.data.data;
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getActivityactivityType: function getActivityactivityType() {
      var _this4 = this;

      this.$axios.get('/backend/activity/types').then(function (res) {
        if (res.data.code == 0) {
          _this4.activityType = res.data.data;
        } else {
          _this4.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getActivityStatus: function getActivityStatus() {
      var _this5 = this;

      this.$axios.get('/backend/activity/status').then(function (res) {
        if (res.data.code == 0) {
          _this5.activityStatus = res.data.data;
        } else {
          _this5.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    viewActivity: function viewActivity(item) {
      // 跳转到详情页
    },
    finishActivity: function finishActivity(item) {
      var _this6 = this;

      var _this = this;
      console.log(item);
      this.$axios.get('/backend/activity/finish?id=' + item.id).then(function (res) {
        if (res.data.code == 0) {
          _this6.$message({
            type: 'success',
            message: '操作成功'
          });
          _this.queryData(_this6.page);
        } else {
          _this6.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this6.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    deleteActivity: function deleteActivity(item) {
      var _this7 = this;

      var _this = this;
      this.$axios.get('/backend/activity/delete?id=' + item.id).then(function (res) {
        if (res.data.code == 0) {
          _this7.$message({
            type: 'success',
            message: '删除成功'
          });
          _this.queryData(_this7.page);
        } else {
          _this7.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this7.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    }
  },
  created: function created() {
    this.getActivityactivityType();
    this.getDistricts();
    this.getActivityStatus();
  },
  mounted: function mounted() {
    this.$store.state.isLogin && this.queryData(1);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ae1a4f2","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/activity/manage.vue
var manage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(_vm.$store.state.isLogin)?_c('div',[_c('h1',[_vm._v("活动管理")]),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.queryForm}},[_c('el-form-item',{attrs:{"label":"活动名"}},[_c('el-input',{attrs:{"placeholder":"活动名"},model:{value:(_vm.queryForm.name),callback:function ($$v) {_vm.$set(_vm.queryForm, "name", $$v)},expression:"queryForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动区域"}},[_c('el-select',{model:{value:(_vm.queryForm.district),callback:function ($$v) {_vm.$set(_vm.queryForm, "district", $$v)},expression:"queryForm.district"}},_vm._l((_vm.districts),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}},[_vm._v(_vm._s(item))])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动类型"}},[_c('el-select',{model:{value:(_vm.queryForm.type),callback:function ($$v) {_vm.$set(_vm.queryForm, "type", $$v)},expression:"queryForm.type"}},_vm._l((_vm.activityType),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}},[_vm._v(_vm._s(item))])}),1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.queryData(1)}}},[_vm._v("查询")]),_vm._v(" "),_c('export-excel',{attrs:{"data":_vm.queryList,"fields":_vm.jsonFields,"name":"activity_list.xls"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){}}},[_vm._v("导出excel")])],1)],1)],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.row,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作","width":"150"}},[[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.viewActivity(_vm.scope.row)}}},[_vm._v("查看")]),_vm._v(" "),(_vm.$store.state.role != 0)?_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.finishActivity(_vm.scope.row)}}},[_vm._v("结束")]):_vm._e(),_vm._v(" "),(_vm.$store.state.role == 2)?_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.deleteActivity(_vm.scope.row)}}},[_vm._v("删除")]):_vm._e()]],2)],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit},on:{"current-change":_vm.queryData}})],1):_c('div',[_c('need-login')],1)])}
var manage_staticRenderFns = []
var manage_esExports = { render: manage_render, staticRenderFns: manage_staticRenderFns }
/* harmony default export */ var activity_manage = (manage_esExports);
// CONCATENATED MODULE: ./src/components/activity/manage.vue
function manage_injectStyle (ssrContext) {
  __webpack_require__("/tFJ")
}
var manage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var manage___vue_template_functional__ = false
/* styles */
var manage___vue_styles__ = manage_injectStyle
/* scopeId */
var manage___vue_scopeId__ = "data-v-6ae1a4f2"
/* moduleIdentifier (server only) */
var manage___vue_module_identifier__ = null
var manage_Component = manage_normalizeComponent(
  manage,
  activity_manage,
  manage___vue_template_functional__,
  manage___vue_styles__,
  manage___vue_scopeId__,
  manage___vue_module_identifier__
)

/* harmony default export */ var components_activity_manage = (manage_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/approval/activity.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var activity = ({
  name: 'ActivityApproval',
  components: { 'need-login': common_components_need_login, 'no-access': common_components_no_access },
  data: function data() {
    return {
      limit: 10,
      districts: {},
      activityType: {},
      activityStatus: {},
      queryList: [],
      // 表格的列配置
      tableColumnConfig: this.ACTIVITY_TABLE_CONFIG,
      totalPage: 1
    };
  },

  computed: {
    listenLogin: function listenLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    listenLogin: function listenLogin(prev, cur) {
      if (cur && this.$store.state.role == 2) {
        this.queryData();
      }
    }
  },
  methods: {
    queryData: function queryData(page) {
      var _this = this;

      var p = typeof page === 'number' ? page : 1;
      var data = {
        limit: this.limit,
        offset: (p - 1) * this.limit
      };

      this.$axios({
        url: '/backend/activity/unreview/list',
        method: 'post',
        data: data
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.status = _this.activityStatus[el.status];
            el.type = _this.activityType[el.type];
            el.district = _this.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
            el.time = new Date(el.time).toLocaleDateString();
          });
          _this.queryList = list;
          _this.totalPage = Number(res.data.total_page);
        } else {
          _this.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getDistricts: function getDistricts() {
      var _this2 = this;

      this.$axios.get('/districts').then(function (res) {
        if (res.data.code == 0) {
          _this2.districts = res.data.data;
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getActivityactivityType: function getActivityactivityType() {
      var _this3 = this;

      this.$axios.get('/backend/activity/types').then(function (res) {
        if (res.data.code == 0) {
          _this3.activityType = res.data.data;
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getActivityStatus: function getActivityStatus() {
      var _this4 = this;

      this.$axios.get('/backend/activity/status').then(function (res) {
        if (res.data.code == 0) {
          _this4.activityStatus = res.data.data;
        } else {
          _this4.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    activityApproval: function activityApproval(data, action) {
      var _this5 = this;

      this.$axios({
        url: '/backend/activity/approval',
        data: {
          id: data.id,
          action: action
        },
        method: 'post'
      }).then(function (res) {
        if (res.data.code == 0) {
          _this5.$message({
            type: 'success',
            message: '操作成功'
          });
          _this5.queryData();
        } else {
          _this5.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    created: function created() {
      this.getActivityactivityType();
      this.getDistricts();
      this.getActivityStatus();
    },
    mounted: function mounted() {
      this.queryData(1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-498a5994","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/approval/activity.vue
var activity_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role != 2)?_c('div',[_c('no-access')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role == 2)?_c('div',[_c('h1',[_vm._v("活动管理")]),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.row,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.activityApproval(scope.row, 102)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.activityApproval(scope.row, 101)}}},[_vm._v("不通过")])]}}],null,false,2103714110)})],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit},on:{"current-change":_vm.queryData}})],1):_vm._e()])}
var activity_staticRenderFns = []
var activity_esExports = { render: activity_render, staticRenderFns: activity_staticRenderFns }
/* harmony default export */ var approval_activity = (activity_esExports);
// CONCATENATED MODULE: ./src/components/approval/activity.vue
function activity_injectStyle (ssrContext) {
  __webpack_require__("ScIo")
}
var activity_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var activity___vue_template_functional__ = false
/* styles */
var activity___vue_styles__ = activity_injectStyle
/* scopeId */
var activity___vue_scopeId__ = "data-v-498a5994"
/* moduleIdentifier (server only) */
var activity___vue_module_identifier__ = null
var activity_Component = activity_normalizeComponent(
  activity,
  approval_activity,
  activity___vue_template_functional__,
  activity___vue_styles__,
  activity___vue_scopeId__,
  activity___vue_module_identifier__
)

/* harmony default export */ var components_approval_activity = (activity_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/approval/community.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var community = ({
  name: 'CommunityApproval',
  components: { 'need-login': common_components_need_login, 'no-access': common_components_no_access },
  data: function data() {
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
    listenLogin: function listenLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    listenLogin: function listenLogin(prev, cur) {
      if (cur && this.$store.state.role == 2) {
        this.queryData();
      }
    }
  },
  methods: {
    communityApproval: function communityApproval(data, action) {
      var _this2 = this;

      this.$axios({
        url: '/backend/community/approval',
        data: {
          id: data.id,
          action: action
        },
        method: 'post'
      }).then(function (res) {
        if (res.data.code == 0) {
          _this2.$message({
            type: 'success',
            message: '操作成功'
          });
          _this2.queryData();
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getDistricts: function getDistricts() {
      var _this3 = this;

      this.$axios.get('/districts').then(function (res) {
        if (res.data.code == 0) {
          _this3.districts = res.data.data;
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    getCommunityTypes: function getCommunityTypes() {
      var _this4 = this;

      this.$axios.get('/backend/community/types').then(function (res) {
        if (res.data.code == 0) {
          _this4.types = res.data.data;
        } else {
          _this4.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    queryData: function queryData(page) {
      var _this5 = this;

      var _this = this;
      var p = typeof page === 'number' ? page : 1;
      var data = {
        limit: this.limit,
        offset: (p - 1) * this.limit
      };

      this.$axios({
        url: '/backend/community/unreview/list',
        method: 'post',
        data: data
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.type = _this.types[el.type];
            el.district = _this.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
          });
          _this.queryList = list;
          _this.totalPage = Number(res.data.total_page);
        } else {
          _this.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    agree: function agree() {},
    disagree: function disagree() {}
  },
  created: function created() {
    this.getDistricts();
    this.getCommunityTypes();
  },
  mounted: function mounted() {
    this.$store.state.isLogin && this.queryData(1);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ffa4ebb4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/approval/community.vue
var community_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role != 2)?_c('div',[_c('no-access')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role == 2)?_c('div',[_c('h1',[_vm._v("组织管理")]),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.rows,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.communityApproval(scope.row, 102)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.communityApproval(scope.row, 101)}}},[_vm._v("不通过")])]}}],null,false,329254558)})],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit},on:{"current-change":_vm.queryData}})],1):_vm._e()])}
var community_staticRenderFns = []
var community_esExports = { render: community_render, staticRenderFns: community_staticRenderFns }
/* harmony default export */ var approval_community = (community_esExports);
// CONCATENATED MODULE: ./src/components/approval/community.vue
function community_injectStyle (ssrContext) {
  __webpack_require__("SP18")
}
var community_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var community___vue_template_functional__ = false
/* styles */
var community___vue_styles__ = community_injectStyle
/* scopeId */
var community___vue_scopeId__ = "data-v-ffa4ebb4"
/* moduleIdentifier (server only) */
var community___vue_module_identifier__ = null
var community_Component = community_normalizeComponent(
  community,
  approval_community,
  community___vue_template_functional__,
  community___vue_styles__,
  community___vue_scopeId__,
  community___vue_module_identifier__
)

/* harmony default export */ var components_approval_community = (community_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/create.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var community_create = ({
  name: 'CommunityCreate',
  components: { 'need-login': common_components_need_login, 'no-access': common_components_no_access },
  data: function data() {
    var validatePhone = function validatePhone(rule, value, callback) {
      var reg = /^1[345789]{1}[0-9]{9}/;
      if (!reg.test(value)) {
        callback(new Error('手机号码格式错误！'));
      } else {
        callback();
      }
    };
    return {
      active: this.CREATE_STATUS.base_info,
      queryForm: {
        district: '',
        type: '',
        name: '',
        description: '',
        sponsor: '',
        phone: '',
        slogan: '',
        logo: ''
      },
      districts: [],
      types: [],
      rules1: {
        name: [{ required: true, message: '请输入活动名', trigger: 'blur' }],
        district: [{ required: true, message: '请选择区域', trigger: 'blur' }],
        type: [{ required: true, message: '请选择活动类型', trigger: 'blur' }]
      },
      rules2: {
        sponsor: [{ required: true, message: '请输入负责人姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入负责人手机', trigger: 'blur' }, { validator: validatePhone, trigger: 'blur' }]
      }
    };
  },

  methods: {
    toNext: function toNext() {
      var _this = this;

      if (this.active === this.CREATE_STATUS.base_info) {
        this.$refs['form1'].validate(function (valid) {
          if (valid) {
            _this.active++;
          }
        });
      } else if (this.active === this.CREATE_STATUS.sponsor_info) {
        this.$refs['form2'].validate(function (valid) {
          if (valid) {
            _this.active++;
          }
        });
      }

      if (this.active > this.CREATE_STATUS.displayment) {
        this.active = this.CREATE_STATUS.base_info;
      }
    },
    toLast: function toLast() {
      this.active--;
    },
    uploadImage: function uploadImage(param) {
      var _this2 = this;

      console.log(param);
      var formData = new FormData();
      formData.append('image', param.file);

      this.$axios({
        url: '/img/upload',
        method: 'post',
        data: formData
      }).then(function (res) {
        if (res.data.code == 0) {
          _this2.queryForm.logo = res.data.data;
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getDistricts: function getDistricts() {
      var _this3 = this;

      this.$axios.get('/districts').then(function (res) {
        _this3.districts = res.data.data;
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getCommunityTypes: function getCommunityTypes() {
      var _this4 = this;

      this.$axios.get('/backend/community/types').then(function (res) {
        _this4.types = res.data.data;
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    submitForm: function submitForm() {
      var _this5 = this;

      this.$axios({
        url: '/backend/community/new',
        method: 'post',
        data: this.queryForm
      }).then(function (res) {
        if (res.data.code == 0) {
          _this5.active = _this5.CREATE_STATUS.success;
        } else {
          _this5.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },

    // 继续新建
    toCreate: function toCreate() {
      this.active = this.CREATE_STATUS.base_info;
      this.queryForm = {
        district: '',
        type: '',
        name: '',
        description: '',
        sponsor: '',
        phone: '',
        slogan: '',
        logo: ''
      };
    }
  },
  mounted: function mounted() {
    this.getDistricts();
    this.getCommunityTypes();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4635a350","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/create.vue
var community_create_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role == 0)?_c('div',[_c('no-access')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role != 0)?_c('div',[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_vm._v("\n\t\t      新建组织\n\t\t    ")]),_vm._v(" "),_c('div',{staticClass:"card-ctn"},[_c('el-steps',{attrs:{"active":_vm.active,"finish-status":"success"}},[_c('el-step',{attrs:{"title":"社团信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"负责人信息"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"社团展示"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"提交成功"}})],1)],1),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.base_info)?_c('div',{staticClass:"card-ctn"},[_c('el-form',{ref:"form1",attrs:{"label-width":"100px","model":_vm.queryForm,"rules":_vm.rules1}},[_c('el-form-item',{attrs:{"label":"校区","prop":"district"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryForm.district),callback:function ($$v) {_vm.$set(_vm.queryForm, "district", $$v)},expression:"queryForm.district"}},_vm._l((_vm.districts),function(item,index){return _c('el-option',{key:item,attrs:{"label":item,"value":index}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入名称"},model:{value:(_vm.queryForm.name),callback:function ($$v) {_vm.$set(_vm.queryForm, "name", $$v)},expression:"queryForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织类型","prop":"type"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryForm.type),callback:function ($$v) {_vm.$set(_vm.queryForm, "type", $$v)},expression:"queryForm.type"}},_vm._l((_vm.types),function(item,index){return _c('el-option',{key:item,attrs:{"label":item,"value":index}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织简介"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2, maxRows: 6},"placeholder":"社团简介不少于200字"},model:{value:(_vm.queryForm.description),callback:function ($$v) {_vm.$set(_vm.queryForm, "description", $$v)},expression:"queryForm.description"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.sponsor_info)?_c('div',{staticClass:"card-ctn"},[_c('el-form',{ref:"form2",attrs:{"label-width":"100px","model":_vm.queryForm,"rules":_vm.rules2}},[_c('el-form-item',{attrs:{"label":"组织负责人","prop":"sponsor"}},[_c('el-input',{attrs:{"placeholder":"请输入负责人真实姓名"},model:{value:(_vm.queryForm.sponsor),callback:function ($$v) {_vm.$set(_vm.queryForm, "sponsor", $$v)},expression:"queryForm.sponsor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"负责人手机","prop":"phone"}},[_c('el-input',{attrs:{"placeholder":"请输入手机号"},model:{value:(_vm.queryForm.phone),callback:function ($$v) {_vm.$set(_vm.queryForm, "phone", $$v)},expression:"queryForm.phone"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.displayment)?_c('div',{staticClass:"card-ctn"},[_c('el-form',{ref:"form",attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"组织logo"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"drag":"","limit":1,"action":"/img/upload","http-request":_vm.uploadImage}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v("将文件拖到此处，或"),_c('em',[_vm._v("点击上传")])]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("只能上传jpg/png文件，且不超过500kb")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织slogan"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2, maxRows: 6},"placeholder":"请输入 slogan"},model:{value:(_vm.queryForm.slogan),callback:function ($$v) {_vm.$set(_vm.queryForm, "slogan", $$v)},expression:"queryForm.slogan"}})],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.success)?_c('div',{staticClass:"success"},[_c('i',{staticClass:"el-icon-success"}),_vm._v(" "),_c('div',[_vm._v("提交成功")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-footer"},[(_vm.active && _vm.active !== _vm.CREATE_STATUS.success)?_c('el-button',{on:{"click":_vm.toLast}},[_vm._v("上一步")]):_vm._e(),_vm._v(" "),(_vm.active < _vm.CREATE_STATUS.displayment)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.toNext}},[_vm._v("下一步")]):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.displayment)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("提交")]):_vm._e(),_vm._v(" "),(_vm.active === _vm.CREATE_STATUS.success)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.toCreate}},[_vm._v("继续新建")]):_vm._e()],1)])]):_vm._e()])}
var community_create_staticRenderFns = []
var community_create_esExports = { render: community_create_render, staticRenderFns: community_create_staticRenderFns }
/* harmony default export */ var components_community_create = (community_create_esExports);
// CONCATENATED MODULE: ./src/components/community/create.vue
function community_create_injectStyle (ssrContext) {
  __webpack_require__("UALO")
}
var community_create_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var community_create___vue_template_functional__ = false
/* styles */
var community_create___vue_styles__ = community_create_injectStyle
/* scopeId */
var community_create___vue_scopeId__ = "data-v-4635a350"
/* moduleIdentifier (server only) */
var community_create___vue_module_identifier__ = null
var community_create_Component = community_create_normalizeComponent(
  community_create,
  components_community_create,
  community_create___vue_template_functional__,
  community_create___vue_styles__,
  community_create___vue_scopeId__,
  community_create___vue_module_identifier__
)

/* harmony default export */ var src_components_community_create = (community_create_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/manage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var community_manage = ({
  name: 'CommunityManage',
  components: { 'need-login': common_components_need_login, 'export-excel': node_modules_vue_json_excel_JsonExcel },
  data: function data() {
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
      }
    };
  },

  computed: {
    listenLogin: function listenLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    listenLogin: function listenLogin(prev, cur) {
      if (cur) {
        this.queryData();
      }
    }
  },
  methods: {
    deleteCommunity: function deleteCommunity(item) {
      var _this2 = this;

      var _this = this;
      this.$axios.get('/backend/community/delete?id=' + item.id).then(function (res) {
        if (res.data.code == 0) {
          _this2.$message({
            type: 'success',
            message: '删除成功'
          });
          _this.queryData(_this2.page);
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getDistricts: function getDistricts() {
      var _this3 = this;

      this.$axios.get('/districts').then(function (res) {
        if (res.data.code == 0) {
          _this3.districts = res.data.data;
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    getCommunityTypes: function getCommunityTypes() {
      var _this4 = this;

      this.$axios.get('/backend/community/types').then(function (res) {
        if (res.data.code == 0) {
          _this4.types = res.data.data;
        } else {
          _this4.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    queryData: function queryData(page) {
      var _this5 = this;

      var _this = this;
      var p = typeof page === 'number' ? page : 1;
      var data = this.queryForm;
      data.limit = this.limit;
      data.offset = (p - 1) * this.limit;
      this.$axios({
        url: '/backend/community/list',
        method: 'post',
        data: data
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.type = _this.types[el.type];
            el.district = _this.districts[el.district];
            el.create_time = new Date(el.create_time).toLocaleDateString();
          });
          _this.queryList = list;
          _this.totalPage = Number(res.data.total_page);
        } else {
          _this.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    toEditPage: function toEditPage(data) {
      this.$router.push({ path: '/community/setup', query: data });
    }
  },
  created: function created() {
    this.getDistricts();
    this.getCommunityTypes();
  },
  mounted: function mounted() {
    if (this.$store.state.isLogin) {
      this.queryData(1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5fd21b22","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/manage.vue
var community_manage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(_vm.$store.state.isLogin)?_c('div',[_c('h1',[_vm._v("组织管理")]),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.queryForm}},[_c('el-form-item',{attrs:{"label":"组织名称"}},[_c('el-input',{attrs:{"placeholder":"组织名称"},model:{value:(_vm.queryForm.name),callback:function ($$v) {_vm.$set(_vm.queryForm, "name", $$v)},expression:"queryForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织区域"}},[_c('el-select',{model:{value:(_vm.queryForm.region),callback:function ($$v) {_vm.$set(_vm.queryForm, "region", $$v)},expression:"queryForm.region"}},_vm._l((_vm.districts),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}},[_vm._v(_vm._s(item))])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织类型"}},[_c('el-select',{model:{value:(_vm.queryForm.type),callback:function ($$v) {_vm.$set(_vm.queryForm, "type", $$v)},expression:"queryForm.type"}},_vm._l((_vm.types),function(item,key){return _c('el-option',{key:item,attrs:{"label":item,"value":key}},[_vm._v(_vm._s(item))])}),1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.queryData(1)}}},[_vm._v("查询")]),_vm._v(" "),_c('export-excel',{attrs:{"data":_vm.queryList,"fields":_vm.jsonFields,"name":"community_list.xls"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){}}},[_vm._v("导出excel")])],1)],1)],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.rows,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.toEditPage(scope.row)}}},[_vm._v("查看")]),_vm._v(" "),(_vm.$store.state.role == 2)?_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.deleteCommunity(scope.row)}}},[_vm._v("删除")]):_vm._e()]}}],null,false,1118351633)})],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit},on:{"current-change":_vm.queryData}})],1):_c('div',[_c('need-login')],1)])}
var community_manage_staticRenderFns = []
var community_manage_esExports = { render: community_manage_render, staticRenderFns: community_manage_staticRenderFns }
/* harmony default export */ var components_community_manage = (community_manage_esExports);
// CONCATENATED MODULE: ./src/components/community/manage.vue
function community_manage_injectStyle (ssrContext) {
  __webpack_require__("n70Z")
}
var community_manage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var community_manage___vue_template_functional__ = false
/* styles */
var community_manage___vue_styles__ = community_manage_injectStyle
/* scopeId */
var community_manage___vue_scopeId__ = "data-v-5fd21b22"
/* moduleIdentifier (server only) */
var community_manage___vue_module_identifier__ = null
var community_manage_Component = community_manage_normalizeComponent(
  community_manage,
  components_community_manage,
  community_manage___vue_template_functional__,
  community_manage___vue_styles__,
  community_manage___vue_scopeId__,
  community_manage___vue_module_identifier__
)

/* harmony default export */ var src_components_community_manage = (community_manage_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/components/basic_setup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var basic_setup = ({
  name: 'BasicSetup',
  data: function data() {
    return {
      queryList: [{
        id: 1,
        job: '会长',
        name: '千千',
        phone: 1888888888
      }, {
        id: 2,
        job: '副会长',
        name: '易易',
        phone: 1888888881
      }],
      jobItem: { job: '', name: '', phone: '' }
    };
  },

  methods: {
    newJob: function newJob() {
      // 新增职务
    },
    deleteItem: function deleteItem(id) {
      // 删除职务
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6c1e4f90","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/components/basic_setup.vue
var basic_setup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',[_vm._v("职务设置")]),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.jobItem}},[_c('el-form-item',{attrs:{"label":"名字"}},[_c('el-input',{attrs:{"placeholder":"名字"},model:{value:(_vm.jobItem.name),callback:function ($$v) {_vm.$set(_vm.jobItem, "name", $$v)},expression:"jobItem.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"职务"}},[_c('el-input',{attrs:{"placeholder":"职务"},model:{value:(_vm.jobItem.job),callback:function ($$v) {_vm.$set(_vm.jobItem, "job", $$v)},expression:"jobItem.job"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.newJob()}}},[_vm._v("新增")])],1)],1),_vm._v(" "),_c('div',{staticClass:"job-list"},_vm._l((_vm.queryList),function(item){return _c('div',{key:item.id,staticClass:"job-item"},[_c('span',[_vm._v(_vm._s(item.job)+": ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.phone))]),_vm._v(" "),_c('a',{staticClass:"delete",on:{"click":function($event){return _vm.deleteItem(item.id)}}},[_vm._v("删除")])])}),0)],1)}
var basic_setup_staticRenderFns = []
var basic_setup_esExports = { render: basic_setup_render, staticRenderFns: basic_setup_staticRenderFns }
/* harmony default export */ var components_basic_setup = (basic_setup_esExports);
// CONCATENATED MODULE: ./src/components/community/components/basic_setup.vue
function basic_setup_injectStyle (ssrContext) {
  __webpack_require__("u2ov")
}
var basic_setup_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var basic_setup___vue_template_functional__ = false
/* styles */
var basic_setup___vue_styles__ = basic_setup_injectStyle
/* scopeId */
var basic_setup___vue_scopeId__ = "data-v-6c1e4f90"
/* moduleIdentifier (server only) */
var basic_setup___vue_module_identifier__ = null
var basic_setup_Component = basic_setup_normalizeComponent(
  basic_setup,
  components_basic_setup,
  basic_setup___vue_template_functional__,
  basic_setup___vue_styles__,
  basic_setup___vue_scopeId__,
  basic_setup___vue_module_identifier__
)

/* harmony default export */ var community_components_basic_setup = (basic_setup_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/components/enrolment_m.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var enrolment_m = ({
  name: 'EnrolmentManage',
  props: ['id'],
  data: function data() {
    var validatePhone = function validatePhone(rule, value, callback) {
      var reg = /^1[345789]{1}[0-9]{9}/;
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
      queryList: [{
        id: 111,
        name: '火星哥',
        number: '3116009989',
        academy: 0,
        sex: 0,
        phone: '1223321212',
        community_id: 10002
      }],
      academyMap: { 0: '材能学院' },
      tableColumnConfig: this.PEOPLE_TABLE_CONFIG,
      modalVisible: false,
      operateType: 'new',
      formRules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        number: [{ required: true, message: '请输入学号', trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }]
      }
    };
  },

  methods: {
    queryData: function queryData(page) {
      var _this2 = this;

      this.page = page;
      var p = typeof page === 'number' ? page : 1;
      var d = this.queryForm;
      d.limit = this.limit;
      d.offset = (p - 1) * this.limit;
      this.$axios({
        url: '/backend/user/list',
        method: 'post',
        data: d
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.academyText = _this2.academyMap[el.academy];
            el.sexText = Number(el.sex) ? '男' : '女';
          });
          _this2.queryList = list;
          _this2.totalPage = Number(res.data.total_page);
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    queryAcademyMap: function queryAcademyMap() {
      var _this3 = this;

      this.$axios.get('/academics').then(function (res) {
        if (res.data.code == 0) {
          _this3.academyMap = res.data.data;
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    deleteMember: function deleteMember(item) {
      var _this4 = this;

      var _this = this;
      this.$axios.get('/backend/user/delete?id=' + item.id).then(function (res) {
        if (res.data.code == 0) {
          _this4.$message({
            type: 'success',
            message: '删除成功'
          });
          _this.queryData(_this4.page);
        } else {
          _this4.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this4.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    showModal: function showModal(type, item) {
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
    newMember: function newMember() {
      var _this5 = this;

      var _this = this;
      this.$axios({
        method: 'post',
        url: '/backend/user/new',
        data: this.editForm
      }).then(function (res) {
        if (res.data.code == 0) {
          _this5.$message({
            type: 'success',
            message: '新增成功'
          });
          _this.queryData(_this5.page);
          _this.modalVisible = false;
        } else {
          _this5.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this5.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    editMember: function editMember() {
      var _this6 = this;

      var _this = this;
      this.$axios({
        method: 'post',
        url: '/backend/user/edit',
        data: this.editForm
      }).then(function (res) {
        if (res.data.code == 0) {
          _this6.$message({
            type: 'success',
            message: '编辑成功'
          });
          _this.queryData(_this6.page);
          _this.modalVisible = false;
        } else {
          _this6.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this6.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    }
  },

  created: function created() {
    this.queryAcademyMap();
    this.queryForm.community_id = this.id;
  },
  mounted: function mounted() {
    this.queryData(1);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3208bb71","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/components/enrolment_m.vue
var enrolment_m_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(this.$store.state.role != 0)?_c('div',{staticClass:"btn-ctn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.showModal('new')}}},[_vm._v("\n            新增成员\n        ")])],1):_vm._e(),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.queryForm}},[_c('el-form-item',{attrs:{"label":"姓名"}},[_c('el-input',{attrs:{"placeholder":"姓名"},model:{value:(_vm.queryForm.name),callback:function ($$v) {_vm.$set(_vm.queryForm, "name", $$v)},expression:"queryForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"学号"}},[_c('el-input',{attrs:{"placeholder":"学号"},model:{value:(_vm.queryForm.number),callback:function ($$v) {_vm.$set(_vm.queryForm, "number", $$v)},expression:"queryForm.number"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.queryData(1)}}},[_vm._v("查询")])],1)],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.row,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small","disabled":"$store.state.role == 0"},on:{"click":function($event){return _vm.showModal('edit',scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text","size":"small","disabled":"$store.state.role == 0"},on:{"click":function($event){return _vm.deleteMember(scope.row)}}},[_vm._v("删除")])]}}])})],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"update:current-page":function($event){_vm.page=$event},"current-change":_vm.queryData}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.operateType == 'new' ? '新 增 成 员' : '编 辑',"visible":_vm.modalVisible},on:{"update:visible":function($event){_vm.modalVisible=$event}}},[_c('el-form',{ref:"editForm",attrs:{"label-position":"left","rules":_vm.formRules,"model":_vm.editForm}},[_c('el-form-item',{attrs:{"label":"姓名","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入姓名"},model:{value:(_vm.editForm.name),callback:function ($$v) {_vm.$set(_vm.editForm, "name", $$v)},expression:"editForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"学号","prop":"number"}},[_c('el-input',{attrs:{"placeholder":"请输入学号"},model:{value:(_vm.editForm.number),callback:function ($$v) {_vm.$set(_vm.editForm, "number", $$v)},expression:"editForm.number"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号","prop":"phone"}},[_c('el-input',{attrs:{"placeholder":"请输入手机号码"},model:{value:(_vm.editForm.phone),callback:function ($$v) {_vm.$set(_vm.editForm, "phone", $$v)},expression:"editForm.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别","prop":"sex"}},[_c('el-radio-group',{model:{value:(_vm.editForm.sex),callback:function ($$v) {_vm.$set(_vm.editForm, "sex", $$v)},expression:"editForm.sex"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("男")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("女")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("其它")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"学院","prop":"academy"}},[_c('el-select',{attrs:{"placeholder":"请选择学院"},model:{value:(_vm.editForm.academy),callback:function ($$v) {_vm.$set(_vm.editForm, "academy", $$v)},expression:"editForm.academy"}},_vm._l((_vm.academyMap),function(item,index){return _c('el-option',{key:item,attrs:{"label":item,"value":index}})}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.modalVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),(_vm.operateType == 'new')?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.newMember}},[_vm._v("新 增")]):_vm._e(),_vm._v(" "),(_vm.operateType == 'edit')?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.editMember}},[_vm._v("保 存")]):_vm._e()],1)],1)],1)}
var enrolment_m_staticRenderFns = []
var enrolment_m_esExports = { render: enrolment_m_render, staticRenderFns: enrolment_m_staticRenderFns }
/* harmony default export */ var components_enrolment_m = (enrolment_m_esExports);
// CONCATENATED MODULE: ./src/components/community/components/enrolment_m.vue
function enrolment_m_injectStyle (ssrContext) {
  __webpack_require__("+D0l")
}
var enrolment_m_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var enrolment_m___vue_template_functional__ = false
/* styles */
var enrolment_m___vue_styles__ = enrolment_m_injectStyle
/* scopeId */
var enrolment_m___vue_scopeId__ = "data-v-3208bb71"
/* moduleIdentifier (server only) */
var enrolment_m___vue_module_identifier__ = null
var enrolment_m_Component = enrolment_m_normalizeComponent(
  enrolment_m,
  components_enrolment_m,
  enrolment_m___vue_template_functional__,
  enrolment_m___vue_styles__,
  enrolment_m___vue_scopeId__,
  enrolment_m___vue_module_identifier__
)

/* harmony default export */ var community_components_enrolment_m = (enrolment_m_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/components/show_info.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var show_info = ({
  name: 'ShowInfo',
  props: ['id'],
  data: function data() {
    return {
      status: 'show',
      queryData: {
        logo: '',
        slogan: '',
        name: '',
        description: '',
        district: '',
        type: ''
      },
      districts: [],
      types: []
    };
  },

  methods: {
    handleClick: function handleClick() {
      if (this.status === 'show') {
        this.status = 'edit';
      } else {
        // 保存操作
        this.status = 'show';
      }
    },
    getDistricts: function getDistricts() {
      var _this2 = this;

      this.$axios.get('/districts').then(function (res) {
        _this2.districts = res.data.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    getCommunityTypes: function getCommunityTypes() {
      var _this3 = this;

      this.$axios.get('/backend/community/types').then(function (res) {
        _this3.types = res.data.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    queryInfo: function queryInfo(id) {
      var _this = this;
      this.$axios({
        url: '/backend/community/list',
        method: 'post',
        data: {
          id: id
        }
      }).then(function (res) {
        if (res.data.code == 0) {
          var data = res.data.data[0];
          data.type = _this.types[data.type];
          data.district = _this.districts[data.district];
          _this.queryData = data;
        } else {
          _this.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    }
  },
  created: function created() {
    this.getDistricts();
    this.getCommunityTypes();
  },
  mounted: function mounted() {
    this.queryInfo(this.id);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21054936","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/components/show_info.vue
var show_info_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(_vm.$store.state.role != 0)?_c('div',{staticClass:"btn-ctn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleClick}},[_vm._v("\n\t  \t\t"+_vm._s(_vm.status === 'edit' ? '保存' : '编辑')+"\n\t  \t")])],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-ctn"},[(_vm.status === 'edit')?_c('el-form',{attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"组织名称"}},[_c('el-input',{attrs:{"placeholder":"请输入名称"},model:{value:(_vm.queryData.name),callback:function ($$v) {_vm.$set(_vm.queryData, "name", $$v)},expression:"queryData.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"校区"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryData.district),callback:function ($$v) {_vm.$set(_vm.queryData, "district", $$v)},expression:"queryData.district"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item,attrs:{"label":item,"value":item}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织类型"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.queryData.type),callback:function ($$v) {_vm.$set(_vm.queryData, "type", $$v)},expression:"queryData.type"}},_vm._l((_vm.types),function(item){return _c('el-option',{key:item,attrs:{"label":item,"value":item}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织简介"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2, maxRows: 6},"placeholder":"社团简介不少于200字"},model:{value:(_vm.queryData.description),callback:function ($$v) {_vm.$set(_vm.queryData, "description", $$v)},expression:"queryData.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织logo"}},[_c('el-upload',{staticClass:"upload-demo",attrs:{"drag":"","action":"https://jsonplaceholder.typicode.com/posts/","multiple":""}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v("将文件拖到此处，或"),_c('em',[_vm._v("点击上传")])]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("只能上传jpg/png文件，且不超过500kb")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织slogan"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2, maxRows: 6},"placeholder":"请输入 slogan"},model:{value:(_vm.queryData.slogan),callback:function ($$v) {_vm.$set(_vm.queryData, "slogan", $$v)},expression:"queryData.slogan"}})],1)],1):_vm._e()],1),_vm._v(" "),(_vm.status === 'show')?_c('div',[_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织名称: ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.queryData.name))])]),_vm._v(" "),_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织类型: ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.queryData.type))])]),_vm._v(" "),_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织校区: ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.queryData.district))])]),_vm._v(" "),_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织简介: ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.queryData.description))])]),_vm._v(" "),_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织logo: ")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.queryData.logo}})]),_vm._v(" "),_c('div',{staticClass:"show-item"},[_c('span',[_vm._v("组织slogan: ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.queryData.slogan))])])]):_vm._e()])}
var show_info_staticRenderFns = []
var show_info_esExports = { render: show_info_render, staticRenderFns: show_info_staticRenderFns }
/* harmony default export */ var components_show_info = (show_info_esExports);
// CONCATENATED MODULE: ./src/components/community/components/show_info.vue
function show_info_injectStyle (ssrContext) {
  __webpack_require__("ECTh")
}
var show_info_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var show_info___vue_template_functional__ = false
/* styles */
var show_info___vue_styles__ = show_info_injectStyle
/* scopeId */
var show_info___vue_scopeId__ = "data-v-21054936"
/* moduleIdentifier (server only) */
var show_info___vue_module_identifier__ = null
var show_info_Component = show_info_normalizeComponent(
  show_info,
  components_show_info,
  show_info___vue_template_functional__,
  show_info___vue_styles__,
  show_info___vue_scopeId__,
  show_info___vue_module_identifier__
)

/* harmony default export */ var community_components_show_info = (show_info_Component.exports);

// CONCATENATED MODULE: ./src/components/community/components/index.js





// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/community/setup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var setup = ({
	name: 'CommunitySetup',
	components: {
		'basic-info': community_components_basic_setup,
		'enrolment-manage': community_components_enrolment_m,
		'show-info': community_components_show_info,
		'need-login': common_components_need_login,
		'no-access': common_components_no_access
	},
	data: function data() {
		return {
			activeIndex: "1",
			id: ''
		};
	},

	methods: {
		handleSelect: function handleSelect(key) {
			this.activeIndex = key;
		}
	},
	created: function created() {
		this.id = this.$route.query.id;
	},
	mounted: function mounted() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61086cf2","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/community/setup.vue
var setup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin)?_c('div',[_c('div',{staticClass:"card"},[_c('el-menu',{staticClass:"el-menu-demo",attrs:{"default-active":_vm.activeIndex,"mode":"horizontal"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_vm._v("主页信息")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2","disabled":"$store.state.role == 0"}},[_vm._v("基本设置")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"3"}},[_vm._v("成员管理")])],1),_vm._v(" "),(_vm.activeIndex === '1')?_c('div',[_c('show-info',{attrs:{"id":_vm.id}})],1):_vm._e(),_vm._v(" "),(_vm.activeIndex === '2')?_c('div',[_c('basic-info',{attrs:{"id":_vm.id}})],1):_vm._e(),_vm._v(" "),(_vm.activeIndex === '3')?_c('div',[_c('enrolment-manage',{attrs:{"id":_vm.id}})],1):_vm._e()],1)]):_vm._e()])}
var setup_staticRenderFns = []
var setup_esExports = { render: setup_render, staticRenderFns: setup_staticRenderFns }
/* harmony default export */ var community_setup = (setup_esExports);
// CONCATENATED MODULE: ./src/components/community/setup.vue
function setup_injectStyle (ssrContext) {
  __webpack_require__("ZDUs")
}
var setup_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var setup___vue_template_functional__ = false
/* styles */
var setup___vue_styles__ = setup_injectStyle
/* scopeId */
var setup___vue_scopeId__ = "data-v-61086cf2"
/* moduleIdentifier (server only) */
var setup___vue_module_identifier__ = null
var setup_Component = setup_normalizeComponent(
  setup,
  community_setup,
  setup___vue_template_functional__,
  setup___vue_styles__,
  setup___vue_scopeId__,
  setup___vue_module_identifier__
)

/* harmony default export */ var components_community_setup = (setup_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/account/manage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var account_manage = ({
  name: 'AccountManage',
  components: { 'need-login': common_components_need_login, 'no-access': common_components_no_access },
  data: function data() {
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
    listenLogin: function listenLogin() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    listenLogin: function listenLogin(prev, cur) {
      if (cur && this.$store.state.role == 2) {
        this.queryData();
      }
    }
  },
  methods: {
    queryData: function queryData(page) {
      var _this = this;

      var p = typeof page === 'number' ? page : 1;
      var data = {
        limit: this.limit,
        offset: (p - 1) * this.limit
      };

      this.$axios({
        url: '/backend/user/account/list',
        method: 'post',
        data: data
      }).then(function (res) {
        if (res.data.code == 0) {
          var list = res.data.data;
          list.forEach(function (el) {
            el.role = _this.roleList[el.role];
          });
          _this.queryList = list;
          _this.totalPage = Number(res.data.total_page);
        } else {
          _this.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this.$message({
          type: 'error',
          message: '网络错误'
        });
      });
    },
    getRoles: function getRoles() {
      var _this2 = this;

      this.$axios.get('/backend/user/role/list').then(function (res) {
        if (res.data.code == 0) {
          _this2.roleList = res.data.data;
        } else {
          _this2.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this2.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    },
    setMaster: function setMaster(item) {
      var _this3 = this;

      this.$axios({
        url: '/backend/user/master',
        data: {
          uid: item.uid
        },
        method: 'post'
      }).then(function (res) {
        if (res.data.code == 0) {
          _this3.$message({
            type: 'success',
            message: '设置成功'
          });
          _this3.queryData();
        } else {
          _this3.$message({
            type: 'error',
            message: res.data.message
          });
        }
      }).catch(function (err) {
        _this3.$message({
          type: 'error',
          message: '请求错误'
        });
      });
    }
  },
  created: function created() {
    this.getRoles();
  },
  mounted: function mounted() {
    this.$store.state.isLogin && this.queryData(1);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c824ce04","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/account/manage.vue
var account_manage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[(!this.$store.state.isLogin)?_c('div',[_c('need-login')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role != 2)?_c('div',[_c('no-access')],1):_vm._e(),_vm._v(" "),(this.$store.state.isLogin && this.$store.state.role == 2)?_c('div',[_c('h1',[_vm._v("账户管理")]),_vm._v(" "),_c('el-table',{staticStyle:{"width":"70%"},attrs:{"data":_vm.queryList,"border":""}},[_vm._l((_vm.tableColumnConfig),function(item,index){return _c('el-table-column',{key:item.row,attrs:{"fixed":index === 0,"prop":item.row,"label":item.label,"width":item.width}})}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","label":"操作","width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return (scope.row.role == '游客')?[_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){return _vm.setMaster(scope.row)}}},[_vm._v("设为管理员")])]:undefined}}],null,true)})],2),_vm._v(" "),_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-count":_vm.totalPage,"page-size":_vm.limit},on:{"current-change":_vm.queryData}})],1):_vm._e()])}
var account_manage_staticRenderFns = []
var account_manage_esExports = { render: account_manage_render, staticRenderFns: account_manage_staticRenderFns }
/* harmony default export */ var components_account_manage = (account_manage_esExports);
// CONCATENATED MODULE: ./src/components/account/manage.vue
function account_manage_injectStyle (ssrContext) {
  __webpack_require__("hp9y")
}
var account_manage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var account_manage___vue_template_functional__ = false
/* styles */
var account_manage___vue_styles__ = account_manage_injectStyle
/* scopeId */
var account_manage___vue_scopeId__ = "data-v-c824ce04"
/* moduleIdentifier (server only) */
var account_manage___vue_module_identifier__ = null
var account_manage_Component = account_manage_normalizeComponent(
  account_manage,
  components_account_manage,
  account_manage___vue_template_functional__,
  account_manage___vue_styles__,
  account_manage___vue_scopeId__,
  account_manage___vue_module_identifier__
)

/* harmony default export */ var src_components_account_manage = (account_manage_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js














vue_esm["default"].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: src_components_home,
    meta: {
      requireLogin: false, // 访问是否需要登陆
      role: 0 // 可以访问的角色 0为全部、1为管理员以上、2为超级管理员
    }
  }, {
    path: '/needLogin',
    name: 'needLogin',
    component: common_components_need_login,
    meta: {
      requireLogin: false,
      role: 0
    }
  }, {
    path: '/noAccess',
    name: 'noAccess',
    component: common_components_no_access,
    meta: {
      requireLogin: true,
      role: 0
    }
  }, {
    path: '/accountManage',
    name: 'accountManage',
    component: src_components_account_manage,
    meta: {
      requireLogin: true,
      role: 2
    }
  }, {
    path: '/activityCreate',
    name: 'activityCreate',
    component: components_activity_create,
    meta: {
      requireLogin: true,
      role: 1
    }
  }, {
    path: '/activityManage',
    name: 'activityManage',
    component: components_activity_manage,
    meta: {
      requireLogin: true,
      role: 0
    }
  }, {
    path: '/activityApproval',
    name: 'activityApproval',
    component: components_approval_activity,
    meta: {
      requireLogin: true,
      role: 2
    }
  }, {
    path: '/communityApproval',
    name: 'communityApproval',
    component: components_approval_community,
    meta: {
      requireLogin: true,
      role: 2
    }
  }, {
    path: '/communityCreate',
    name: 'communityCreate',
    component: src_components_community_create,
    meta: {
      requireLogin: true,
      role: 1
    }
  }, {
    path: '/communityManage',
    name: 'communityManage',
    component: src_components_community_manage,
    meta: {
      requireLogin: true,
      role: 0
    }
  }, {
    path: '/community/setup',
    name: 'communitySetup',
    component: components_community_setup,
    meta: {
      requireLogin: true,
      role: 1
    }
  }]
}));
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/store/index.js



vue_esm["default"].use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
	state: {
		isLogin: false,
		nickname: '',
		avatar: '',
		role: 0
	},
	getters: {},
	mutations: {
		login: function login(state, data) {
			state.isLogin = true;
			state.nickname = data.nickname;
			state.avatar = data.avatar;
			state.role = data.role;
		},
		logout: function logout(state) {
			state.isLogin = false;
			state.nickname = '';
			state.avatar = '';
			state.role = 0;
		}
	},
	actions: {
		loginFn: function loginFn(context, data) {
			context.commit('login', data);
		},
		logoutFn: function logoutFn(context) {
			context.commit('logout');
		}
	}
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/lib/config/config.js

/* harmony default export */ var config = ({
    install: function install(Vue, options) {
        var _Vue$prototype$ACTIVI;

        Vue.prototype.CREATE_STATUS = {
            base_info: 0,
            sponsor_info: 1,
            displayment: 2,
            success: 3
        };
        Vue.prototype.ACTIVITY_STATUS = (_Vue$prototype$ACTIVI = {
            0: '未审核',
            1: '审核不通过'
        }, defineProperty_default()(_Vue$prototype$ACTIVI, '0', '未开始'), defineProperty_default()(_Vue$prototype$ACTIVI, '1', '进行中'), defineProperty_default()(_Vue$prototype$ACTIVI, 2, '已结束'), _Vue$prototype$ACTIVI);
        Vue.prototype.USER_TABLE_CONFIG = [{
            row: 'account',
            width: 150,
            label: '账号'
        }, {
            row: 'nickname',
            width: 150,
            label: '昵称'
        }, {
            row: 'number',
            width: 150,
            label: '学号/工号'
        }, {
            row: 'role',
            width: 150,
            label: '角色'
        }];
        Vue.prototype.PEOPLE_TABLE_CONFIG = [{
            row: 'name',
            width: 150,
            label: '名字'
        }, {
            row: 'sexText',
            width: 120,
            label: '性别'
        }, {
            row: 'number',
            width: 150,
            label: '学号'
        }, {
            row: 'academyText',
            width: 180,
            label: '学院'
        }, {
            row: 'phone',
            width: 150,
            label: '手机'
        }];
        Vue.prototype.ACTIVITY_TABLE_CONFIG = [{
            row: 'name',
            width: 150,
            label: '活动名称'
        }, {
            row: 'district',
            width: 120,
            label: '活动区域'
        }, {
            row: 'type',
            width: 120,
            label: '活动类型'
        }, {
            row: 'time',
            width: 120,
            label: '活动时间'
        }, {
            row: 'sponsor',
            width: 120,
            label: '负责人'
        }, {
            row: 'phone',
            width: 120,
            label: '负责人手机'
        }, {
            row: 'create_time',
            width: 120,
            label: '创建时间'
        }, {
            row: 'status',
            width: 120,
            label: '当前状态'
        }];
        Vue.prototype.COMMUNITY_TABLE_CONFIG = [{
            row: 'name',
            width: 150,
            label: '组织名称'
        }, {
            row: 'district',
            width: 150,
            label: '组织区域'
        }, {
            row: 'type',
            width: 120,
            label: '组织类型'
        }, {
            row: 'enrolment',
            width: 120,
            label: '组织人数'
        }, {
            row: 'sponsor',
            width: 150,
            label: '负责人'
        }, {
            row: 'phone',
            width: 150,
            label: '负责人手机'
        }, {
            row: 'create_time',
            width: 180,
            label: '创建时间'
        }];
    }
});
// CONCATENATED MODULE: ./src/main.js











// Vue.config.productionTip = false;
vue_esm["default"].use(element_ui_common_default.a);
vue_esm["default"].use(config);
vue_esm["default"].prototype.$axios = axios_default.a;
vue_esm["default"].prototype.qs = lib_default.a;

/* eslint-disable no-new */
new vue_esm["default"]({
  el: '#app',
  router: router,
  store: src_store,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "SP18":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ScIo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UALO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZDUs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aO1s":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "erWL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hp9y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hrS3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "n70Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qa/e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u2ov":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.44cafbafc44c5213c762.js.map