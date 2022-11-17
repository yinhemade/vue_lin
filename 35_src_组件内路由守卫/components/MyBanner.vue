<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>&nbsp;
    <button @click="forward">前进</button>&nbsp;
    <button @click="testGo">go</button>
  </div>

</template>

<script>
export default {
    name:'MyBanner',
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      testGo(){
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped>
    h2{
        color: skyblue;
    }
</style>