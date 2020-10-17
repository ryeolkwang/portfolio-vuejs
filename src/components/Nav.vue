<template>
	<nav class="nav">
		<div class="nav-content">
			<router-link to="/" class="ExLogoLink">
				<img class="logo" alt="My logo" src="@/assets/logo.png" />
			</router-link>
			<router-link to="/">
				<img src="@/assets/icon_profile.png" class="router-icon" />
				<template v-if="!isSp">About Me</template>
			</router-link>
			<router-link to="/projects">
				<img src="@/assets/icon_projects.png" class="router-icon" />
				<template v-if="!isSp">Projects</template>
			</router-link>
		</div>
	</nav>
</template>

<script></script>

<style lang="scss" scoped>
.nav {
	position: fixed;
	width: 100%;
	text-align: right;
	background-color: rgba(255, 255, 255, 0.9);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	z-index: 100;
	@include tablet {
		border: none;
	}

	&-content {
		position: relative;
		padding: 10px 30px;
		@include tablet {
			padding: 40px 50px;
		}
		@include pc {
			margin: 0 auto;
		}
	}

	a {
		position: relative;
		color: #2c3e50;
		margin-right: 30px;

		&:last-child {
			margin-right: 0;
		}

		&.router-link-exact-active {
			@include tablet {
				font-weight: bold;
			}

			&::before {
				content: '';
				position: absolute;
				top: 20px;
				height: 3px;
				width: 24px;
				background-color: #2c3e50;
				@include tablet {
					content: none;
				}
			}
		}

		&.ExLogoLink {
			position: absolute;
			top: 0;
			left: 30px;
			@include tablet {
				top: 10px;
				left: 50px;
			}

			&.router-link-exact-active::before {
				content: none;
			}
		}
	}

	.router-icon {
		height: 24px;
		width: 24px;
		vertical-align: bottom;
		@include tablet {
			margin-right: 10px;
			vertical-align: middle;
		}
	}
}

.logo {
	width: 50px;
	height: 50px;
	@include tablet {
		width: 80px;
		height: 80px;
	}
}
</style>
