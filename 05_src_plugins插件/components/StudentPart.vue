<template>
    <div class="sty1">
        <h2>{{msg}}</h2>
        <h3>姓名:{{name}}</h3>
        <h3>性别:{{gender}}</h3>
        <h3>年龄:{{age}}</h3>
        <input type="text" v-fbind:value = "age"><br/>

        <button @click="test">点我问好</button>
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
    methods:{
        test(){
            this.hello()
            this.age++
        }
    }


}
</script>

<style>
    .sty1{
        background-color: #bfa;
    }
</style>