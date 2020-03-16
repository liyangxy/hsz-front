import axios from '@/request/axios';
import qs from 'qs';

const api = {
    login (params) {
        return axios.post('/login', qs.stringify(params));
    },
    loginOut () {
        return axios.get('/loginOut');
    },
    register (params) {
        return axios.post('/register', qs.stringify(params));
    },
    edit (params, user_id) {
        return axios.post(`/edit/${user_id}`, qs.stringify(params));
    },
    show (user_id) {
        return axios.get(`/user/${user_id}`, qs.stringify());
    },
    getBusinessCircles (params) {
        return axios.get('/businessCircles', {params: params});
    },
    getRecycleCategory () {
        return axios.get('/recycleCategory');
    },
    lastRecycleCategory (params) {
        return axios.get('/lastRecycleCategory', {params: params});
    },
    city () {
        return axios.get('/city');
    },
    allRecycleCategory () {
        return axios.get('/allRecycleCategory');
    },
    getBusinessData (params) {
        return axios.get('/businessData', {params: params});
    },
}

export default api;
