<template>
	<header class="sidebar">
		<h3 class="name">
			park kwangryeol
		</h3>
		<div class="content">
			<a href="mailto:ryeolkwang@gmail.com">
				ryeolkwang@gmail.com
			</a>
			<p>Tokyo, Japan</p>
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['about'])
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
