import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListPage from '@/views/ListPage'
import ListDetail from '@/views/ListDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    },
    {
      path: '/list/detail',
      name: 'listDetail',
      component: ListDetail
    }
  ]
})
