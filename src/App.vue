<template>
  <div id="app">
    <!--首页-->
    <!--<Index/>-->
    <!-- vue-touch提供的滑动事件指令，可以参考vue-touch文档 -->
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <router-view></router-view>
    </v-touch>
    <!-- 页面底部的圆点导航 -->
    <ul class="circle-nav">
      <li :class="{'nav-current':$route.name==='page1'||$route.name==='default'}"></li>
      <li :class="{'nav-current':$route.name==='page2'}"></li>
      <li :class="{'nav-current':$route.name==='page3'}"></li>
      <li :class="{'nav-current':$route.name==='page4'}"></li>
    </ul>
  </div>
</template>

<script>
  // import Index from './components/Index/Index'
  export default {
    components:{
      // Index,
    },
    data() {
      return {
        message: ''
      }
    },
    methods:{
      onSwipeLeft() {
        // router转场后会自动触发vueg的转场特效
        switch (this.$route.name) {
          case 'default':
          case 'page1':
            this.$router.push({
              name: 'page2'
            })
            break
          case 'page2':
            this.$router.push({
              name: 'page3'
            })
            break
          case 'page3':
            this.$router.push({
              name: 'page4'
            })
            break
        }
      },
      onSwipeRight() {
        // this.$router.back() //代码写的有问题？？？？？？

        // router转场后会自动触发vueg的转场特效
        switch (this.$route.name) {
          case 'default':
          case 'page1':
            break
          case 'page4':
            this.$router.push({
              name: 'page3'
            })
            break
          case 'page3':
            this.$router.push({
              name: 'page2'
            })
            break
          case 'page2':
            this.$router.push({
              name: 'page1'
            })
            break
        }
      }
    }
  }
</script>

<style>
  html,
  body {
    margin: 0;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: inherit;
  }

  #app>div {
    height: inherit;
  }

  .circle-nav {
    position: fixed;
    bottom: 10px;
    width: 100%;
    max-width: inherit;
    text-align: center;
    padding: 0;
    /*opacity: 0.5;*/
  }

  .circle-nav li {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin: 5px;
  }

  .nav-current {
    background-color: aqua;
  }
</style>
