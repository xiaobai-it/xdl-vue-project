<template>
  <div>
    <img src="./images/guide2.jpeg" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
        vuegConfig:{
          disable:false
        }
      }
    }
  }
</script>

<style>
  img{
    width: 100%;
    height: 100%;
  }

</style>
