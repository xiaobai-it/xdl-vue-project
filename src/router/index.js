import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index'

//自己写的路由组件
import All from '../pages/all/All'
import Hot from '../pages/hot/Hot'
import Plugin from '../pages/plugin/Plugin'
import Share from '../pages/share/Share'
import Ask from '../pages/ask/Ask'
import Job from '../pages/job/Job'
import Detail from '../components/detail/Detail'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Guide from '../pages/guide/Guide'
import Guide1 from '../pages/guide/Guide1'
import Guide2 from '../pages/guide/Guide2'
import Guide3 from '../pages/guide/Guide3'
import Guide4 from '../pages/guide/Guide4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name:'index',
      component: Index,
      children:[
        {
          path: '',//全部页
          name: 'all',
          component: All,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            }
          ]
        },
        {
          path: 'all',//全部页
          name: 'all',
          component: All,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            }
          ]
        },
        {
          path: 'good',//精华页
          name: 'good',
          component: Hot,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            },
          ]
        },
        {
          path: 'plugin',//weex页
          name: 'plugin',
          component: Plugin,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            },
          ]
        },
        {
          path: 'share',//分享页
          name: 'share',
          component: Share,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            },
          ]
        },
        {
          path: 'ask',//问答页
          name: 'ask',
          component: Ask,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            },
          ]
        },
        {
          path: 'job',//招聘页
          name: 'job',
          component: Job,
          children:[
            {
              path: 'detail/:id',//数据详情页
              component: Detail
            },
          ]
        },
      ]

    },
    {
      path: '/login',//登录页
      name: 'login',
      component: Login
    },
    {
      path: '/register',//注册页
      name: 'register',
      component: Register
    },
    {
      path: '/guide',
      // name: 'guide',
      component: Guide,
      children:[
        {
          name:'default',
          path:'',
          component:Guide1
        },
        {
          name:'page1',
          path: '1',
          component: Guide1
        }
        ,
        {
          name:'page2',
          path: '2',
          component: Guide2
        }
        ,
        {
          name:'page3',
          path: '3',
          component: Guide3
        }
        ,
        {
          name:'page4',
          path: '4',
          component: Guide4
        }
      ]
    },
    {
      path: '/',
      // redirect:'/all',
      // component: All
      redirect:'/guide',
      component: Guide
    },
    {
      path: '*',
      redirect:'/index',
      component: Index
    },
  ]
})
