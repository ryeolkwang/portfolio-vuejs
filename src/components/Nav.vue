<template>
	<nav class="nav">
		<img class="logo" alt="My logo" src="@/assets/logo.png" />
		<router-link to="/">About Me</router-link>
		<router-link to="/works">Works</router-link>
	</nav>
</template>

<script></script>

<style lang="scss" scoped>
.nav {
	position: relative;
	text-align: right;
	margin-bottom: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;
		margin-right: 35px;

		&:last-child {
			margin-right: 0;
		}

		&.router-link-exact-active {
			color: #42b983;
			text-decoration: underline;
		}
	}
}

.logo {
	position: absolute;
	top: -20px;
	left: 0;
	width: 60px;
	height: 60px;
}
</style>
