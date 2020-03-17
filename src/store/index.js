import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state() {
        return {
            token: null,
            user_name: null,
            login_state: false,
            user_id: null,
        }
    },

    getters: {
        user_name: state => state.user_name,
        token: state => state.token,
        login_state: state => state.login_state,
        user_id: state => state.user_id,
    },

    mutations: {
        user_name: (state, user_name) => {
            state.user_name = user_name
        },
        token: (state, token) => {
            state.token = token
        },
        login_state: (state, status) => {
            state.login_state = status;
        },
        user_id: (state, id) => {
            state.user_id = id
        },
    },

    actions: {
        login ({commit}, data) {
            commit('token', 'Bearer ' + data.access_token);
            commit('user_id', data.id);
            localStorage.setItem("jwt", 'Bearer ' + data.access_token);
            localStorage.setItem("userInfo", JSON.stringify(data));
            localStorage.setItem("login", true);
            commit('login_state', true);
        },
        user_name ({commit}, user_name) {
            commit('user_name', user_name);
        },
        login_out ({commit}) {
            commit('token', null);
            commit('user_name', null);
            commit('login_state', false);
            localStorage.clear();
        }

    }

})

export default store
