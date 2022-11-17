<template>
    <div class="sty1">
        <h2>{{msg}}</h2>
        <h3>姓名:{{name}}</h3>
        <h3>性别:{{gender}}</h3>
    </div>
</template>


<script>
export default {
    name:'StudentPart',
    data(){
        return{
            msg:'学生信息',
            gender:'女',
            name:'如花',
        }
    },


}
</script>

<style scoped>
    .sty1{
        background-color: #bfa;
    }
</style>