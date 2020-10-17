<template>
	<div class="about">
		<Intro welcome="Front-end Developer & IT Consultant" />
		<Skills />
		<Footer />
	</div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import Skills from '@/components/Skills.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Home',
	components: {
		Intro,
		Skills,
		Footer
	}
};
</script>
