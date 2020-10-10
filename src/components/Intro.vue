<template>
	<div class="intro">
		<h1>
			{{ welcome }}
		</h1>
		<h3>
			{{ about.name }}
		</h3>
		<img src="@/assets/icon_web_design.png" class="webDesignIcon" />
		<div class="story">
			<h3>
				Hi, I'm Kwangryeol Park.<br />
				Nice to meet you!
			</h3>
			{{ about.intro }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Intro',
	props: {
		welcome: String
	},

	computed: {
		...mapState(['about'])
	}
};
</script>

<style scoped lang="scss">
h1 {
	margin: 130px 30px 50px;
	text-align: center;
	font-size: 30px;
}

h3 {
	margin-bottom: 50px;
}

.intro {
	text-align: center;
	margin-bottom: 30px;
}

.webDesignIcon {
	position: relative;
	width: 50vw;
	max-width: 240px;
	bottom: -35px;
}

.story {
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 90%, 50% 100%, 0 90%);
	background-color: rgb(35, 35, 35);
	color: rgb(240, 240, 240);
	padding: 100px 30px;
	line-height: 1.5;
}
</style>
