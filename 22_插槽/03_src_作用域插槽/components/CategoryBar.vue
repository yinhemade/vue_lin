<template>
  <div class="category">
    <h3>{{title}}</h3>
      <slot :characters="characters" msg="hello">资源未加载</slot>
  </div>
</template>

<script>
export default {
    name:'CategoryBar',
    props:['title'],
    data(){
        return{
            characters:['可莉','钟离','诺艾尔','安柏'],
        }
    }
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