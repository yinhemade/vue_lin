<template>
    <div>
        <h1 :style="{opacity}" ref="title">{{msg}}</h1>
        <button @click="showDom" ref="btn">点我输出上面的dom</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from './components/SchoolPart.vue'
export default {
    name:'App',
    components:{School},
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
        }
    },
    methods:{
        showDom(){
            console.log(this);//VueComponent
            console.log(this.$refs.title);//真实Dom元素
            console.log(this.$refs.btn);//真实DOM元素
            console.log(this.$refs.sch);//School组件的实例对象（VueComponent)
        }
    },
    mounted(){
        setInterval(() => {
            this.opacity -=0.012
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
    },
}
</script>
<style>
    h1{
        color: #bfa;
    }
</style>