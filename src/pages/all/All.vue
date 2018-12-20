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
      }
    },
    components:{
      ListItemAll
    },
    mounted(){
      //发送异步请求获取数据
      //用vuex来管理状态数据data
      this.getCurrentPagePath = this.$router.history.current.path
      this.dealGetCurrentPagePath = this.getCurrentPagePath.substring(7)
      this.getTabData()//获取对应的主题分类
      console.log(this.getCurrentPagePath,'当前页面的全路径')
      console.log(this.dealGetCurrentPagePath,'当前页面的处理后的路径')
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
      }
    }
  }
</script>

<style>
</style>
