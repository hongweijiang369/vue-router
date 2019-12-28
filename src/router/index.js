import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import about from '@/components/about'
// import user from '@/components/user'
// 以下进行路由懒加载写法
const home = () => import('../components/home')
const about = () => import('../components/about')
const user = () => import('../components/user')
const homenews = () => import('../components/homenews')
const homemessage = () => import('../components/homemessage')
const profile = () => import('../components/profile')

Vue.use(Router)
const routes = [
  {
    path: '',
    // redirect重定向为首页
    redirect: '/home'  
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta:{
      title:'首页'
    },
    // 嵌套路由的使用
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:homenews
      },
      {
        path:'message',
        component:homemessage
      }
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta:{
      title:'关于'
    },
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: user,
    meta:{
      title:'用户'
    },

  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta:{
      title:'档案'
    },
  }
]

const router = new Router({
  //mode将路径更改为history
  mode:'history',
  routes
  
})

  // 创建导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  console.log(to)
 next() 
} )

export default router
