<template>
    <ul class="todo-main">
        <transition-group name="thing" appear>
            <MyItem 
            v-for="thing in things" 
            :key="thing.id" :thing="thing" 
            />
        </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
    name: "MyList"
    ,components: { MyItem },
    props:['things']
}
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

    
    .thing-enter-active{
        animation: atguigu 1s;
    }
    .thing-leave-active{
        animation: atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>