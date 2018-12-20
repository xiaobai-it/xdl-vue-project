<template>
  <div>
    <ListItemAll :parentData="pageData" :getCurrentPagePath="getCurrentPagePath"
                 :dealGetCurrentPagePath="dealGetCurrentPagePath"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ListItemAll from '../../components/list-item/ListItem'
  export default {
    data() {
      return {
        getCurrentPagePath:'',
        dealGetCurrentPagePath:''
        // filterNewData:[] //把没有头像的用户的数据去掉用，剩余的全部数据
      }
    },
    components:{
      ListItemAll
    },
    mounted(){
      this.getCurrentPagePath = this.$router.history.current.path
      this.dealGetCurrentPagePath = this.getCurrentPagePath.substring(7)
      this.getTabData()//获取对应的主题分类
      console.log(this.getCurrentPagePath,'当前页面的全路径')
      // this.filterReturnNewData()//把没有头像的用户的数据去掉用，剩余的全部数据
    },
    beforeDestroy(){
      console.log('页面销毁之前,把state中的pageNumData数据变成空数组')
      this.$store.getters.changepageNumData
    },
    computed:{
      ...mapState(['pageData']),
    },
    methods:{
      getTabData(){
        this.$store.dispatch('getTabData',{tab:this.dealGetCurrentPagePath})
      },
      //把没有头像的用户的数据去掉用，剩余的全部数据,要不然页面出错，并且控制台出现警告，说tap找不到
     /* filterReturnNewData(){
        setTimeout(()=>{
          this.filterNewData = this.pageData.filter((item)=>{
            if(item.author && item.author.loginname){return item}
          })
        },100)
      }*/

    }
  }
</script>

<style>

</style>
