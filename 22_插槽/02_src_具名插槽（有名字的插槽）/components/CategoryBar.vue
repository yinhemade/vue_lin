<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot name="center">我是一些默认值，当使用者没有传递值时就会显示1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递值时就会显示2</slot>
  </div>
</template>

<script>
export default {
    name:'CategoryBar',
    props:['listData','title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
      text-align: center;
      background-color: orange;
    }
    video, img{
      width: 100%;
    }
</style>