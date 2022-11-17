// 用于创建整个文件的router
import VueRouter from "vue-router";
import HomeBar from '../pages/HomeBar'
import AboutBar from '../pages/AboutBar'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:AboutBar
        },
        {
            path:'/home',
            component:HomeBar
        }
    ]
})
