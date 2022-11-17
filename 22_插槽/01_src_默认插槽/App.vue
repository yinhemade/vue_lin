<template>
    <div>
        <MyDiy/>
            <div class="container">        
            <CategoryBar title="美食" :listData="listData.foods">
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            </CategoryBar>
            <CategoryBar title="游戏角色" :listData="listData.characters">
            <ul>
                <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
            </ul>
            </CategoryBar>
            <CategoryBar title="游戏角色" :listData="listData.games">
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
    data(){
        return{
            listData:{
                foods:['腊肉窝窝头','金丝虾球','杏仁豆腐','清心'],
                characters:['可莉','钟离','诺艾尔','安柏'],
                games:['原神','命运2','王者荣耀','艾尔登法环']
            }
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>