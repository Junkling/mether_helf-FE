import { createApp } from 'vue';
import router from "@/scripts/router";
import App from './App.vue';
import axios from 'axios';
import store from "@/scripts/store";

axios.interceptors.request.use((config) => {
  config.headers["authorization"] = "Bearer " + sessionStorage.getItem("token");
  return config;
})

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        // status code가 401인 경우 `logout`을 커밋하고 `/login` 페이지로 리다이렉트
        case 401:
          store.commit('logout');
          router.push('/login').catch(() => {});
          window.alert("로그인 후 이용 가능합니다.")
          // 이행되지 않는 Promise를 반환하여 Promise Chaining 끊어주기
          return new Promise(() => {});
          case 403:
          router.push('/').catch(() => {});
          window.alert("잘못된 접근입니다.")
          // 이행되지 않는 Promise를 반환하여 Promise Chaining 끊어주기
          return new Promise(() => {});
        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);


createApp(App).use(store).use(router).mount('#app')
