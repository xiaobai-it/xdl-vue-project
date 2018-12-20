<template>
  <div class="remove-wrap">
    <!--//显示列表对应的详情页面-->
    <router-view class="list-xiangqing-page"></router-view>
    <div>
      <div v-show="listPageShow"@click="handlerListPageShow">
        <div v-if="pageNumData && pageNumData.length >0">
          <router-link :to="`${getCurrentPagePath}/detail/${item.id}`" v-for="(item,index) in pageNumData" :key="index">
            <div class="all-container" v-if="item.author.avatar_url">
              <div class="left-wrap">
                <img class="left-img" :src="item.author.avatar_url?item.author.avatar_url:'暂无'" alt="">
                <span :class="[item.top || item.good? 'typeBgColor':'title-type']">
              {{isShowTitleType(item.top,item.tab ,item.good)}}
            </span>
              </div>
              <div class="title-wrap">
                <p class="title">{{item.title}}</p>
                <p class="count">{{item.reply_count}}/{{item.visit_count}}</p>
              </div>
              <p class="fabu-times">{{formatTimes(item.create_at)}}</p>
            </div>
          </router-link>
        </div>
        <div v-else-if="parentData && parentData.length >0">
          <router-link :to="`${getCurrentPagePath}/detail/${item.id}`"
                       v-for="(item,index) in parentData" :key="index">
            <div class="all-container"v-if="item.author.avatar_url">
              <div class="left-wrap">
                <div>
                  <img class="left-img" :src="item.author.avatar_url" alt="">
                </div>
                <span :class="[item.top || item.good? 'typeBgColor':'title-type']">
              {{isShowTitleType(item.top,item.tab ,item.good)}}
            </span>
              </div>
              <div class="title-wrap">
                <p class="title">{{item.title}}</p>
                <p class="count">{{item.reply_count}}/{{item.visit_count}}</p>
              </div>
              <p class="fabu-times">{{formatTimes(item.create_at)}}</p>
            </div>
          </router-link>
        </div>
        <div v-else class="show-no-content">无话题</div>
      </div>
      <!--实现分页加载数据的第三方库-->
      <paginate
        v-show="listPageShow"
        v-model="page"
        :page-count="pageCount"
        :page-range="3"
        :margin-pages="3"
        :click-handler="clickPaginate"
        :prev-text="'上一页'"
        :next-text="'下一页'"
        :container-class="'pagination'"
        :page-class="'page-item'">
      </paginate>
    </div>

  </div>
</template>
<script>
  import {formatPingLunTimes, showTitleType} from '../utils/mySelfUtils'
  import {mapState} from 'vuex'
  import Vue from 'vue'
  import Paginate from 'vuejs-paginate'//引用第三方的分页组件
  Vue.component('paginate', Paginate)//注册第三方的分页组件

  export default {
    props: ['parentData', 'getCurrentPagePath', 'dealGetCurrentPagePath'],
    data() {
      return {
        page: 1,//分页器默认显示的页面是第一页
        pageCount: 17//每一页对应的分页器显示的页数的总和，动态显示
      }
    },
    computed: {
      ...mapState(['pageNumData','listPageShow']),//vuex中管理的状态数据分页的数据
    },
    methods: {
      //调用自己写的的工具函数showTitleType（）:根据类型，返回不同的选项
      isShowTitleType(top, tab, good) {
        return showTitleType(top, tab, good)
      },
      //调用自己写的格式化日期的工具函数formatPingLunTimes（）
      formatTimes(create_at) {
        return formatPingLunTimes(create_at)
      },
      //处理分页功能的函数
      clickPaginate(page) {
        //page是函数自带的参数，必须传的，是哪一个页面被触发了
        //把点击的某个页面的值，传入到ajax中，获取对应页面的数据
        console.log('点击的分页器是', page);
        console.log(this.dealGetCurrentPagePath ==='');
        if (this.dealGetCurrentPagePath === '') {
          this.$store.dispatch('clickPaginate', {page: page, tab: 'all'})
        } else {
          this.$store.dispatch('clickPaginate', {page: page, tab: this.dealGetCurrentPagePath})
        }
      },
      //详情页显示的时候，列表页是否隐藏
      handlerListPageShow(){
        this.$store.dispatch('handlerListPageShow')
      }
    }
  }
</script>
<style>
  .pagination {
    margin: 10px;
    display: flex;
    justify-content: space-around;
  }

  .pagination .active {
    background: #00a2d4;
  }
  .pagination li:hover{
    cursor: pointer;
  }
  .pagination li:first-child, .pagination li:last-child, .page-item {
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    padding: 5px;
    font-size: 12px;
    line-height: 20px;
  }

  .pagination li:first-child, .pagination li:last-child {
    width: 60px;
  }

  .all-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #fff;
    border-bottom: 1px solid #eee;
  }

  .left-wrap {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .left-img {
    width: 40px;
    height: 40px;
    margin: 10px 0;
  }

  .title-type, .typeBgColor {
    margin-top: 20px;
    padding: 2px 4px;
    height: 18px;
    border-radius: 3px;
    font-size: 12px;
  }

  .title-type {
    background: #E5E5E5;
    color: #999;
  }

  .typeBgColor {
    background: #369219;
    color: #fff;
  }

  .title-wrap {
    width: 60%;
  }

  .title {
    color: #333;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 30px;
    margin-top: 5px;
  }

  .count {
    font-size: 10px;
    color: #b4b4b4;
  }

  .fabu-times {
    width: 15%;
    margin-top: 20px;
    color: #777;
    font-size: 12px;
  }

  .show-no-content {
    background: #fff;
    text-align: center;
    padding-top: 180px;
    height: 100px;
  }

  .list-xiangqing-page {
    overflow: hidden;
  }
  #app>div {
    height: inherit;
  }
</style>
