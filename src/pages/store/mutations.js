import {HANDLERUSERINFO,GETITEMDATA,CLICKPAGINATE} from './mutations-types'

const mutations = {
  ['HANDLERUSERINFO'](state,{name,pwd}){

    state.name = name
    state.pwd = pwd
    console.log(state.name, state.pwd)
  },
  ['GETITEMDATA'](state,getDetailIdData){
    state.detailId = getDetailIdData
    console.log( state.detailId,'每一个列表项对应的单独数据')
  },
  ['CLICKPAGINATE'](state,pageNumData){
    state.pageNumData = pageNumData
    console.log( state.pageNumData,'分页器对应的每一页的数据')
  },
  ['GETTABDATA'](state,pageData){
    state.pageData = pageData
    console.log( state.pageData,'tab类型的页面数据')
  },
  ['HANDLERLISTPAGESHOW'](state){
    state.listPageShow = false
  },
  ['GOTOBACKLISTPAGE'](state){
    state.listPageShow = true
  },

}
export default mutations
