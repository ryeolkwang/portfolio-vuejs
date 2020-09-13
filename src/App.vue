<template>
	<div class="app">
		<Nav />
		<router-view />
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import { mapActions } from 'vuex';

export default {
	components: {
		Nav
	},

	created() {
		this.getAbout();
	},

	methods: {
		...mapActions(['getAbout'])
	}
};
</script>

<style lang="scss">
@import '~normalize.css';

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: rgb(228, 228, 228);
}

a {
	color: inherit;
	text-decoration: none;
}

.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: auto;
	max-width: 480px;
	margin: 0 auto;
	background-color: #fff;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
