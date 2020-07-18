import Vue from 'vue';
import Vuex from 'vuex';
import fetchAbout from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		about: [],
		works: []
	},
	mutations: {
		setAbout(state, data) {
			state.about = data;
		}
	},
	actions: {
		getAbout({ commit }) {
			fetchAbout().then(data => {
				commit('setAbout', data);
			});
		}
	}
});
