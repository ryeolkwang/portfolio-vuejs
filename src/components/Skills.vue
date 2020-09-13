<template>
	<div class="skills">
		<ul
			v-for="(key, idx) in this.aboutItems"
			:key="idx"
			@click="toggleExpansion(idx)"
			:class="{ ExToggled: isExpanded(idx) }"
		>
			{{
				idx.toUpperCase()
			}}
			<li v-show="isExpanded(idx)" v-for="list in key" :key="list">
				{{ list }}
			</li>
		</ul>
		<button class="toggleButton" @click="toggleAll()">
			{{ toggleButton }}
		</button>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Intro',

	data() {
		return {
			expandedGroup: []
		};
	},

	computed: {
		...mapState(['about']),

		aboutItems() {
			const list = [
				'work experience',
				'education',
				'languages',
				'skills',
				'etc'
			];
			return Object.keys(this.about)
				.filter(key => list.includes(key))
				.reduce((obj, key) => {
					obj[key] = this.about[key];
					return obj;
				}, {});
		},

		toggleButton() {
			return this.expandedGroup.length === 0 ? 'Open all' : 'Close all';
		}
	},

	methods: {
		isExpanded(idx) {
			return this.expandedGroup.indexOf(idx) !== -1;
		},

		toggleExpansion(idx) {
			if (this.isExpanded(idx))
				this.expandedGroup.splice(this.expandedGroup.indexOf(idx), 1);
			else this.expandedGroup.push(idx);
		},

		toggleAll() {
			if (this.expandedGroup.length === 0)
				this.expandedGroup.push(...Object.keys(this.aboutItems));
			else this.expandedGroup.splice(0);
		}
	}
};
</script>

<style scoped lang="scss">
.skills {
	margin: 30px;
}

ul {
	font-weight: bold;
	line-height: 1.5;
	cursor: pointer;

	&::before {
		content: '\25BA';
		display: inline;
	}

	+ ul {
		margin-top: 30px;
	}

	> li:first-child {
		margin-top: 10px;
	}

	&.ExToggled {
		&::before {
			content: '\25BC';
		}
	}
}

li {
	position: relative;
	margin-left: 20px;
	list-style: none;
	font-weight: normal;

	&::before {
		content: '';
		position: absolute;
		left: -15px;
	}
}

.toggleButton {
	margin-top: 30px;
	color: #777;
	border: none;
	background-color: transparent;
	text-decoration: underline;
}
</style>
