<template>
	<div class="intro">
		<h1>
			{{ welcome }}
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
h1 {
	margin: 0 0 20px;
}

.intro {
	margin-bottom: 30px;
}

.story {
	line-height: 1.35;
}
</style>
