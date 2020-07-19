<template>
	<div class="about">
		<Intro welcome="Welcome to My Portfolio in Vue.js" />
		<Skills />
	</div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Skills from '@/components/Skills.vue';

export default {
	name: 'Home',
	components: {
		Intro,
		Skills
	}
};
</script>

<style scoped lang="scss">
.sidebar {
	width: 30%;
	padding: 30px;
}

.name {
	margin-bottom: 50px;
}
</style>
