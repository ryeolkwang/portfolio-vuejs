import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

require('../node_modules/normalize.css/normalize.css');

Vue.config.productionTip = false;

Vue.mixin({
	computed: {
		isSp: () => window.matchMedia('(max-width: 576px)').matches
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
