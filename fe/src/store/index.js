import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		isLogin: false,
		nickname: '',
		avatar: '',
		role: 0
	},
	getters: {

	},
	mutations: {
		login (state, data) {
			state.isLogin = true;
			state.nickname = data.nickname;
			state.avatar = data.avatar;
			state.role = data.role;
		},
		logout (state) {
			state.isLogin = false;
			state.nickname = '';
			state.avatar = '';
			state.role = 0;
		}
	},
	actions: {
		loginFn (context, data) {
			context.commit('login', data);
		},
		logoutFn (context) {
			context.commit('logout')
		}
	}
});

export default store;