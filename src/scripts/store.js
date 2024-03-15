// import Vue from vue;
import { createStore } from 'vuex'
// import axios from 'axios'
// import createPersistedState from 'vuex-persistedstate';
// import modules from './modules';



const store = createStore({
    state() {
        return {
            user: {
                token: "",
                isSigned: 0,
                isAdmin: 0
            },
        }
    },
    mutations: {
        setToken(state, payload) {
            state.user.token = payload;
            sessionStorage.setItem("token", payload);
            localStorage.setItem("token", payload);

            // axios.get(`/api/users/check/${payload}`).then((data) => {
            //     sessionStorage.setItem("token", data.token);
            //     // state.user.isAdmin = res.data;
            //     state.user.isAdmin = data.isAdmin;
            //     state.user.isSigned =  data.isSigned
            // });
        },
        logout(state) {
            state.user.token = "";
            state.user.isSigned = 0;
            state.user.isAdmin = 0;
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("isSigned")
            sessionStorage.removeItem("isAdmin")
            localStorage.removeItem("token");
            localStorage.removeItem("isSigned")
            localStorage.removeItem("isAdmin")
        },
        setUser(state, payload) {
            localStorage.setItem("isSigned", payload.isSigned);
            localStorage.setItem("isAdmin", payload.isSigned);
            sessionStorage.setItem("isSigned", payload.isSigned);
            sessionStorage.setItem("isAdmin", payload.isSigned);
            state.user.isSigned = payload.isSigned;
            state.user.isAdmin = payload.isAdmin;
        },
        setLocalUser(state, isAdmin, isSigned){
            state.user.isSigned = isSigned;
            state.user.isAdmin = isAdmin;
        }
    }
}
)

export default store;
export const getters = {
    getToken(state) {
        return state.token;
    }
}