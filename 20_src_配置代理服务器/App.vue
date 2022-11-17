<template>
    <div>
        <h1 :style="{opacity}" >{{msg}}</h1>  
        <button @click="getStudentMsg">学生</button>
        <hr>
        <button @click="getCarsMsg">汽车</button>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name:'App',
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
        }
    },
    methods:{
        getStudentMsg(){
            axios.get('http://localhost:8080/tmd/students').then(
                response =>{
                    alert('请求成功了',response.data);
                    console.log('学生',response.data);
                },
                error =>{
                    console.log('请求失败了', error.message);
                }

            )
        },
        getCarsMsg(){
            axios.get('http://localhost:8080/nmd/cars').then(
                response =>{
                    alert('请求成功了');
                    console.log('汽车',response.data);
                },
                error =>{
                    console.log('请求失败了', error.message);
                }

            )
        }
    },
    mounted(){
        setInterval(() => {
            this.opacity -=0.01
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
    },
}
</script>
<style>
    h1{
        margin: 10px;
    }
    *{
        margin: 0 auto;
    }
</style>