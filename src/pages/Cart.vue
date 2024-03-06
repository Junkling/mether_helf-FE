<template>
  <div class="col-lg-6 col-md-8 mx-auto">
    <p></p>
  </div>
  <div class="container my-4">
    <h2 class="fw-bold">장바구니</h2>

    <div></div>
    <div class="row mt-4">
      <AccountSidebar />
      <div class="col-11">
        <div>
          <p class="text-center">장바구니에 담긴 상품이 없습니다</p>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex align-items-center mb-3">
          <div class="form-check">
            <input disabled type="checkbox" class="form-check-input" />
            <div class="form-check-label">전체선택 (0/0)</div>
            <span class="ms-auto">선택삭제</span>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>상품금액</div>
          <div>0원</div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>상품할인금액</div>
          <div>0원</div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>배송비</div>
          <div>0원</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>결제예정금액</div>
          <div class="fw-bold">0원</div>
        </div>
        <button class="btn btn-primary w-100" type="button">로그인</button>
      </div>
    </div>
    <div class="col-12 mt-4">
      <ul class="mt-2">
        <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
        <li>[주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
// import axios from 'axios';
import AccountSidebar from "@/components/account/AccountSidebar";

export default {
  name: "Cart",
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
  flex-grow: 0.48;
}

.row.mt-4 > *:last-child {
  flex-grow: 0.5;
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
    