import { createStore } from 'vuex'
// import axios from 'axios'

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
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("isSigned")
            sessionStorage.removeItem("isAdmin")
        },
        setUser(state, payload) {
            state.user.isSigned = payload.isSigned;
            state.user.isAdmin = payload.isAdmin;
            sessionStorage.setItem("isSigned", payload);
            sessionStorage.setItem("isAdmin", payload);

        },
    }
}
)

export default store;
export const getters = {
    getToken(state) {
        return state.token;
    }
}