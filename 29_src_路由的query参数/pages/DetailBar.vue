<template>
  <div>
    <h5>消息编号: {{$route.query.id}}</h5>
    <h5>消息标题: {{$route.query.title}}</h5>
  </div>
</template>

<script>
export default {
  name:'DetailBar',

}
</script>

<style>

</style>