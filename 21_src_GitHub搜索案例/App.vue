<template>
    <div class="container">
        <MyDiy/>
        <SearchBar/>
        <ListBar/>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import ListBar from './components/ListBar.vue';
import MyDiy from './components/MyDiy.vue';
export default {
    name: "App",
    components: { SearchBar, ListBar, MyDiy }
}
</script>

<style>
    *{
        margin-top:2px ;
        padding: 5px;
    }
</style>