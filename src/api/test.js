import axios from '@/request/axios';
import qs from 'qs';

const test = {
    test () {
        return axios.get('/test');
    }
}

export default test;
