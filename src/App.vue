<template>
    <div>
        <MyDiy/>
        <button>原生的按钮</button>&nbsp;
        <input><hr/>
        <lin-row>
            <lin-btn>默认按钮</lin-btn>
            <lin-btn type="primary">主要按钮</lin-btn>
            <lin-btn type="success">成功按钮</lin-btn>
            <lin-btn type="info">信息按钮</lin-btn>
            <lin-btn type="warning">警告按钮</lin-btn>
            <lin-btn type="danger">危险按钮</lin-btn>
        </lin-row><hr/>
        <div class="block">
            <span class="demonstration">默认</span>
            <lin-dp
                v-model="value1"
                type="date"
                placeholder="选择日期">
            </lin-dp>
        </div>   
    </div>    
</template>
<script>
import MyDiy from './components/MyDiy.vue';

export default {
    name: "App",
    components: { MyDiy},
    data(){
        return{
            value1:'',
        }
    }
}
</script>

<style>
    
</style>