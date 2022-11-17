// 用于创建整个文件的router
import VueRouter from "vue-router";
import HomeBar from '../pages/HomeBar'
import AboutBar from '../pages/AboutBar'
import NewsBar from '../pages/NewsBar'
import MessageBar from '../pages/MessageBar'
import DetailBar from '../pages/DetailBar'

const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutBar
        },
        {
            name:'zhuye',
            path:'/home',
            component:HomeBar,
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:NewsBar
                },
                {
                    name:'xiaoxi',
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
//全局前置路由守卫
router.beforeEach((to,from,next)=>{
    if(to.name === 'xiaoxi' || to.name === 'xinwen'){
        if(localStorage.getItem('school') === 'aiguigu'){
            next()
        }else{
            console.log('你妹的');
        }
    }else{
        next()
    }    
})

export default router