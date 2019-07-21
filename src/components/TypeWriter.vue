<template>
	<div
		:class="self"
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
		identifier: {
			type: String,
			required: true
		},
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
		return {
			self: this.identifier
		};
	},
	created() {},
	mounted() {
		this.typewrite();
		console.log(this.self);
	},
	computed: {},
	methods: {
		typewrite() {
			let html = document.querySelector(`.${this.self}`);
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
			let html = document.querySelector(`.${this.self}`);
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
				html.innerHTML =
					content.substring(0, progress) +
					(progress & 1 ? cursor : "");
				if (rollSign && rollback) {
					if (current === ">") {
						progress =
							content.lastIndexOf("<", progress) === 0
								? 0
								: content.lastIndexOf("<", progress) - 1;
					} else {
						progress--;
					}
				} else {
					if (current === "<") {
						progress = content.indexOf(">", progress) + 1;
					} else {
						progress++;
					}
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

<style scoped></style>
