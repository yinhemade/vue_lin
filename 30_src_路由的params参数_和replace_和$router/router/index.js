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
                            name:'xiangqing',
                            path:'detail',
                            component:DetailBar,
                            // 标准写法
                            // props($route){
                            //     return{id:$route.query.id,title:$route.query.title}
                            // }
                            // 一层解构赋值
                            // props({query}){
                            //     return {id:query.id,title:query.title}
                            // }
                            // 两层解构赋值
                            props({query:{id,title}}){
                                return {id,title}
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
