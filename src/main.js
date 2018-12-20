// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUi from 'mint-ui'
// import "mint-ui/lib/style.css" //配置按需加载后，会自动获取使用的组件和组件对应的标签
Vue.use(mintUi)
//下面是对引导页的全局配置
import VueTouch from 'vue-touch'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
Vue.use(vueg, router, {
  tabs: [
    { //由于底部的圆点导航类似于tab导航，都是水平转场效果，所以填入这个配置项，可以参考vueg配置项
      name: 'page1'
    }, {
      name: 'page2'
    }, {
      name: 'page3'
    }, {
      name: 'page4'
    }]
})
Vue.use(VueTouch, {name: 'v-touch'})

import './assets/css/reset.css' //导入重置html标签的样式
import store from './pages/store/store'//引入vuex状态管理工具store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
