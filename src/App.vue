<template>
	<div id="app-for-example">
		<div id="tw-title">
			<type-writer
				:interval="250"
				:delay="1000"
				align="center"
				loop
				cursor="|"
				><h1>V-typewriter</h1></type-writer
			>
		</div>
		<div id="tw-author">
			<h1>author info ..</h1>
			<h1>to do..</h1>
		</div>

		<type-writer class="tw-part">
			<span class="comments">// Simple Example</span><br /><br />
			<span class="keyword">I'm v-typewriter</span><br />
			<span class="keyword">Type</span><span> Type</span
			><span class="highlight"> Type!</span>
		</type-writer>
		<type-writer class="tw-part" align="center" cursor="$" rollback>
			<span class="comments">// Rollback Example</span><br /><br />
			<span class="keyword">I'm v-typewriter</span><br />
			<span class="keyword">Type</span><span> Type</span
			><span class="highlight"> Rollback!</span>
		</type-writer>
		<type-writer class="tw-part" align="center" cursor="~" loop>
			<span class="comments">// Loop Example</span><br /><br />
			<span class="keyword">I'm v-typewriter</span><br />
			<span class="keyword">Type</span><span> Type</span
			><span class="highlight"> Loop!</span>
		</type-writer>
		<type-writer
			class="tw-part"
			:interval="60"
			:delay="5000"
			cursor="_"
			align="right"
			rollback
			loop
		>
			<span class="comments">/**</span><br />
			<span class="comments">* It will rollback</span><br />
			<span class="comments">* and loop</span><br />
			<span class="comments">*/</span><br />
			<br />
			<span class="keyword">Loopppp...</span><span> Start</span><br />
			<span class="keyword">Begin</span><span> Rollbackkkk...</span>
		</type-writer>
		<div id="tw-api">
			<h1>api ..</h1>
			<h1>to do..</h1>
		</div>
	</div>
</template>

<script>
import TypeWriter from "./components/Typewriter.vue";

export default {
	name: "app",
	components: {
		TypeWriter
	}
};
</script>

<style>
#app-for-example {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-weight: bold;
	font-size: 24px;
	width: 90%;
	margin: 20px 5% 0;
	height: auto;
}
#tw-title {
	width: 60%;
	margin-left: 20%;
	font-weight: bold;
	height: 50px;
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: 2px solid black;
}
#tw-title h1 {
	margin: 0;
	width: auto;
}
.tw-part {
	padding: 15px;
	width: 20%;
	height: 220px;
	margin: 15px;
	display: inline-block;
	vertical-align: middle;
	border: 2px solid black;
	border-radius: 10px;
}
.comments {
	color: green;
}
.keyword {
	color: rebeccapurple;
}
.highlight {
	color: #2a859b;
}

#tw-author {
	height: 200px;
	width: 100%;
	border: 2px solid darkblue;
}
#tw-api {
	height: 200px;
	width: 100%;
	border: 2px solid darkgray;
}
</style>
