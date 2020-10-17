<template>
	<div class="takeout">
		<h1>Food Takeout</h1>
		<h2>Overview</h2>
		<p>
			The service is a food takeout ordering application from a large IT
			service company based in Tokyo. With more than 5,000 shops in the
			country and more than 10 million users, the service is continuing to
			expand as part of the company's online to offline commerce business.
		</p>
		<p>
			With its B2C food takeout ordering application being the main
			product of the service, the service also requires a B2B content
			management system for shops (businesses) so that orders from users
			are recognized and correctly made. There is also a landing page for
			new businesses that want to post their shop on the service and most
			importantly, an internal management system so that all orders can be
			tracked in case of any inquiries and for statistical analysis.
		</p>
		<h2>My Role</h2>
		<p>
			I joined the team as a front-end developer in August 2019 when the
			service was still very young (launched late 2018). I started with
			fixing minor bugs and creating markups which helped me get used to
			the environment. Couple of months later, I was developing new
			features trying to increase app usage and also a better user
			experience whilst in the app. Today, I am developing new services to
			obtain new users and hence increase turnover.
		</p>
		<p>
			As a front-end developer, I worked alongside product managers,
			designers, back-end engineers and many others who contributed to the
			service. We would discuss about major topics such as business goals
			and prioritized features for release but also minor problems such as
			how much the padding size should be or what the subtitle should say.
			All in all, these discussions we had ultimately led to what the
			service is today which has grown significantly since I joined.
		</p>
		<h2>The Tech Stack</h2>
		<ul class="techStack">
			<li>JavaScript</li>
			<li>Vue.js</li>
			<li>CSS/Sass/SCSS</li>
			<li>Zeplin/Sketch</li>
			<li>Git, GitHub, Fork</li>
			<li>Drone CI</li>
		</ul>
		<h2>Final Thoughts</h2>
		<p>
			In retrospect, I believe my developing skills grew exponentially
			whilst developing this service. I believe they still are as I
			continue to build this service which is one of the main reasons why
			I enjoy developing this service. But what I also really enjoy is the
			process of learning new techniques, fixing unanticipated bugs and
			making new things out of almost nothing! My team has helped me a lot
			during this process and I only hope to give back not only
			individually but collectively through developing this service.
		</p>
	</div>
</template>

<script></script>

<style scoped lang="scss">
h1 {
	text-align: center;
	margin-bottom: 40px;
}

h2 {
	margin: 80px 0 40px;
}

p {
	margin-top: 50px;
	line-height: 1.5;

	+ p {
		margin-top: 30px;
	}
}

.takeout {
	min-height: calc(100vh - 194px);
	padding: 80px 30px;
	background-color: #f5f5f5;
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 100%, 0 100%);
	@include tablet {
		padding: 80px 50px;
	}
}

.techStack {
	margin-bottom: 50px;
	padding-left: 20px;

	li {
		margin-bottom: 15px;
	}
}
</style>
