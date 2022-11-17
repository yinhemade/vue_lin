<template>
    <div>
        <ul>
            <li v-for=" msg in messageList" :key="msg.id">
                <!-- to的(模板)字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&&title=${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- to 的对象写法 -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;
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
    }
}
</script>