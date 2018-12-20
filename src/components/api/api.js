// import axios from 'axios'
//
// export const ajax = (url)=>{
//   return new Promise((resolve,reject)=>{
//     const newUrl = 'https://www.vue-js.com/'+url
//     axios.get(newUrl)
//       .then((response)=>{
//         // console.log(response.data.data);
//         let serverData = response.data.data
//         return resolve(serverData)
//       })
//       .catch((error)=>{
//         return reject(error)
//       })
//   })
//
// }


//封装axios的请求
import axios from 'axios'

// export default function ajax (url , data={} , type='GET') { //第一种暴露方式
export const ajax =(url , data={} , type='GET')=> {//第二种暴露方式

  return new Promise((resolve,reject)=> {
    const newUrl = 'https://www.vue-js.com/' + url
    if (type === 'GET') {
      //data:{username:tom,password:123} ==>最终变成 paramStr: username=tom&password=123
      let paramStr = ''
      //Object.keys(data)：得到的是data={}里面的key的数组，例如：[username，password]
      //data[key]就是得到data={} 中，key对应的值例如username的值是：tom
      Object.keys(data).forEach((key) => {
        paramStr += key + '=' + data[key] + '&'
        console.log(paramStr)
      })
      if (paramStr) {
        // 去掉最后多余的一个&符号
        paramStr = paramStr.substring(0, paramStr.length - 1)
      }
      console.log(newUrl + '?' + paramStr)
      //发送axios的get请求
      axios.get(newUrl + '?' + paramStr)
        .then((response) => {
          // console.log(response.data.data);
          let serverData = response.data.data
          return resolve(serverData)
        })
        .catch((error) => {
          return reject(error)
        })
    } else {
      //发送axios的post请求
      axios.post(newUrl, data)
        .then((response) => {
          // console.log(response.data.data);
          let serverData = response.data.data
          return resolve(serverData)
        })
        .catch((error) => {
          return reject(error)
        })
    }
  })
}
