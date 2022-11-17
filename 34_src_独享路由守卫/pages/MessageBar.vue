<template>
    <div>
        <ul>
            <li v-for=" msg in messageList" :key="msg.id">
                <!-- to的(模板)字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&&title=${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- to 的对象写法 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;
                <button @click="showPush(msg)">push查看</button>&nbsp;
                <button @click="showReplace(msg)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'MessageBar',
    data(){
        return{
            messageList:[
                {id:nanoid(),title:'message1'},
                {id:nanoid(),title:'message2'},
                {id:nanoid(),title:'message3'},
            ]
        }
    },
    methods:{
        showPush(msg){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:msg.id,
                    title: msg.title
                }
            })
        },
        showReplace(msg){
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:msg.id,
                    title: msg.title
                }
            })
        },
    },
    beforeDestroy(){
      console.log('Message被销毁了');
    }
}
</script>
