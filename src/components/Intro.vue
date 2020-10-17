<template>
	<div class="intro">
		<h1>
			{{ welcome }}
		</h1>
		<h3 class="name">
			{{ about.name }}
		</h3>
		<img src="@/assets/icon_web_design.png" class="webDesignIcon" />
		<div class="story">
			<div class="content">
				<h3>
					Hi, I'm Kwangryeol Park.<br />
					Nice to meet you!
				</h3>
				{{ about.intro }}
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
	&.name {
		@include tablet {
			margin-bottom: 100px;
		}
	}
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
	@include tablet {
		bottom: 0;
	}
}

.story {
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 90%, 50% 100%, 0 90%);
	background-color: rgb(35, 35, 35);
	color: rgb(240, 240, 240);
	padding: 100px 30px;
	line-height: 1.5;
	@include tablet {
		clip-path: none;
		padding: 100px 50px;
	}
}

.content {
	@include pc {
		margin: 0 auto;
	}
}
</style>
