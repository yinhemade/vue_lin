<template>
    <div>
        <MyDiy/>
            <div class="container">        
            <CategoryBar title="美食" :listData="listData.foods">
                <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
                <a slot="footer" href="https://www.bilibili.com/">更多美食</a>
            </CategoryBar>
            <CategoryBar title="游戏角色" :listData="listData.characters">
                <ul slot="center">
                    <li v-for="(item,index) in listData.games" :key="index">{{item}}</li>
                </ul>
                <div slot="footer" class="foot">
                    <a href="https://www.bilibili.com/">单机游戏</a>
                    <a href="https://www.bilibili.com/">网络游戏</a>
                </div>
            </CategoryBar>
            <CategoryBar title="电影" :listData="listData.games">
                <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
                <template v-slot:footer >
                    <div class="foot">
                        <a href="https://www.bilibili.com/">欧美电影</a>
                        <a href="https://www.bilibili.com/">国内电影</a>
                    </div>
                    <h4>请充值会员</h4>
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
    .container, .foot ,h4{
        display: flex;
        justify-content: space-around;
    }
    
</style>