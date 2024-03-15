<template>
  <header data-bs-theme="dark">
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 offset-md-0 py-4">
            <h4 class="text-white">사이트맵</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/murthehelp" class="text-white">
                  메인 화면</router-link
                >
              </li>
              <!-- <li v-if="$store.state.account.id"> -->
              <li>
                <router-link
                  to="/murthehelp/account"
                  class="text-white"
                  v-if="$store.state.user.isSigned"
                  >
                  <!-- v-if="isSigned" -->
                  마이 페이지</router-link
                >
              </li>
              <li>
                <router-link
                  to="/murthehelp/admin"
                  class="text-white"
                  v-if="$store.state.user.isAdmin"
                  >
                  <!-- v-if="isAdmin" -->
                  관리자 페이지</router-link
                >
              </li>

              <!-- <li v-if="$store.state.account.role==='seller'">
                  <router-link to="/produce" class="text-white"> 상품 등록하기</router-link>                
                </li> -->

              <li>
                <router-link
                  to="/murthehelp/login"
                  class="text-white"
                  v-if="!$store.state.user.isSigned"
                  >
                  <!-- v-if="!isSigned" -->
                  로그인</router-link
                >
                <router-link
                  to="/murthehelp/login"
                  class="text-white"
                  @click="logout()"
                  v-else
                  >로그아웃</router-link
                >
              </li>
              <!-- <li v-if="!$store.state.account.id"> -->
              <li>
                <router-link
                  to="/murthehelp/signup"
                  class="text-white"
                  v-if="!$store.state.user.isSigned"
                  >
                  <!-- v-if="!isSigned" -->
                  회원가입</router-link
                >
              </li>
            </ul>
            <ul class="list-unstyled">
              <!-- <li v-if="$store.state.account.role==='seller'">
                  <router-link to="/dashboard" class="text-white"> 판매자 페이지</router-link>                
                </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link
          to="/murthehelp"
          class="navbar-brand d-flex align-items-center"
        >
          <strong>MurtheHelp</strong>
        </router-link>
        <router-link to="/murthehelp/cart" class="cart btn">
          <i class="fa fa-shopping-cart"></i>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>
  
  <script>
import store from "@/scripts/store";
export default {
  name: "Header",
  data(){
    return{
      isSigned : localStorage.getItem("isSigned") ?? false,
      isAdmin : localStorage.getItem("isAdmin") ?? false
    }
  },
  setup() {
    const logout = () => {
      // axios.post("api/users/logout").then(()=>{
      store.commit("logout");
      // sessionStorage.removeItem("token");
      // router.push({ path: "/murthehelp/login" });
      // });
    };
    return { logout };
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
header ul li a {
  cursor: pointer;
}
header .navbar .cart {
  margin-left: auto;
  color: floralwhite;
}
</style>
  