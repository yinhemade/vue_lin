import Vue from 'vue'
import Vuex from 'vuex'


// 因为Vuex的使用要在new Vuex.Store之前，
// 如果在main.js中引入，就会在new Vuex.Store之后，
// import 的语句会被自动提前

Vue.use(Vuex)

const actions = {
    'jia'(context, value){
        context.commit('JIA',value)
    },
    jian(context, value){
        context.commit('JIAN', value)
    },
    ji(context, value){
        if(context.state.sum % 2)
        context.commit('JIA', value)
    },
    waitjia(context, value){
        setTimeout(()=>{
            context.commit('JIA', value)
        },1000)
    },
}

const mutations = {
    'JIA'(state,value){
        state.sum += value
    },
    'JIAN'(state,value){
        state.sum -= value
    },
}

const state = {
    sum: 0,//当前的和
    school:'尚硅谷',
    subject:'前端'

}

const getters = {
    bigSum(state){
        return state.sum*10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})