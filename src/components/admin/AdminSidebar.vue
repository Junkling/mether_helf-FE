<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">관리자 페이지</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        </li>


      <li class="nav-item">
        <router-link to="/admin/users" class="text-black"> 유저 관리 </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/items" class="text-black"> 상품 관리 </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/first_categories" class="text-black"> 대 카테고리 관리 </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/second_categories" class="text-black"> 중 카테고리 관리 </router-link>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
// import router from "@/scripts/router";

export default {
  name: "AdminSidebar",
  setup() {},
};
</script>

<style scoped>
.nav {
  text-align : left
}
.header-search-input {
  width: 20rem;
}

.navbar-menu .is-info:focus {
  outline: none;
  box-shadow: none;
}

.account-header {
  display: block;
  border-bottom: #ddd 1px solid;
  padding-bottom: 0.7rem;
}

.menu-container {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  cursor: pointer;
  text-decoration: none;
}

.menu-card {
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 0.5rem;
  border: 1px #d5d9d9 solid;
}

.menu-card:hover {
  background-color: #edf7f7;
}

.menu-icon {
  margin: 0 2rem;
  padding: 1rem;
  font-size: 3.5rem;
}

.menu-body {
  border-radius: 6px;
  color: #7a7a7a;
  font-size: 1.25em;
  padding: 1em;
  flex-grow: 1;
}

.menu-body .title {
  margin-bottom: 1rem;
}

.title:not(.is-spaced) + .subtitle {
  margin-top: 1rem;
}

.nav-item {
  margin-bottom: 50px; /* 원하시는 간격으로 조절해주세요 */
}
</style>
