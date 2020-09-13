import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Takeout from '@/components/Takeout.vue';
import EarlyWage from '@/components/EarlyWage.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'About',
		component: About
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
		children: [
			{
				path: 'takeout',
				component: Takeout
			},
			{
				path: 'early-wage',
				component: EarlyWage
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
