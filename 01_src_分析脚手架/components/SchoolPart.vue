<template>
    <!-- 组件的结构 -->
    <div class="test1">
        学校姓名: <h2 :style="{opacity}">{{name}}</h2>
        学校地址：<h2>{{address}}</h2>
        <button @click="showName">点我提示学校名</button>       
    </div>
</template>
<script>
    // 组件交互相关代码（数据、方法）
    export default {
        name:'SchoolPart',
        data(){
            return{
                name:'广东财经大学',
                address:'广州市海珠区赤岗街道21号',
                opacity:1,
            }
        },
        methods:{
            showName(){
                alert(this.name)
            }
        },
        mounted() {
            setInterval(()=>{
                this.opacity-=0.013
                if(this.opacity < 0) this.opacity = 1
            },16)
        },

    }
</script>
<style>
    /* 组件的样式 */
    .test1{
        background-color: bisque;
        color: chocolate;
    }
</style>