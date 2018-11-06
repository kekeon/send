const axios = require('axios');



const instance  = axios.create({
    baseUrl: 'htttp:127.0.0.1:3000',
    timeout: 3000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type':'application/x-www-form-urlencoded',
    }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.error("请求request success");

    return config;
}, function (error) {
    // 对请求错误做些什么
    console.error("请求request error");
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.error("请求response success");
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.error("请求response error");
    return Promise.reject(error);
});

export default instance