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
		rollback: {
			type: Boolean,
			default: false
		},
		loop: {
			type: Boolean,
			default: false
		},
		delay: {
			type: Number,
			default: 0
		},
		interval: {
			type: Number,
			default: 100
		},
		cursor: {
			type: [Boolean, String],
			default: "_"
		},
		align: {
			type: String,
			default: "left",
			validator: function(val) {
				return ["left", "center", "right"].indexOf(val) !== -1;
			}
		}
	},
	data() {
		return {};
	},
	created() {},
	mounted() {
		this.typewrite();
	},
	computed: {},
	methods: {
		typewrite() {
			let html = document.querySelector(".v-typewriter");
			let content = html.innerHTML;
			html.innerHTML = "";
			let that = this;
			setTimeout(function() {
				html.innerHTML = content;
				that.typeNoDelay(content, that.interval, that.cursor);
			}, that.delay);
		},
		typeNoDelay(content, interval, cursor) {
			console.log(content.length);
			if (!cursor) cursor = " ";
			let html = document.querySelector(".v-typewriter");
			let [loop, rollback] = [this.loop, this.rollback];
			html.innerHTML = "";
			let progress = 0;
			let rollSign = false;
			let timer = setInterval(function() {
				if (progress === 0 && rollSign) {
					rollSign = false;

					if (loop) {
						setTimeout(() => {
							progress = 0;
							html.innerHTML = "";
						}, interval * 2);
					} else clearInterval(timer);
				}
				let current = content.substr(progress, 1);
				if (rollSign && rollback) {
					if (current === ">") {
						progress =
							content.lastIndexOf("<", progress) === 0
								? 0
								: content.lastIndexOf("<", progress) - 1;
					} else {
						progress--;
					}
					html.innerHTML =
						content.substring(0, progress) +
						(progress & 1 ? cursor : "");
				} else {
					if (current === "<") {
						progress = content.indexOf(">", progress) + 1;
					} else {
						progress++;
					}
					html.innerHTML =
						content.substring(0, progress) +
						(progress & 1 ? cursor : "");
				}
				console.log(progress);
				if (progress >= content.length) {
					if (rollback)
						setTimeout(() => {
							rollSign = true;
						}, interval * 2);
					else {
						if (loop) {
							setTimeout(() => {
								progress = 0;
								html.innerHTML = "";
							}, interval * 2);
						} else clearInterval(timer);
					}
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
