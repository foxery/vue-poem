import Vue from 'vue'
import Router from 'vue-router'
import ListPage from '@/views/ListPage'
import ListDetail from '@/views/ListDetail'
import Index from '@/views/Index'
import Profile from '@/views/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉路由中默认的#/
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    },
    {
      path: '/list/detail/:id',
      name: 'listDetail',
      component: ListDetail
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
