import axios from 'axios';
axios.defaults.baseURL = 'https://api.duyiedu.com';
//拦截请求
axios.interceptors.request.use(function (config) {
    //在发送请求之前做些什么？
    // console.log(config);
    config.params = {
        ...config.params,
        appkey: 'liya_1590827235025',
    }
    return config;
}, function (error) {
    //对请求错误做些什么？
    return Promise.reject(error);
});
export default axios;