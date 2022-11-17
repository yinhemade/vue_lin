import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from './count'
import personAbout from './person'


// 因为Vuex的使用要在new Vuex.Store之前，
// 如果在main.js中引入，就会在new Vuex.Store之后，
// import 的语句会被自动提前

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})