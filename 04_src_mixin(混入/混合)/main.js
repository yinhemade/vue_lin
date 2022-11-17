import Vue from 'vue'
import App from './App.vue'
import { hunhe3 } from './mixin'
Vue.config.productionTip = false
// 全局混入（混合）
Vue.mixin(hunhe3)

new Vue({
    render: h=>h(App),
}).$mount('#app')