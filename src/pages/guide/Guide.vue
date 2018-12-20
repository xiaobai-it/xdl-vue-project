<template>
    <div class="guide">
      <!-- 引导页会显示在这个嵌套路由中 -->
      <router-view class="view"></router-view>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</script>

<style>
  .guide{
    height: 100%;
  }
  .view {
    height: 100%;
    text-align: center;
    color: #fff;
  }
</style>
