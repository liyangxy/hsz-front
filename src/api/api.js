import axios from '@/request/axios';
import qs from 'qs';

const api = {
    login (params) {
        return axios.post('/login', qs.stringify(params));
    },
    loginOut () {
        return axios.post('/loginOut');
    },
    register (params) {
        return axios.post('/register', qs.stringify(params));
    },
    edit (params) {
        return axios.post('/edit', qs.stringify(params));
    },
}

export default api;
