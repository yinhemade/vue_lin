/**
 * 该文件是整个项目的入口文件
 */
// 引入Vue
import Vue from 'vue'
// 引入App 它是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

