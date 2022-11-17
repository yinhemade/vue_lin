<template>
    <div class="sty1">
        <h3>学校名称:{{name | mySlice}}</h3>
        <h3>学校地址:{{address}}</h3>
    </div>
</template>


<script>
export default {
    name:'SchoolPart',
    data(){
        return{
            name:'广东财经大学',
            address:'海珠区赤岗街道仑头路21'
        }
    },
    


}
</script>

<style>
    .sty1{
        background-color: #bfa;
    }
</style>