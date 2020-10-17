<template>
	<footer>
		<div class="contact">
			<img class="logo" alt="My logo" src="@/assets/logo.png" />
			<p class="motto">Coding to think</p>
			<p>ryeolkwang@gmail.com</p>
		</div>
		<p class="copyright">Copyright &copy; 2020</p>
	</footer>
</template>

<style scoped lang="scss">
footer {
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 100%, 0 100%);
	background-color: rgb(100, 100, 100);
	padding: 80px 50px 50px;
	margin: 0 auto;
	color: #fff;
	text-align: center;
	@include tablet {
		clip-path: none;
		padding-top: 50px;
	}
}

p {
	margin: 30px 0;
	letter-spacing: 0.2px;

	&.motto {
		font-weight: bold;
		text-transform: uppercase;
	}

	&.copyright {
		color: #333;
	}
}

.logo {
	width: 50px;
	height: 50px;
	@include tablet {
		margin-left: 50px;
		width: 80px;
		height: 80px;
	}
}

.contact {
	@include tablet {
		display: flex;
		justify-content: space-between;
	}
	@include pc {
		margin: 0 auto;
	}
}
</style>
