import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city.html',
      name: 'City',
      component: City
    },
    {
      path: '/list.html',
      name: 'List',
      component: List
    }
  ]
})
