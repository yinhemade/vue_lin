<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">ει</button>&nbsp;
    <button @click="forward">εθΏ</button>&nbsp;
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