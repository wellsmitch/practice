/**
 * ajax请求配置
 */
import axios from 'axios'
import cookie from '../assets/js/cookie.js'

//import Qs from 'qs'


// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间
// axios.defaults.headers.common['Authorization'] = cookie.cookie.getCookie()
axios.defaults.baseURL = 'http://62.234.180.83:8282/api/v1/';  // 默认地址
// axios.defaults.withCredentials = true

//整理数据
// axios.defaults.transformRequest = function (data) {
//   console.log(data)
// //data = Qs.stringify(data);
//   data = JSON.stringify(data);
//   return data;
// };

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
  config => {
    //config.data = JSON.stringify(config.data);
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    // config.headers['Content-Type'] = 'multipart/form-data';
    //判断是否存在token，如果存在的话，则每个http header都加上token
    if (cookie.cookie.getCookie()) {
      //用户每次操作，都重新设置cookie
      cookie.cookie.setCookie("token",cookie.cookie.getCookie())
      config.headers.token = cookie.cookie.getCookie();
      // console.log('has token')
    } else {
      window.location.href='http://localhost:8080/#/login'
    }
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode=="404") {
      console.log("response.data.resultCode是404")
      // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//      window.location.href='http://login.com'
      return
    }else{
      return response;
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });
export default axios;

/*
*
* axios.get(urlString,
  {
    headers: {
      'Authorization': 'Bearer ' + token,
      "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
      ...
    },
    params: {
      param1: string,
      param2: string
    },
    ...
  }
)
.then(res => fn)
.catch(e => fn)
*
*
*
*
*axios.post(urlString,
  {
    data: data,
    ...
  },
  {
    headers: {
      'Authorization': 'Bearer ' + token,
      "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
      ...
    }
  }
)
.then(res => fn)
.catch(e => fn)
*
*
*
*
* */
