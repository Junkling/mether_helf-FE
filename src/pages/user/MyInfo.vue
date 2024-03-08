<template>
    <div class="col-lg-6 col-md-8 mx-auto">
      <p></p>
    </div>
    <div class="container my-4">
      <h2 class="fw-bold">내 정보</h2>
  
      <div></div>
      <div class="row mt-4">
        <AccountSidebar />
        <div class="col-11">
          <div>
            <p class="text-center">유저 닉네임</p>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <ul class="mt-2">
          <li>[내정보] 어쩌고 저쩌고.</li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  import { reactive } from "vue";
  // import axios from 'axios';
  import AccountSidebar from "@/components/account/AccountSidebar";
  
  export default {
    name: "MyInfo",
    components: {
      AccountSidebar,
    },
    setup() {
      const state = reactive({});
      // axios.get(`/api/first_categories/${this.code}`).then((res) => {
      //   state.firstCategory = res.data;
      // }),
      // axios.get(`/api/second_categories/${this.categoryId}`).then((res) => {
      //   state.secondCategory = res.data;
      // })
      // axios.get("/api/items/list/1").then((res) => {
      //     state.items = res.data;
      // })
      return { state };
    },
  };
  </script>
      <style scoped>
  .container {
    margin-top: 4rem;
  }
  
  h2 {
    font-weight: bold;
  }
  
  .row {
    margin-top: 4rem;
  }
  
  .col-12 {
    margin-top: 1rem;
  }
  
  .form-check {
    display: flex;
    align-items: center;
  }
  
  .form-check-input {
    margin-right: 0.5rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .ms-auto {
    margin-left: auto;
  }
  .row.mt-4 {
    display: flex;
    align-items: left;
  }
  
  .row.mt-4 > * {
    flex: 1;
  }
  .row.mt-4 > *:first-child {
    flex-grow: 0.3;
  }
  
  
  .d-flex {
    display: flex;
  }
  
  .justify-content-between {
    justify-content: space-between;
  }
  
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  .btn-primary {
    background-color: blue;
    color: white;
    width: 100%;
  }
  
  .w-100 {
    width: 100%;
  }
  
  ul {
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  .fw-bold {
    font-weight: bold;
  }
  </style>
      