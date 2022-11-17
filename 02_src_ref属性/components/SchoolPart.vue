<template>
    <div class="sty1">
        <h2>学校名:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>


<script>
export default {
    data(){
        return{
            name:'广东财经大学',
            address:'地球'
        }
    }
}
</script>

<style>
    .sty1{
        background-color: orangered;
    }
</style>