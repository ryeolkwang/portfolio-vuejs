<template>
	<div class="app">
		<Header />
		<main class="main">
			<nav class="nav">
				<router-link to="/">About Me</router-link>
				<router-link to="/works">Works</router-link>
			</nav>
			<router-view />
		</main>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
	components: {
		Header
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

a {
	color: inherit;
	text-decoration: none;
}

main {
	width: 70%;
	margin: 30px;
}

.app {
	display: flex;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.nav {
	margin-bottom: 50px;

	a {
		font-weight: bold;
		color: #2c3e50;
		margin-right: 50px;

		&.router-link-exact-active {
			color: #42b983;
			text-decoration: underline;
		}
	}
}
</style>
