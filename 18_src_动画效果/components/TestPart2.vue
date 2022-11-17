<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！（过渡）</h1>
    </transition>
    </div>
</template>

<script>
export default {
    name:'TestPart2',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: rgb(197, 151, 241);
    }

    .hello-enter, .hello-leave-to{
        transform:translateX(-100%);
    }
    .hello-enter-active, .hello-leave-active{
        transition: 0.5s linear;
    }
    .hello-enter-to, .hello-leave{
        transform:translateX(0);
    }
    
    /* .hello-leave{
        transform:translateX(0);
    }
    .hello-leave-to{
        transform:translateX(-100%);
    } */


</style>