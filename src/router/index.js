import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
 { path: '',
 redirect: '/home' },
 { path: '/home', component: ()=>import('../view/home/home') },
 { path: '/fenlei', component: ()=>import('../view/fenlei/fenlei')},
 { path: '/cart', component: ()=>import('../view/cart/cart')},
 { path: '/profile', component:()=>import('../view/profile/profile') },
 { path: '/detall:id:type', component: ()=>import('../view/detall/detall') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
