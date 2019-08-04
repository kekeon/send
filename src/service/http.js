import axios from "axios";
let http = axios.create();
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = "/api/v1" + config.url;
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http;
//# sourceMappingURL=http.js.map