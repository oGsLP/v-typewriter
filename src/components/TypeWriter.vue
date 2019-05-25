<template>
    <div class="v-typewriter">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TypeWriter",
        props: {
            order:{
              type: String,
              default: "normal"
            },
            oneTime: {
                type: Boolean,
                default: true
            },
            delay:{
                type: Number,
                default: 0
            },
            interval: {
                type: Number,
                default: 75
            },
            cursor:{
                type:[Boolean, String],
                default: "_"
            }
        },
        data(){
           return{
               ifCycle: this.oneTime,
           };
        },
        created(){

        },
        mounted() {
            this.typewrite(this.delay,this.interval,this.cursor);
        },
        computed:{

        },
        methods:{
            typewrite(delay,interval,cursor){
                if(delay===0)
                    this.typeNoDelay(interval,cursor);
                else
                    setTimeout(this.typeNoDelay(interval,cursor),delay);
            },
            typeNoDelay(interval,cursor){
                let html = document.querySelector(".v-typewriter");
                let content = html.innerHTML;
                html.innerHTML="";
                let progress=0;
                let timer = setInterval(function () {

                    let current = content.substr(progress, 1);
                    if (current === "<") {
                        progress = content.indexOf(">", progress) + 1;
                    } else {
                        progress++;
                    }
                    html.innerHTML=(content.substring(0, progress) + (progress & 1 ? cursor : ""));
                    if (progress >= content.length) {
                        clearInterval(timer);
                    }
                },interval);
            },
            // typeText(node){
            //     if(node.hasChildNodes()){
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>