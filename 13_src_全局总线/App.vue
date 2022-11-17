<template>
    <div class="b1">
        <h1 :style="{opacity}" ref="title">{{msg}}</h1>
        <School/>
        <Student/>
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
    mounted(){
        setInterval(() => {
            this.opacity -=0.012
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
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