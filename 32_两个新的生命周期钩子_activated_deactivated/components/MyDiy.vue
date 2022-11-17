<template>
    <div class="dd">
        <h1 :style="{opacity}">{{msg}}</h1>  
    </div>
</template>

<script>
export default {
    name:'MyDiv',
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
        }
    },
    mounted(){
        setInterval(() => {
            this.opacity -=0.01
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
    }
}
</script>

<style scoped>
    h1{
        color: orangered;
        background-color: whitesmoke;
        width: 250px;
        height: 50px;
        box-shadow: 1px 1px 3px 4px olivedrab;
        display: flex;
        line-height: 1.42857143 !important;
        justify-content: space-around;
        border-radius: 3px;
        margin:50px;
    } 
</style>