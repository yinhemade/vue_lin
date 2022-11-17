<template>
  <div>
    <h1>当前X的值为{{he}}</h1>
    <h3>放大10倍的X的值为{{bigSum}}</h3>
    <h3>我在{{xuexiao}}，学习{{subject}}</h3>
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
import { mapGetters, mapState } from 'vuex'
export default {
    name:'CountBar',
    data(){
        return {
            n:1, //用户选择的数字
        }
    },
    computed:{
        // sum(){
        //     return this.$store.state.sum
        // },
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        //****************************************************************************** */
        // mapState第一种写法,对象法————不同名或者同名均可，利用ES6语法
        ...mapState({he:'sum',xuexiao:'school'}),
        // mapState第二种写法，数组法————只能同名，估计是vuex的语法糖
        ...mapState(['subject']),
        // mapGetters第一种，对象法————不同名/不同名
        ...mapGetters(['bigSum'])

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