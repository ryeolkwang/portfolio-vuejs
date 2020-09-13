import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAbout, fetchProjects } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		about: [],
		projects: []
	},
	mutations: {
		setAbout(state, data) {
			state.about = data;
		},

		setProjects(state, data) {
			state.projects = data;
		}
	},
	actions: {
		getAbout({ commit }) {
			fetchAbout().then(data => {
				commit('setAbout', data);
			});
		},

		getProjects({ commit }) {
			fetchProjects().then(data => {
				commit('setProjects', data);
			});
		}
	}
});
