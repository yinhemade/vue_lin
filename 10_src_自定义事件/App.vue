<template>
    <div class="b1">
        <h1 :style="{opacity}" ref="title">{{msg}}</h1>
        <School :getSchool="getSchool"/>
        <!-- 方法一，用自定义事件给子组件绑定，子组件用$emit触发 -->
        <!-- <Student v-on:tmd="getStudentName" @m1="testMethod"/>      //简写形式   -->
        <Student @tmd="getStudentName" /> 

        <!-- 方法二，用ref绑定子组件，直接通过this.$refs.xxx获取子组件发出的函数，并调用 -->
        <!-- <Student ref="student"/> -->
    </div>
</template>

<script>
    import Student from './components/StudentPart.vue'
    import School from './components/SchoolPart.vue'
export default {
    name:'App',
    components:{Student,School},
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
        }
    },
    methods:{
        getSchool(val){
            console.log('App收到了学校名,'+val);
        },
        getStudentName(val,...params){
            console.log('App收到了学生名,',val,params);
        },
        testMethod(){
            console.log('App自定义事件3被调用了');
        }
    },
    mounted(){
        setInterval(() => {
            this.opacity -=0.012
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
        // this.$refs.student.$on('tmd',this.getStudentName)
        // this.$refs.student.$on('m1')

        
    },
}
</script>
<style>
    h1{
        color: orangered;
    }
    .b1{
        background-color: lightsteelblue;
    }
    *{
        padding: 5px;
        margin-top: 10px;
    }
</style>