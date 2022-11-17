import Vue from 'vue'
import App from './App.vue'
// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


import { Button, Row, DatePicker} from 'element-ui';
Vue.component('lin-btn', Button);
Vue.component('lin-row', Row);
Vue.component('lin-dp', DatePicker);

Vue.config.productionTip = false
// Vue.use(ElementUI);

new Vue({
    render: h=>h(App),
    // mounted(){
    //     console.log(this);
    // },
}).$mount('#app')