<template>
	<div
		class="v-typewriter"
		:style="{
			textAlign: align
		}"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "TypeWriter",
	props: {
		order: {
			type: String,
			default: "normal"
		},
		oneTime: {
			type: Boolean,
			default: true
		},
		delay: {
			type: Number,
			default: 0
		},
		interval: {
			type: Number,
			default: 75
		},
		cursor: {
			type: [Boolean, String],
			default: "_"
		},
		align: {
			type: String,
			default: "left"
		}
	},
	data() {
		return {
			ifCycle: this.oneTime
		};
	},
	created() {},
	mounted() {
		this.typewrite();
	},
	computed: {},
	methods: {
		typewrite() {
			if (this.delay === 0) this.typeNoDelay(this.interval, this.cursor);
			else
				setTimeout(
					this.typeNoDelay(this.interval, this.cursor),
					this.delay
				);
		},
		typeNoDelay(interval, cursor) {
			let html = document.querySelector(".v-typewriter");
			let content = html.innerHTML;
			html.innerHTML = "";
			let progress = 0;
			let timer = setInterval(function() {
				let current = content.substr(progress, 1);
				if (current === "<") {
					progress = content.indexOf(">", progress) + 1;
				} else {
					progress++;
				}
				html.innerHTML =
					content.substring(0, progress) +
					(progress & 1 ? cursor : "");
				if (progress >= content.length) {
					clearInterval(timer);
				}
			}, interval);
		}
	}
};
</script>

<style scoped>
.v-typewriter {
	margin: 5px;
	width: 100%;
	height: auto;
	text-align: left;
}
</style>
