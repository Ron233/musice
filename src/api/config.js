import axios from "axios";

// axios.defaults.timeout = 5000; //响应时间
// axios.defaults.baseURL = process.env.NODE_ENV === 'production'?'https://c.y.qq.com/v8/fcg-bin':'/api'
axios.defaults.baseURL  = '/api'
/**请求拦截器 */
axios.interceptors.request.use(config=>{
  // 做些什么
  return config
},err=>{
  return Promise.reject(err)
})

/**响应拦截器 */
axios.interceptors.response.use(response => {
  if(response.status===200){
    return response
  }else{
    console.log('请求状态不是200')
  }
  
},err => {
  return Promise.reject(err)
})

/**get方法封装 */
export const fetch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params:data})
    .then(response => resolve(response.data) )
    .catch(error => reject(error))
  })
}

/**封装post方法 */
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
    .then(response => resolve(response))
    .catch(error => reject(error))
  })
}

// 获取时间戳
export const getTime = () => {
  return Date.now()
}