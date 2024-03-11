import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            user: {
                token: "",
            },
        }
    },
    mutations: {
        setToken(state, payload) {
            state.user.token = payload;
            sessionStorage.setItem("token", payload);
            sessionStorage.setItem("isSigned", 1);
        },
        logout(state) {
            state.user.token = "";
            sessionStorage.setItem("token", "");
            sessionStorage.setItem("isSigned", 0)
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