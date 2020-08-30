<template>
	<div class="about">
		<Intro welcome="About me" />
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
