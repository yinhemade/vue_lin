<template>
    <div>
        <div  class="container">
            <MyDiy/>
            <CountBar></CountBar>
            <hr>
            <PersonBar/> 
        </div>        
    </div>    
</template>

<script>
import MyDiy from './components/MyDiy.vue';
import CountBar from './components/CountBar.vue';
import PersonBar from './components/PersonBar.vue';
export default {
    name: "App",
    components: { MyDiy, CountBar , PersonBar},
    
}
</script>

<style>
    .container, h4{
        /* margin: 0 auto;
        width: 300px; */
        display: flex;
        justify-content: space-around;
    }
    
</style>