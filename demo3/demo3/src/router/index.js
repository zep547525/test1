import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vip from '@/components/vip'
import shopcart from '@/components/shopcart'
import serach from '@/components/search'
import newsList from '@/components/newsList'
import detail from '@/components/detail'
import Photolist from '@/components/Photolist'
Vue.use(Router)
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default new Router({
  linkActiveClass:"'link-active'",
  mode:'history',
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      redirect:'/Home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },{
      path: '/search',
      name: 'search',
      component: serach
    },
    {
      path: '/news/List',
      name: 'news_List',
      component:newsList
     },
    {
      path:"/news/detail",
      name:'detail',
      component:detail
    },
    {
      path:"/photos/list/:categoryId",
      name:"photo_list",
      component:Photolist

    }
  ]
})
