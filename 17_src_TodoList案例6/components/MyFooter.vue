<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model = "isAll"/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{things.length}}
        </span>
        <button class="btn btn-danger" @click="clearThings">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['things','changeAllState','clearCompletedThings'],
    computed:{
        // 已完成总数
        doneTotal(){

            // 普通写法
            // let count = 0;
            // this.things.forEach(thing => {
            //     if(thing.completed) count++
            // });
            // return count

            // 高级写法
            return this.things.reduce((pre, thing)=>{
                return pre + (thing.completed ? 1 :0)
            },0)
        },
        // 总数
        total(){
            return this.things.length;
        },
        isAll:{
            get(){
                return this.total === this.doneTotal && (this.total !== 0)
            },
            set(value){
                // this.changeAllState(value)
                this.$emit('changeAllState',value)
            }
        },

    },
    methods:{
        clearThings(){
            // this.clearCompletedThings()
            this.$emit('clearCompletedThings')
        }
    }
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>