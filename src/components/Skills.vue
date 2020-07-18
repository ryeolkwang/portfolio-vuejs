<template>
	<div class="skills">
		<ul>
			Languages
			<li v-for="lang in this.about.languages" :key="lang">
				{{ lang }}
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Intro',

	computed: {
		...mapState(['about'])
	}
};
</script>

<style scoped lang="scss">
a {
	color: #42b983;
}

ul {
	line-height: 1.5;

	> li:first-child {
		margin-top: 10px;
	}
}
</style>
