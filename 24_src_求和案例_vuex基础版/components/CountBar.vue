<template>
  <div>
    <h1>当前X的值为{{$store.state.sum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">X为奇数则加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'CountBar',
    data(){
        return {
            n:1, //用户选择的数字
        }
    },
    methods:{
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('ji',this.n)
        },
        incrementWait(){
            this.$store.dispatch('waitjia',this.n)            
        },
    }
}
</script>

<style scoped>
    *{
        margin-right: 5px;
    }
</style>