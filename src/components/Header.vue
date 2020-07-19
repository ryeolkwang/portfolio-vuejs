<template>
	<header class="sidebar">
		<h3 class="name">
			{{ this.about.name }}
		</h3>
		<div class="content">
			<a href="mailto:ryeolkwang@gmail.com">
				{{ this.about.email }}
			</a>
			<p class="area">
				{{ this.about.area.city }}, {{ this.about.area.country }}
			</p>
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
	padding: 30px;
	text-align: center;
}

.name {
	margin-bottom: 50px;
}

.area {
	margin-top: 15px;
}
</style>
