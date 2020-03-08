import * as types from './mutation-types';

const mutations = {
    [types.LOGIN](state, data) {
        state.token = 'Bearer ' + data.token;
        localStorage.setItem("jwt", 'Bearer ' + data.token);
        localStorage.setItem("userInfo", JSON.stringify(data));
    },
    // logout: (state) => {
    //     localStorage.clear();
    //     state.token = null;
    // },
    [types.TOKEN]: (state, token) => {
        state.token = token;
    },
    [types.USER_NAME]: (state, user_name) => {
        state.user_name = user_name;
        localStorage.setItem("user_name", state.user_name);
    }
};

export default mutations;
