<template>
  <div>
    <ul>
        <li>news001<input></li>
        <li>news002<input></li>
        <li>news003<input></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NewsBar',
    beforeDestroy(){
      console.log('News被销毁了');
    }
}
</script>