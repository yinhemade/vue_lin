<template>
    <div>
        <MyDiy/>
            <div class="container">  
            <CategoryBar title="原神角色" >
                <template slot-scope="gg">
                    <ul>
                        <li v-for="(item,index) in gg.characters" :key="index">{{item}}</li>
                    </ul>
                </template>
            </CategoryBar>
            <CategoryBar title="原神角色" >
                                    <!--  解构赋值-->
                <template slot-scope="{characters}">
                    <ol>
                        <li v-for="(item,index) in characters" :key="index">{{item}}</li>
                    </ol>
                </template>
            </CategoryBar>
            <CategoryBar title="原神角色" >
                <template slot-scope="gg">
                    <h4 v-for="(item,index) in gg.characters" :key="index">{{item}}</h4>
                </template>
            </CategoryBar>
        </div>
    </div>    
</template>

<script>
import CategoryBar from './components/CategoryBar.vue';
import MyDiy from './components/MyDiy.vue';
export default {
    name: "App",
    components: { MyDiy, CategoryBar },
    
}
</script>

<style>
    .container, h4{
        display: flex;
        justify-content: space-around;
    }
    
</style>