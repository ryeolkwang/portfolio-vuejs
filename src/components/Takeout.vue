<template>
	<div class="takeout">
		<h1>Pockeo</h1>
		<img src="@/assets/takeout.png" class="pockeoImage" />
		<h2>Overview</h2>
		<p>
			Pockeo is the name of the food takeout ordering application from a
			large internet service company based in Tokyo. With more than 5,000
			shops in the country and more than 10 million users, the service is
			continuing to expand as part of the company's online to offline
			commerce business.
		</p>
		<p>
			With its BtoC food takeout ordering application being the main
			product of the service, the service also requires a BtoB content
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
			the environment. Couple of months later, I was making new features
			and developing new services for Pockeo. In retrospect, I believe my
			developing skills grew exponentially during this phase but I also
			really enjoyed this process as I was learning new techniques and
			make new things out of nothing.
		</p>
		<p>
			As a front-end developer, I worked alongside product managers,
			designers, back-end engineers and many others who contributed to
			Pockeo. We would discuss about major topics such as business goals
			and prioritized features for release but also minor problems such as
			how much the margin should be or what the subtitle should say. All
			in all, the insignificant quarrels we may have had ultimately led to
			what Pockeo is today which has grown significantly since I joined.
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
	margin-bottom: 40px;
}

p {
	margin-bottom: 50px;
	line-height: 1.5;
}

.takeout {
	min-height: calc(100vh - 194px);
	padding: 80px 30px;
	background-color: #f5f5f5;
	clip-path: polygon(0 0, 50% 60px, 100% 0, 100% 100%, 0 100%);
}

.pockeoImage {
	width: 100%;
	margin-bottom: 40px;
}
</style>
