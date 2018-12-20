
/*
 *showTitleType（）显示标题对应的类型的
 * good:true 显示精华 、top:true 显示置顶 、tab：share 显示分享 、tab：ask 显示问答
 * */
export const showTitleType = (top=false,tab='',good=false)=>{
  if(top){
    // this.showBgColor =true
    return '置顶'
  }
  if(good){
    // this.showBgColor =true
    return '精华'
  }
  switch (tab){
    case 'share':
      return '分享'
      break;
    case 'ask':
      return '问答'
      break;
    case 'job':
      return '招聘'
      break;
    case 'dev':
      return '测试'
      break;
  }
}
export const showTitleType2 = (tab='')=>{
  switch (tab){
    case 'share':
      return '分享'
      break;
    case 'ask':
      return '问答'
      break;
    case 'job':
      return '招聘'
      break;
    case 'dev':
      return '测试'
      break;
  }
}
/*
*formatPingLunTimes()处理显示的标题后面的最新评论人的时间
* */
export const formatPingLunTimes = (create_at)=>{
  //获取当前时间
  let currentTimes = Date.parse(new Date())
  //当前时间-用户提交评论的时间，获取时间差
  let time = currentTimes-Date.parse(create_at)
  // 根据时间返回对应的数据
  let minutes = parseInt(time/(1000*60),0) //分钟
  let hour = parseInt(time/(1000*60*60),0) //小时
  let day = parseInt(time/(1000*60*60*24),0) //天
  let mounth = parseInt(day/30,0) //月
  let year = parseInt(mounth/12,0) //年

  if(year){return year+'年前'}
  if(mounth){return mounth+'个月前'}
  if(day){return day+'天前'}
  if(hour){return hour+'小时前'}
  if(minutes){return minutes+'分钟前'}else{return '刚刚'}
}
