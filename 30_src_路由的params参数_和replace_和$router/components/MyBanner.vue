<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">ει</button>
    <button @click="forward">εθΏ</button>
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
      }
    }
}
</script>

<style scoped>
    h2{
        color: skyblue;
    }
</style>