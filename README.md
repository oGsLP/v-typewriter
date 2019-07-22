<h1 align="center">v-typewriter</h1>

![npm][npm version url]
[![Dependency Status][dependencies]][dependencies url]
[![Build Status][travis build]][travis build url]
[![Coverage Status][coveralls]][coveralls url]
![Snyk Vulnerabilities for GitHub Repo][vulnerabilities url]
![GitHub][github licence url]
![GitHub package.json dependency version (prod)][vue version url]
![GitHub last commit][last commit url]


> A Vue UI components lib

[https://v-typewriter.netlify.com](https://v-typewriter.netlify.com)

```bash
npm install v-typewriter
```

## Import

```javascript

// 用法一 main.js 入口

import Vue from "vue";
import VTypewriter from "v-typewriter";
Vue.use(VTypewriter);


```

```vue

<!--用法二 .vue中引入-->
<scripts>
import VTypewriter from "v-typewriter";]

export default {
	name: "app",
	components: {
		TypeWriter
	}
};
</scripts>

```

## Usage
```vue
<v-typewriter :interval="100" loop rollback>
	<!--insert any dom to be typewriter-->
	<h1>v-typewriter</h1>
	<span>We can type!</span>
</v-typewriter>
```


## arguments
|	name	|	type	|  default	|	desc	|
|:---------:|:---------:|:---------:|:---------:|
|  rollback |  Boolean  |	false	| rollback when typed |
|  loop		|  Boolean	|	false	| loop when typed |
|  delay	|  Number	|	  0		| delay before typing |
|  interval |  Number	|	 100	| typing interval between each letter |
|  cursor   |  String   |    "_"    | typing cursor |
|  align    |  String   |   "left"  | typing text align(left/right/center) |
	

---

## Project setup

> Our example is in **App.vue**. To try our components now, git clone and use `npm run serve` and open your browser at "http://localhost:8080/" to view some examples in App.vue.

> You can also review it online at our [website](https://v-typewriter.netlify.com)


[npm version url]:https://img.shields.io/npm/v/v-typewriter.svg
[dependencies]:https://david-dm.org/oGsLP/v-typewriter.svg?theme=shields.io
[dependencies url]:https://david-dm.org/oGsLP/v-typewriter
[travis build]:https://travis-ci.com/oGsLP/v-typewriter.svg?branch=master
[travis build url]:https://travis-ci.com/oGsLP/v-typewriter
[coveralls]:https://coveralls.io/repos/github/oGsLP/v-typewriter/badge.svg?branch=master
[coveralls url]:https://coveralls.io/github/oGsLP/v-typewriter?branch=master

[vulnerabilities url]:https://img.shields.io/snyk/vulnerabilities/github/oGsLP/v-typewriter.svg
[github licence url]:https://img.shields.io/github/license/oGsLP/v-typewriter.svg
[package.json version url]:https://img.shields.io/github/package-json/v/oGsLP/v-typewriter.svg
[vue version url]:https://img.shields.io/github/package-json/dependency-version/oGsLP/v-typewriter/vue.svg


[last commit url]:https://img.shields.io/github/last-commit/oGsLP/v-typewriter.svg
[contributors url]:https://img.shields.io/github/contributors/oGsLP/v-typewriter.svg
[stars url]:https://img.shields.io/github/stars/oGsLP/v-typewriter.svg?style=social
[forks url]:https://img.shields.io/github/forks/oGsLP/v-typewriter.svg?style=social
[watchers url]:https://img.shields.io/github/watchers/oGsLP/v-typewriter.svg?style=social
