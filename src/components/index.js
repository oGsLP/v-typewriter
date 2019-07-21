//入口
import Typewriter from "./Typewriter.vue";

export default {
    install: function(Vue) {
        Vue.component("v-typewriter", Typewriter);
    }
};
// 需要自行处理浏览器引入和模块引入的问题
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.component("v-typewriter", Typewriter);
}
