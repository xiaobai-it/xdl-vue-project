
// export default getters ={
// //
// // }
const getters = {
  //把state状态中的，pageNumData为在页面销毁之前，变成[]
  changepageNumData(state){
    if(state.pageNumData.length>0){
      state.pageNumData = []
      // console.log(state.pageNumData,'面销毁之前pageNumData的值')
    }
  }
}
export default getters
