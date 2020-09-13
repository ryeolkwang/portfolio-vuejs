<template>
	<nav class="nav">
		<img class="logo" alt="My logo" src="@/assets/logo.png" />
		<router-link to="/">
			About Me
			<img src="@/assets/icon_profile.png" class="router-icon" />
		</router-link>
		<router-link to="/projects">
			Projects
			<img src="@/assets/icon_projects.png" class="router-icon" />
		</router-link>
	</nav>
</template>

<script></script>

<style lang="scss" scoped>
.nav {
	position: fixed;
	width: 100%;
	text-align: right;
	padding: 10px 30px;
	background-color: rgba(255, 255, 255, 0.9);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	z-index: 100;

	a {
		position: relative;
		font-size: 0;
		color: #2c3e50;
		margin-right: 30px;

		&:last-child {
			margin-right: 0;
		}

		&.router-link-exact-active::before {
			content: '';
			position: absolute;
			top: 6px;
			height: 3px;
			width: 24px;
			background-color: #2c3e50;
		}
	}

	.router-icon {
		height: 24px;
		width: 24px;
		vertical-align: bottom;
	}
}

.logo {
	position: absolute;
	top: 0;
	left: 30px;
	width: 50px;
	height: 50px;
}
</style>
