<template>
    <div class="reply-container">
      <div class="wrap-reply">
        <div class="reply-count">{{detailId.replies?detailId.replies.length:'0'}} 回复</div>
        <div class="reply-content" v-for="(item,index) in detailId.replies" :key="index">
          <div class="wrap-userAvatar-news">
            <img class="reply-user-avatar" :src="item.author.avatar_url" alt="">
            <span class="userAvatar-news">{{item.author.loginname?item.author.loginname:'XXX'}}</span>
            <span class="userAvatar-news">{{index+1}}楼•{{formatTimes(item.create_at)}}</span>
          </div>
          <!--评论内容-->
          <div v-html="item.content" class="reply-news"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import {formatPingLunTimes} from '../../components/utils/mySelfUtils'
  export default {
    props:['detailId'],//每一个列表项对应的列表id，找到的对应的数据
    data() {
      return {
        htmlContent:''
      }
    },
    methods:{
      //调用自己写的格式化日期的工具函数formatPingLunTimes（）
      formatTimes(create_at){
        return formatPingLunTimes(create_at)
      }
    }
  }
</script>

<style>
  .reply-container{
    margin-top: 20px;
    background: #fff;
  }
  .wrap-reply{
    margin: 5px;
  }
  .reply-count{
    height: 40px;
    line-height: 40px;
    background: #F6F6F6;
  }
  .reply-content{
    border-bottom: 1px solid #eee;
  }
  .wrap-userAvatar-news{
    height: 45px;
    line-height: 45px;
  }
  .reply-user-avatar{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .userAvatar-news{
    color: #00b7ee;
    font-size: 12px;
  }
  .reply-news{
    margin:10px 0;
  }

</style>
