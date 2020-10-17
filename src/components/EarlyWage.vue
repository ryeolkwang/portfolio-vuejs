<template>
	<div class="earlyWage">
		<h1>Early Wage</h1>
		<h2>Overview</h2>
		<p>
			The service is an early wage access application from a large IT
			service company based in Tokyo. The company wants to start a new
			business in early wage access and plans to develop an application
			for the service. The project was at the preliminary stages of the
			business at the time I was involved.
		</p>
		<p>
			The needs of the business arises from the fact that a lot of
			temporary and part-time workers get paid long after the day they
			worked. For example, some convenience store workers get paid at the
			end of the next month. This means they have have to wait almost two
			months to get paid for their work they did early in the previous
			month.
		</p>
		<p>
			Although the term early wage access may sound like a loan service,
			it simply refers to accessing the amount of wage they have already
			earned and worked for, when they want to. The business would obtain
			revenue from a small commission fee from the transaction when a
			worker uses the service.
		</p>
		<h2>My Role</h2>
		<p>
			I joined the team as an IT consultant in May 2019 when the business
			and system requirements were beginning to be decided. As part of
			deciding the system requirements, I did research and testing on the
			libraries/frameworks/tools that the service could use. During this
			process, I learned that even though there are a lot of good tools
			that could be used for the service, this was a new challenge and the
			project could not risk using fragile tools or adding more
			complication to the requirements.
		</p>
		<p>
			With over 50 excel sheets of research, the system requirements were
			completed to a certain standard and I started working on the webpage
			designs of the service, making mock-ups using powerpoint. Each slide
			would lay out the reason for the page and more importantly, what
			display and interactive features they have and why they have it,
			following the system's minimum requirements.
		</p>
		<h2>The Tech Stack</h2>
		<ul class="techStack">
			<li>MS Excel</li>
			<li>MS PowerPoint</li>
			<li>Vue.js</li>
		</ul>
		<h2>Final Thoughts</h2>
		<p>
			As my first IT project, I was excited to take this on but also
			quickly realized how much I lacked as my senior colleagues
			challenged my ideas to tell me if they were really necessary.
			Indeed, this continued to my last day on the project, but at least
			by then I was ready with a reason and if it all sounded good, they
			would allow my idea to be incorporated.
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

.earlyWage {
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
