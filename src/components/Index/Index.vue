<template>
    <div class="index-container">
      <div class="index-wrap">
        <div class="index-top">
          <input type="text" class="index-search">
          <div class="warp-login-register">
            <span class="index-login" v-if="!name"><router-link to="/login">登录</router-link></span>
            <span class="index-login" v-else>{{name}}</span>
            <span>|</span>
            <span class="index-register"><router-link to="/register">注册</router-link></span>
          </div>

        </div>
        <div class="index-middle">
          <!--mint-ui插件中的swipe-->
          <!--<mt-swipe :auto="2000" class="mint-styles">-->
            <!--<mt-swipe-item class="mint-item-styles"><img src="../../assets/vue1.jpg" alt=""/></mt-swipe-item>-->
            <!--<mt-swipe-item class="mint-item-styles"><img src="../../assets/vue2.jpg" alt=""/></mt-swipe-item>-->
            <!--<mt-swipe-item class="mint-item-styles"><img src="../../assets/vue3.jpg" alt=""/></mt-swipe-item>-->
            <!--<mt-swipe-item class="mint-item-styles"><img src="../../assets/vue4.jpg" alt=""/></mt-swipe-item>-->
          <!--</mt-swipe>-->

          <!--swiper实现的整个轮播图-->
          <swiper class="lunbo" :options="swiperOption" ref="mySwiper">
            <swiperSlide><img src="../../assets/images/vue1.jpg" alt=""></swiperSlide>
            <swiperSlide><img src="../../assets/images/vue2.jpg" alt=""></swiperSlide>
            <swiperSlide><img src="../../assets/images/vue3.jpg" alt=""></swiperSlide>
            <swiperSlide><img src="../../assets/images/vue4.jpg" alt=""></swiperSlide>
          </swiper>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="index-bottom">
          <span><router-link to="/all">首页</router-link></span>
          <span @click="handlerAlert">微信公众号</span>
          <!--//VUE 2.0加上远程连接，微信公众号就会出现bug，但是这个bug在ihpone6/7/8plus 上会出现，奇怪了-->
          <span>VUE 2.0</span>
          <span>参考资料</span>
          <span>API</span>
          <span>关于</span>
        </div>
        <!--微信公众号对应的标题-->
        <div v-if="isShowAlert">
          <mt-popup v-model="isShowAlert" position="right">
            <div class="wrap-wechat-img" >
              <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" alt="">
            </div>
            <p class="wrap-shouzhi">亲,微信扫一扫奴家<img src="../../assets/images/shouzhi.png" alt="" class="shouzhi"></p>
            <p class="wechat-contents">
              Vue中文社区 独家公众号，面向前端爱好者， 每日更新最有料的文章，最前沿的资讯,内容包含但不限于Vue,React,Angular,前端工程化...等各种"大保健"知识点,右上角点关注,老司机带你弯道超车,不定期更有各种福利赠送
            </p>
          </mt-popup>
        </div>
        <!--<Wechat @startChangeAlert="updataAlert" :isShowAlert="isShowAlert"/>-->
      </div>
      <!--对应的6个子页面-->
      <div class="list-container">
        <div class="list-title">
          <ul>
            <li> <router-link to="/index/all" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='全部'?'showBgColor':'']">全部</span> </router-link> </li>
            <li> <router-link to="/index/good" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='精华'?'showBgColor':'']">精华</span> </router-link> </li>
            <li> <router-link to="/index/plugin" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='weex'?'showBgColor':'']">weex</span> </router-link> </li>
            <li> <router-link to="/index/share" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='分享'?'showBgColor':'']">分享</span> </router-link> </li>
            <li> <router-link to="/index/ask" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='问答'?'showBgColor':'']">问答</span> </router-link> </li>
            <li> <router-link to="/index/job" @click.native="handlerShowBgColor"> <span :class="[isShowPages==='招聘'?'showBgColor':'']">招聘</span> </router-link> </li>
          </ul>
        </div>
        <!--显示标题对应的页面-->
        <router-view/>
      </div>
    </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'

  //引入自己写的组件
  import Wechat from '../wechat/Wechat'
  export default {
    components:{ //把组件变成标签来使用
      Wechat,
      swiper,
      swiperSlide,
    },
    data() {
      return {
        isShowAlert:false ,//是否显示【微信公众号标题】的弹出框
        //配置swiper轮播属性
        swiperOption: {
          notNextTick: true,
          loop: true,//循环
          initialSlide: 0,//初始化索引值，就是默认显示的是哪个图片
          // autoplay:true,//等同于以下设置，自动切换
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false, //无限轮播
            disableOnInteraction: false,//鼠标进入，停止轮播
          },
          effect: 'coverflow',//轮播样式
          // navigation: { //指明轮播的2个点击按钮
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
          pagination: { //指明轮播的分页器，也就是小圆点，点击切换图片
            el: '.swiper-pagination',
            clickable: true//点分页器(小圆点)，控制Swiper切换。
          },
        },
        swiperSlider: [1, 2, 3, 4],//定义有几个swiperSlider,也就是有几个轮播图片
        isShowPages:'',//显示的当前页面的标题是否加上背景色
      }
    },
    mounted(){
      //第一次进入页面【全部】标题需要显示背景色
      let urlPath = this.$route.path
      if(urlPath ==='/index'){
        return this.isShowPages ='全部'
      }else if(this.$route.path ==='/index/job'){
        return this.isShowPages ='招聘'
      }else if(this.$route.path ==='/index/good'){
        return this.isShowPages ='精华'
      }else if(this.$route.path ==='/index/plugin'){
        return this.isShowPages ='weex'
      }else if(this.$route.path ==='/index/share'){
        return this.isShowPages ='分享'
      }else if(this.$route.path ==='/index/ask'){
        return this.isShowPages ='问答'
      }

    },
    beforeUpdate(){
      console.log(this.$route.path,'6个列表页的路径path')
      if(this.$route.path ==='/index'){
        return this.isShowPages ='全部'
      }
    },
    computed: {
      //获取vuex中的用户名
      ...mapState(['name']),
      swiper() {// 实例化swiperOption对象，就是swiper在哪里使用
        //固定写法
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      handlerAlert(){
        this.isShowAlert =!this.isShowAlert
      },
      handlerShowBgColor(){
        console.log(this.$route.path,'6个列表页的路径path');
        let urlPath = this.$route.path
        switch (urlPath) {
          case '/index/all':
            return this.isShowPages ='全部'
            break
          case '/index/good':
            return this.isShowPages ='精华'
            break
          case '/index/plugin':
            return this.isShowPages ='weex'
            break
          case '/index/share':
            return this.isShowPages ='分享'
            break
          case '/index/ask':
            return this.isShowPages ='问答'
            break
          case '/index/job':
            return this.isShowPages ='招聘'
            break
        }
      },
    }
  }
</script>

<style>
  .index-container{
    background: #E1E1E1;
    position: relative;
    z-index: 10;
  }
  .index-wrap{
    background: #1C6132;
  }
  .index-top{
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .index-search{
    border:0px;
    outline: none;
    width: 65%;
    height: 30px;
    border-radius: 15px;
    background: #4f9639 url(./images/search.png) no-repeat 4px 4px;
    font-size: 13px;
    font-weight: 400;
    padding-left: 22px;
    margin-top: 8px;
    margin-left: 3px;
  }
  .index-search:hover{
    background: #fff url(./images/search.png) no-repeat 4px 4px;;
    transition: .5s;
  }
  .index-top span{
    color:#fff;
  }
  .warp-login-register{
    line-height: 45px;
  }
  .warp-login-register a{
    color: #fff;
  }
  .index-login,.index-register{
    margin: 0 8px;
  }
  .index-middle{
  width: 100%;
  height: 200px;
  background: #4f9639
  }
  .lunbo{
    width: 100%;
    height: 200px;
  }
  .swiper-wrapper .swiper-slide {
    height: 200px;
    /*background: aquamarine;*/
  }
  .swiper-slide {
    height: 200px;
    /*background: aquamarine;*/
    overflow: hidden;
  }

  .swiper-pagination {
    top: 210px;
    left: 50%;
    margin-left: -16px;
  }
  .swiper-slide img {
    width: 100%;
    height: 200px;
  }
  .swiper-pagination-bullet{
    background: blueviolet;
    opacity: .7;
  }
  .swiper-pagination-bullet-active{
    background: #a9302a;
  }
  /*.mint-item-styles{*/
    /*width:100%;*/
    /*height: 200px;*/
  /*}*/
  /*.mint-item-styles >img{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  /*.mint-swipe-indicator.is-active{*/
    /*background: black;*/
  /*}*/
  /*.mint-swipe-indicator{*/
    /*opacity: .5;*/
    /*background: goldenrod;*/
  /*}*/
  .index-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 20px;
  }
  .index-bottom , .index-bottom span a{
    color: #fff;
    padding:10px 0;
    line-height: 20px;
  }
  .wrap-wechat-img{
    display: flex;
    justify-content: center;
  }
  .wrap-shouzhi{
    color: #1db702;
    text-align: center;
  }
  .shouzhi{
    width: 22px;
    height: 22px;
    vertical-align: middle;
  }
  .wechat-contents,.wrap-shouzhi{
    margin: 0 10px 10px 10px;
    font-size: 14px;
  }
  .list-container{
    background: #F6F6F6;
    margin-top: 20px;
  }
  .list-title{
    width: 100%;
    background: #F6F6F6;
    border-radius: 3px 3px 0 0;
  }
  .list-title ul{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 10px 10px;
  }
  .list-title ul li a{
    color:#369219;
  }
  .list-title ul li span{
    padding: 3px 5px;
  }
  .showBgColor{
    background: #369219;
    color: #FFFFFF;
    padding: 3px 5px;
    border-radius: 5px;
  }

</style>
