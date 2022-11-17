<template>
    <div class="sty1">
        <h3>学校名称:{{name}}</h3>
        <h3 class="qwe">学校地址:{{address}}</h3>
        <!-- <button @click="showName">点我展示学校名</button> -->
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
    mounted(){
        this.$bus.$on('hello',(val)=>{
            console.log('我是school,我收到了,',val);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    },
}
</script>

<style lang="less" scoped>
    .sty1{
        background-color: rgb(107, 243, 73);
        .qwe{
            color: skyblue;
        }
    }
</style>