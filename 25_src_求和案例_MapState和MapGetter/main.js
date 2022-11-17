import Vue from 'vue'
import App from './App.vue'
import store from './store'//在store中引入vuex
Vue.config.productionTip = false


new Vue({
    render: h=>h(App),
    store,
    // mounted(){
    //     console.log(this);
    // },
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount('#app')