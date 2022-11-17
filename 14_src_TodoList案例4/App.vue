<template>
    <div>
        <div id="root">
            <div class="todo-container">
                <h1 :style="{opacity}" ref="title">{{msg}}</h1>
                <div class="todo-wrap">
                    <MyHeader @addthing="addthing"/>
                    <MyList 
                    :things="things"                     
                    />
                    <MyFooter 
                    :things="things"
                    @changeAllState="changeAllState"
                    @clearCompletedThings="clearCompletedThings"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MyHeader from './components/MyHeader'
    import MyFooter from './components/MyFooter'
    import MyList from './components/MyList'
export default {
    name:'App',
    components:{ MyHeader, MyFooter, MyList},
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
            things:JSON.parse(localStorage.getItem('things')) || []
        }
    },
    methods:{    
        // 通过Header添加事件
        addthing(e){
            this.things.unshift(e)
        },
        // 通过List、Item控制完成状态
        checkState(id){
            this.things.forEach((thing)=>{
                if(thing.id === id ){
                    thing.completed = !thing.completed
                }
            })
        },
        // 删除事件
        deleteThing(id){
            this.things = this.things.filter(thing => thing.id !== id )
        },
        // 修改全部完成状态
        changeAllState(done){
            this.things.forEach(thing => thing.completed = done)
        },
        // 删除所有已完成事件
        clearCompletedThings(){
            return this.things = this.things.filter(thing => {
                return !thing.completed
            })
        }
    },
    watch:{
        things:{
            deep:true,
            handler(value){
                localStorage.setItem('things', JSON.stringify(value))
            }
        }
    },
    mounted(){
        setInterval(() => {
            this.opacity -=0.01
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
        this.$bus.$on('checkState',this.checkState)
        this.$bus.$on('deleteThing',this.deleteThing)
    },
    beforeCreate(){
        this.$bus.$off('checkState')
        this.$bus.$off('deleteThing')
    },
}
</script>
<style>
    /*base*/
    h1{
        color: orangered;
    }    
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

</style>