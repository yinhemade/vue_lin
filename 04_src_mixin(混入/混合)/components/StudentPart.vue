<template>
    <div class="sty1">
        <h2>{{msg}}</h2>
        <h3 @click="showName">姓名:{{name}}</h3>
        <h3>性别:{{gender}}</h3>
        <h3>年龄:{{age}}</h3>
    </div>
</template>


<script>
    import {hunhe, hunhe2} from '../mixin'
export default {
    name:'StudentPart',
    data(){
        return{
            msg:'学生信息',
            gender:'女',
            name:'如花'
        }
    },
    mixins:[hunhe, hunhe2]


}
</script>

<style>
    .sty1{
        background-color: #bfa;
    }
</style>