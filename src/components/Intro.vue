<template>
	<div class="intro">
		<div class="introTitle">
			<h1>{{ msg }}</h1>
			<p>
				For a guide and recipes on how to configure / customize this
				project,<br />
				check out the
				<a href="https://cli.vuejs.org" target="_blank" rel="noopener"
					>vue-cli documentation</a
				>.
			</p>
		</div>
		<img class="logo" alt="Vue logo" src="@/assets/logo.png" />
	</div>
</template>

<script>
export default {
	name: 'Intro',
	props: {
		msg: String
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
	display: flex;
}

.logo {
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
}

.introTitle {
	margin: 0 30px 30px 0;
}
</style>
