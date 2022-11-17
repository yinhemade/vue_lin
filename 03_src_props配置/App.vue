<template>
    <div>
        <h1 :style="{opacity}" ref="title">{{msg}}</h1>
        <Student name='如花' gender='女' :age="18" />
    </div>
</template>

<script>
    import Student from './components/StudentPart.vue'
export default {
    name:'App',
    components:{Student},
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
</style>