<template>
	<div class="projects">
		<a v-show="!showProjectList" @click="$router.back()" class="backButton">
			back
		</a>
		<h1>Projects</h1>
		<nav v-show="showProjectList" class="projectList">
			<router-link to="/projects/takeout" class="title">
				Food Takeout
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
		<div class="agreement">
			<div class="content">
				To comply with my non-disclosure agreement, I have omitted all
				confidential information in these case studies including the
				name of my client and service. All information in these case
				studies is my own and does not necessarily reflect the views of
				neither my client nor my client.
				<a href="#" class="topButton">
					Top
				</a>
			</div>
		</div>
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

.projects {
	position: relative;
}

.backButton {
	position: absolute;
	top: 130px;
	left: 75px;
	font-size: 0;
	z-index: 10;
	cursor: pointer;

	&::before {
		content: '\003C';
		display: block;
		font-size: 30px;
		font-weight: bold;
	}
}

.projectList {
	min-height: calc(100vh - 194px - 180px);
	padding: 80px 30px 30px;
	background-color: #f5f5f5;
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 100%, 0 100%);
	@include tablet {
		padding: 80px 50px 30px;
	}
}

.title {
	font-size: 44px;
	font-weight: bold;

	p {
		margin: 10px 0 80px;
		font-size: 16px;
		color: red;
	}
}

.agreement {
	height: 180px;
	background-color: #f5f5f5;
	text-align: center;
	padding: 30px;
	color: #555;
	font-size: 12px;
	line-height: 1.4;
	@include tablet {
		padding: 30px 60px;
	}

	.content {
		position: relative;
		@include pc;
		margin: 0 auto;
	}
}

.topButton {
	position: absolute;
	bottom: -20px;
	right: 0;
	text-align: right;
	font-size: 14px;

	@include tablet {
		right: 0;
		top: 80px;
	}

	&::after {
		content: '\25B2';
		display: inline;
		font-size: 14px;
	}
}
</style>
