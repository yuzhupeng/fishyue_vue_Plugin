import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/View/HelloWorld'

import TEST from '@/View/TEST'
import vuexs from '@/View/vuex'
import event from '@/View/event'
import fors from '@/View/fors'
import Blog from '@/View/Blog'

import element from '@/View/element'
import TwoWayBinding from '@/View/TwoWayBinding'


import  elcontainer from '@/View/elcontainers'
import routers from '@/View/routers'


import applyform from '@/View/applyform.vue'


import iView from 'iview';
import 'iview/dist/styles/iview.css'  //iview的样式文件，必须引入
Vue.use(iView);


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TEST',
      name: 'TEST',
      component: TEST
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuexs
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/fors',
      name: 'fors',
      component: fors
    },  {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/applyform',
      name: 'applyform',
      component: () => import('@/View/applyform.vue')
    },
    {
     path:'/element',
     name:'element',
     component:element

    },
    {
      path:'/elcontainer',
      name:'elcontainer',
      component:elcontainer

     },

     {
       path:'/routers/:BwfQueryid',
       component:routers
     },
     {
      path:'/TwoWayBinding',
      component:TwoWayBinding
    }



  ]
})
