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
import elcontainer from '@/View/elcontainers'
import routers from '@/View/routers'
import batchapply from '@/View/batchapply'
import applyform from '@/View/applyform.vue'
import dynamic from '@/View/dynamic'
import childslot from '@/View/childslot'
import fatherslot from '@/View/fatherslot'
import table from '@/View/table'
import tablepre from '@/View/tablepre'

import childs from '@/View/chuanzhi/child'
import fathers from '@/View/chuanzhi/father'
import Acomponent from '@/View/chuanzhi/Acomponent'
import provideA from '@/View/chuanzhi/provideA'
import eventBusA from '@/View/chuanzhi/eventBusA'
import ShowMessage from '@/View/chuanzhi/ShowMessage'


import personalview from '@/View/personalview'


import linechart from '@/View/linechart'



import login1 from '@/View/login1'
import login2 from '@/View/login2'


import iView from 'iview';
import 'iview/dist/styles/iview.css' //iview的样式文件，必须引入
Vue.use(iView);


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
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
        }, {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/applyform',
            name: 'applyform',
            component: () =>
                import ('@/View/applyform.vue')
        },
        {
            path: '/element',
            name: 'element',
            component: element

        },
        {
            path: '/elcontainer',
            name: 'elcontainer',
            component: elcontainer

        },

        {
            path: '/routers/:BwfQueryid',
            component: routers
        },
        {
            path: '/TwoWayBinding',
            component: TwoWayBinding
        },

        {
            path: '/batchapply',
            component: batchapply
        }, {
            path: '/childslot',
            component: childslot
        },
        {
            path: '/dynamic',
            component: dynamic
        },
        {
            path: '/table',
            component: table
        },
        {
            path: '/tablepre',
            component: tablepre
        }, {
            path: '/fatherslot',
            component: fatherslot
        },
        {
            path: '/childs',
            component: childs
        }, {
            path: '/fathers',
            component: fathers
        }, {
            path: '/Acomponent',
            component: Acomponent
        }, {
            path: '/provideA',
            component: provideA
        }, {
            path: '/eventBusA',
            component: eventBusA
        }, {
            path: '/ShowMessage',
            component: ShowMessage
        },
        {
            path: '/login1',
            component: login1
        }, {
            path: '/login2',
            component: login2
        },
        // {
        //     path: '/linechart',
        //     component: linechart

        // },
        {
            path: '/personalview',
            component: personalview
        },
        {
            path: '/vuesync',
            component: vuesync
        },




    ]
})