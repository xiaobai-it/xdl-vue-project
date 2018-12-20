import {HANDLERUSERINFO,
        GETITEMDATA,CLICKPAGINATE,
        GETTABDATA,HANDLERLISTPAGESHOW,GOTOBACKLISTPAGE} from './mutations-types'

import {ajax} from '../../components/api/api' //自己简单封装的一个axios('部分url')请求的数据，返回的是promise对象

const actions = {

  //获取用户的登录名和密码
  handlerUserInfo({commit},{name,pwd}){
    commit('HANDLERUSERINFO',{name,pwd})
  },
  //根据文章ID获取对应的详情数据
  getItemData({commit},getDetailId){
    // 发送ajax请求，获取后台数据
    ajax('api/v1/topic/'+getDetailId)
      .then((getDetailIdData)=>{
        commit('GETITEMDATA',getDetailIdData)
      })
      .catch((error)=>{
        commit('GETITEMDATA', error)
      })
  },
  //把点击的某个页面的值，传入到ajax中，获取对应页面的数据,对应的函数在ListItem.vue页面中
  clickPaginate({commit},{page,tab}){
    // 发送ajax请求，获取后台数据
    ajax('api/v1/topics',{page,tab})//这块蚕食必须的用对象包裹起来，自己写的ajax就是这么规定的
      .then((pageNumData)=>{
        commit('CLICKPAGINATE',pageNumData)
      })
      .catch((error)=>{
        commit('CLICKPAGINATE', error)
      })
  },
  //获取对应的tab类型的页面数据
  getTabData({commit},{tab:path}){
    // 发送ajax请求，获取后台数据
    ajax('api/v1/topics',{tab:path})//这块蚕食必须的用对象包裹起来，自己写的ajax就是这么规定的
      .then((pageData)=>{
        commit('GETTABDATA',pageData)
      })
      .catch((error)=>{
        commit('GETTABDATA', error)
      })
  },
  //详情页显示的时候，列表页是否隐藏
  handlerListPageShow({commit}){
    commit('HANDLERLISTPAGESHOW')
  },
  goToBackListPage({commit}){
    commit('GOTOBACKLISTPAGE')
  }
}
export default actions
