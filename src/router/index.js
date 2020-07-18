import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About.vue';
import Works from '@/views/Works.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'About',
		component: About
	},
	{
		path: '/works',
		name: 'Works',
		component: Works
	}
];

const router = new VueRouter({
	routes
});

export default router;
