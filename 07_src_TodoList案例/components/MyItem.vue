<template>
    <li>
        <label>
            <input type="checkbox" :checked="thing.completed" @change="getThingIdToChangeState(thing.id)"/>
            <span>{{thing.title}}</span>
        </label>
        <button class="btn btn-danger" @click="getThingIdToDeleteItem(thing.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['thing', 'checkState','deleteThing'],
    methods:{
        getThingIdToChangeState(id){
            this.checkState(id)
        },
        getThingIdToDeleteItem(id){
            if(confirm('确认删除吗？'))
            this.deleteThing(id)
        }
    }
}
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color:lightskyblue;
    }

    li:hover button{
        display: block;
    }

</style>