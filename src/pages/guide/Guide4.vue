<template>
  <div>
    <img src="./images/guide4.jpeg" alt="">
    <!--<router-link to="/index" class="btn">开始体验</router-link>-->
    <p class="btn" @click="goToIndex">开始体验</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
        vuegConfig:{disable:true}
      }
    },
    methods:{
      goToIndex(){
        console.log('点击了')
        this.$router.push('/index')
      }
    }
  }
</script>

<style>
  img{
    width: 100%;
    height: 100%;
  }
  .btn{
    position: absolute;
    bottom: 50px;
    left: 50%;
    color: #000;
    width: 100px;
    height: 30px;
    background-color: #e5e5e5;
    opacity: 0.6;
    line-height: 30px;
    font-weight: bold;
    margin-left: -50px;
    border-radius: 10px;
  }
</style>
