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
		}
	}
};
</script>

<style scoped lang="scss">
a {
	color: #42b983;
}

ul {
	font-weight: bold;
	line-height: 1.5;
	cursor: pointer;

	&::before {
		content: '👉';
		display: inline;
		vertical-align: text-bottom;
	}

	+ ul {
		margin-top: 30px;
	}

	> li:first-child {
		margin-top: 10px;
	}

	&.ExToggled {
		&::before {
			content: '👇';
		}
	}
}

li {
	list-style: none;
	font-weight: normal;
}
</style>
