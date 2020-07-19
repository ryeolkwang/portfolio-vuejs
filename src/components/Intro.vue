<template>
	<div class="intro">
		<h1>
			{{ welcome }}
			<img class="vue" alt="Vue logo" src="@/assets/vueLogo.png" />
		</h1>
		<p class="story">
			{{ this.about.intro }}
		</p>
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
a {
	color: #42b983;
}

h1 {
	margin: 0 0 20px;
}

.intro {
	margin-bottom: 30px;
}

.vue {
	height: 35px;
	width: 35px;
	vertical-align: text-top;
}

.story {
	line-height: 1.35;
}
</style>
