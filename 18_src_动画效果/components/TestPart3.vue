<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好啊!(同组A)</h1>
        <h1 v-show="isShow" key="2">你好啊!(同组B)</h1>
    </transition-group>
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
        background-color: yellow;
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