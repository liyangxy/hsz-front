import axios from 'axios';
import QS from 'qs';
import store from '../store';
import {MessageBox, Message, Loading} from 'element-ui';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
    MessageBox.alert(
        msg
    );
}

const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.clear();
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
        default:
            console.log(other);
    }
}

axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.PROTOCOL + "://" + process.env.API_HOST + "/api";

axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("jwt")) {
            // config.headers.Authorization = store.state.token;
            config.headers.Authorization = localStorage.getItem("jwt");
        }
        return config;
    }, err => {
        return Promise.error(err);
});

axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            console.log(response)
            console.log(response.data)
            return response.data;
        } else {
            return Promise.reject(response.data);
        }
    },
    error => {
        const { response } = error;
         if (response) {
             errorHandle(response.status, response.data.message);
             return Promise.reject(response.data);
         } else {
           return Promise.reject(error);
         }
    }
);

export default axios;
