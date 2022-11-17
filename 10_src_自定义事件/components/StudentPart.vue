<template>
    <div class="sty1">
        <h2>{{msg}}</h2>
        <h3>姓名:{{name}}</h3>
        <h3>性别:{{gender}}</h3>
        <h3>年龄:{{age}}</h3>
        <button @click="sendStudentName">点我发送学生名字给app</button>
        <button @click="unbind">点我解绑自定义事件</button>
        <button @click="death">点我摧毁实例</button>
        <button @click="add">点我age++</button>
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
            age:18
        }
    },
    methods:{
        sendStudentName(){
            this.$emit('tmd',this.name,666,888,999)
            // this.$emit('m1')
        },
        unbind(){
            // this.$off('tmd') //解绑单个事件
            // this.$off(['tmd','m1']) //解绑多个事件
            this.$off()
        },
        death(){
            this.$destroy()
        },
        add(){
            // this.age+=1
            console.log('age 哈哈哈');
        }
    }


}
</script>

<style scoped>
    .sty1{
        background-color: #bfa;
    }
</style>