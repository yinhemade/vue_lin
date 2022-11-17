<template>
    <div class="sty1">
        <h2>{{msg}}</h2>
        <h3>姓名:{{name}}</h3>
        <h3>年龄:{{myAge+1}}</h3>
        <h3>性别:{{gender}}</h3>
        <button @click="addAge">点我年龄++</button>
    </div>
</template>


<script>
export default {
    // name:'StudentPart',
    data(){
        return{
            msg:'学生信息',
            myAge:this.age
        }
    },
    methods:{
        addAge(){
            this.myAge++;
        }
    },
    // props:['name','age','gender']//简单接收

    //接收的同时对类型进行限制
    /**props:{
        name:String,
        gender:String,
        age:Number
    }*/

    //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type: Number,
            default:100
        },
        gender:{
            type:String,
            required:true,
        }
    }


}
</script>

<style>
    .sty1{
        background-color: #bfa;
    }
</style>