<template>
  <div v-if="isShowAlert" >
    <mt-popup v-model="isShowAlert" position="right" @click="handlerChangeAlert">
      <div class="wrap-wechat-img" >
        <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" alt="">
      </div>
      <p class="wrap-shouzhi">亲,微信扫一扫奴家<img src="../../assets/images/shouzhi.png" alt="" class="shouzhi"></p>
      <p class="wechat-contents">
        Vue中文社区 独家公众号，面向前端爱好者， 每日更新最有料的文章，最前沿的资讯,内容包含但不限于Vue,React,Angular,前端工程化...等各种"大保健"知识点,右上角点关注,老司机带你弯道超车,不定期更有各种福利赠送
      </p>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    props:['isShowAlert'],
    data() {
      return {

      }
    },
    methods:{
      handlerChangeAlert(){
        this.$emit('startChangeAlert')
      },
    }
  }
</script>
<style>
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
</style>
