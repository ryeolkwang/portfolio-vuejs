<template>
	<div class="projects">
		<a v-show="!showProjectList" @click="$router.back()" class="backButton">
			back
		</a>
		<h1>Projects</h1>
		<nav v-show="showProjectList" class="projectList">
			<router-link to="/projects/takeout" class="title">
				Pockeo
				<p>
					Food Takeout Ordering Application
				</p>
			</router-link>
			<router-link to="/projects/early-wage" class="title">
				Early Wage
				<p>
					New Business in Early Wage Access
				</p>
			</router-link>
		</nav>

		<router-view />
	</div>
</template>

<script>
export default {
	computed: {
		showProjectList() {
			return this.$route.path === '/projects';
		}
	}
};
</script>

<style scoped lang="scss">
h1 {
	position: relative;
	margin: 130px 30px 30px;
	text-align: center;
	font-size: 30px;

	&::before {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		height: 3px;
		width: 50px;
		background-color: #2c3e50;
	}
}

.backButton {
	position: absolute;
	top: 65px;
	left: 30px;
	font-size: 0;

	&::before {
		content: '\1438';
		display: block;
		font-size: 20px;
		font-weight: bold;
	}
}

.projectList {
	min-height: calc(100vh - 194px);
	padding: 80px 30px;
	background-color: #f5f5f5;
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 100%, 0 100%);
}

.title {
	font-size: 48px;
	font-weight: bold;

	p {
		margin: 10px 0 80px;
		font-size: 16px;
		color: red;
	}
}
</style>
