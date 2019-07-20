<template>
	<div id="app">
		<type-writer
			:interval="50"
			:delay="100"
			cursor="_"
			align="left"
			rollback
			loop
		>
			<span class="comments">/**</span><br />
			<span class="comments">*2018—04-23,</span><br />
			<span class="comments">*2019-05-20.</span><br />
			<span class="comments">*/</span><br />
			<span class="keyword">const</span><span> boy =</span
			><span class="highlight">Xiao Yunfan</span><br />
			<span class="keyword">const</span><span> girl =</span
			><span class="highlight">Sun Yu</span><br />
		</type-writer>
	</div>
</template>

<script>
import TypeWriter from "./components/TypeWriter.vue";

export default {
	name: "app",
	components: {
		TypeWriter
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-weight: bold;
	font-size: 32px;
}
.comments {
	color: green;
}
.keyword {
	color: rebeccapurple;
}
.highlight {
	color: hotpink;
}
</style>
