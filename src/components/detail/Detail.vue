<template>
    <div class="detail-container">
      <div class="return-btn" @click="goToBack">
        <img src="../../assets/images/return.png" alt="">
        <p>返回</p>
      </div>
      <div class="wrap-small-title-content">
        <div>
          <h2>
            <span class="show-content-type" v-if="detailId.top">置顶</span>
            <span v-else></span>
            {{detailId.title}}
          </h2>
          <p class="content-miaoshu">
            •发布于 {{formatTimes(detailId.create_at)}}
            •作者 {{detailId.author && detailId.author.loginname ? detailId.author.loginname :'XXX'}}
            •{{detailId.visit_count}} 次浏览
            •来自 {{titleType(detailId.tab)}}
          </p>
        </div>
        <!--markdown文件转成合同html样式的办法-->
        <div id="htmlContent"></div>
        <!--<div v-html="detailId.content"></div>-->
      </div>

      <!--评论信息组件-->
      <Pingluninfo :detailId="detailId"/>
    </div>
</template>
<script>
  import {formatPingLunTimes,showTitleType2} from '../utils/mySelfUtils'
  import {mapState} from 'vuex'
  import showdown from 'showdown';
  import Pingluninfo from '../pinglun-info/Pingluninfo'
  // import './detail.css'
  export default {
    components:{
      Pingluninfo
    },
    data() {
      return {
        htmlContent:'',//后台提供的详情数据，已经把markdown文件转成html样式了
        getDetailId:'',
      }
    },
    computed:{
      ...mapState(['detailId',]),
    },
    mounted(){
      this.getDetailId = this.$route.params.id
      //发送自己写的ajax请求，去vuex中获取对应的详情数据
      this.$store.dispatch('getItemData',this.getDetailId)
      // 处理服务器返回的markdown格式的数据
      this.dealMarkDownData()
    },
    methods:{
      // 处理服务器返回的markdown格式的数据
      dealMarkDownData(){
        //马上加载出不来，直接报警告，所以用了一个200毫秒的延时定时器来处理了
        setTimeout(()=>{
          if(this.detailId){
            // 下面是实现markdown文件转成合同html样式的办法
            let newText = this.detailId.content
            // 初始化markdown转换器：
            let converter = new showdown.Converter();
            // 将markdown语法的字符串转换为HTML字符串：
            //this.htmlContent变量是HTML代码字符串
            //newText是Markdown语法的字符串
            this.htmlContent = converter.makeHtml(newText);
            if(this.htmlContent !=='undefined'){
              // 在前端页面显示：
              document.getElementById('htmlContent').innerHTML = this.htmlContent;
            }else{
            //   // 在前端页面显示：
              document.getElementById('htmlContent').innerHTML = '暂无详情数据';
            }
            // 上面是实现mark down文件转成合同html样式的办法
          }
        },200)
      },
      //返回到列表页
      goToBack(){
        this.$router.back()
        //点击返回按钮的时候，列表页是否隐藏
        this.$store.dispatch('goToBackListPage')
      },
      formatTimes(create_at){
        return formatPingLunTimes(create_at)
      },
      titleType(tab){
        return showTitleType2(tab)
      }
    },
  }
</script>
<style>
  .detail-container{
    background: #F6F6F6;
    position: relative;
    z-index: 10;
    margin: -40px 5px 5px 5px;
  }
  .return-btn{
    height: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #515151;
    line-height: 20px;
    width: 100%;
    font-size: 18px;
    border-bottom: 1px solid #eee;
  }
  .return-btn > img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
  }
  .return-btn > p{
    padding-top: 10px;
    display: inline-block;
    margin-left: -8px;
  }
  .wrap-small-title-content{
    margin-left:5px;
    margin-right:5px;
    background: #fff;
  }
  .show-content-type{
    margin-top: 20px;
    padding: 2px 4px;
    height: 18px;
    border-radius: 3px;
    font-size: 12px;
    background: #369219;
    color: #fff;
  }
  .content-miaoshu{
    font-size: 12px;
    color: #838383;
    margin: 10px 0;
  }
</style>
