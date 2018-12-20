import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入其他的vuex的组件
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
