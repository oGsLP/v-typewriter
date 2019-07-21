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
			let el = this.$el;

			let content = el.innerHTML;
			el.innerHTML = "";
			let that = this;
			setTimeout(function() {
				el.innerHTML = content;
				that.typeNoDelay(content, that.interval, that.cursor);
			}, that.delay);
		},
		typeNoDelay(content, interval, cursor) {
			if (!cursor) cursor = " ";
			let el = this.$el;
			let [loop, rollback] = [this.loop, this.rollback];
			el.innerHTML = "";
			let progress = 0;
			let rollSign = false;
			let timer = setInterval(function() {
				if (progress === 0 && rollSign) {
					rollSign = false;

					if (loop) {
						setTimeout(() => {
							progress = 0;
							el.innerHTML = "";
						}, interval * 2);
					} else clearInterval(timer);
				}
				let current = content.substr(progress, 1);
				el.innerHTML =
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
				if (progress >= content.length) {
					if (rollback)
						setTimeout(() => {
							rollSign = true;
						}, interval * 2);
					else {
						if (loop) {
							setTimeout(() => {
								progress = 0;
								el.innerHTML = "";
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
