<template>
    <div>
        <div  class="container">
            <MyDiy/>
            <CountBar></CountBar> 
        </div>        
    </div>    
</template>

<script>
import MyDiy from './components/MyDiy.vue';
import CountBar from './components/CountBar.vue';
export default {
    name: "App",
    components: { MyDiy, CountBar },
    
}
</script>

<style>
    .container, h4{
        margin: 0 auto;
        width: 300px;
    }
    
</style>