<template>
  <div class="home">
    <section class="py-5 text-center container">
      <header class="header text-center">
        <h1>관리자 페이지</h1>
      </header>
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <p></p>
        </div>
      </div>
    </section>
    <div class="container my-4">
      <div class="row mt-4">
        <AccountSidebar />
        <div class="table-container mt-4 p-3">
          <table class="table table-striped table-hover"></table>
        </div>
      </div>
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script>
//   import { reactive } from 'vue';
//   import axios from 'axios';
import AccountSidebar from "@/components/account/AccountSidebar";

export default {
  name: "Account",
  components: {
    AccountSidebar,
  },
};
</script>
      <style scoped>
</style>
      