import Vue from "vue";
import App from "./App.vue";
import VTypeWriter from "v-typewriter";

Vue.config.productionTip = false;
Vue.use(VTypeWriter);

new Vue({
	render: h => h(App)
}).$mount("#app");
