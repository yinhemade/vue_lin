// 用于创建整个文件的router
import VueRouter from "vue-router";
import HomeBar from '../pages/HomeBar'
import AboutBar from '../pages/AboutBar'
import NewsBar from '../pages/NewsBar'
import MessageBar from '../pages/MessageBar'
import DetailBar from '../pages/DetailBar'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:AboutBar
        },
        {
            path:'/home',
            component:HomeBar,
            children:[
                {
                    path:'news',
                    component:NewsBar
                },
                {
                    path:'message',
                    component:MessageBar,
                    children:[
                        {
                            path:'detail',
                            component:DetailBar
                        }
                    ]
                }
            ]
        }
    ]
})
