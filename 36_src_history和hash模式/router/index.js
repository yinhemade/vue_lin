// 用于创建整个文件的router
import VueRouter from "vue-router";
import HomeBar from '../pages/HomeBar'
import AboutBar from '../pages/AboutBar'
import NewsBar from '../pages/NewsBar'
import MessageBar from '../pages/MessageBar'
import DetailBar from '../pages/DetailBar'

const router =  new VueRouter({
    mode:'history',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutBar,
            meta:{title:'关羽'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:HomeBar,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:NewsBar,
                    meta:{isAuth:true,title:'新闻'},
                    beforeEnter:((to,from,next)=>{
                        if(to.meta.isAuth){
                            if(localStorage.getItem('school') === 'aiguigu'){
                                next()
                            }else{
                                console.log('你妹的');
                            }
                        }else{
                            next()
                        }    
                    })
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:MessageBar,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:DetailBar,
                            meta:{isAuth:true,title:'详情'},
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
// router.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school') === 'aiguigu'){
//             next()
//         }else{
//             console.log('你妹的');
//         }
//     }else{
//         next()
//     }    
// })

router.afterEach((to)=>{
    document.title = to.meta.title || '硅谷系统'
})

export default router