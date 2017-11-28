import Vue from 'vue'
import Router from 'vue-router'
import ListPage from '@/views/ListPage'
import ListDetail from '@/views/ListDetail'
import Index from '@/views/Index'

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
      path: '/list/:id',
      name: 'list',
      component: ListPage,
      // children:{
      //   path: '',
      //   name: 'listChild',
      //   component: ListPage,
      // }
    },
    {
      path: '/list/detail',
      name: 'listDetail',
      component: ListDetail
    }
  ]
})
