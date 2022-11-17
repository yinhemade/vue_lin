<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__rotateIn"
    leave-active-class="animate__bounceOut">
        <h1 v-show="isShow">你好啊!(animate.css外部库动画)</h1>
    </transition>
    </div>
</template>

<script>
    import 'animate.css'
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
        background-color: rgb(42, 181, 176);
    }



</style>