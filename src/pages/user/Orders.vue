<template>
  <div class="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1>주문 내역</h1>
        </div>
      </div>
    </section>
    <div class="container my-4">
      <div class="row mt-4">
        <AccountSidebar />
        <div class="table-container mt-4 p-3">
          <table class="table table-striped table-hover">
            <thead class="thead-dark">
              <tr>
                <th>대표상품명</th>
                <th>결제 내역</th>
                <th>결제 금액</th>
                <th>상세</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, idx) in state.form.orders.content" :key="idx">
                <td>
                  <a>{{ order.title }}</a>
                </td>
                <td>{{ order.payment }}</td>
                <td>{{ lib.getNumberFormatted(order.amount) }} 원</td>
                <!-- <td>{{ item.orderItemList }}</td> -->
                <td>
                  <button class="btn btn-primary">상세보기</button>
                </td>
              </tr>
            </tbody>
          </table>
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
import { reactive } from "vue";
import axios from "axios";
import AccountSidebar from "@/components/account/AccountSidebar";
import lib from "@/scripts/lib";

export default {
  name: "Orders",
  components: {
    AccountSidebar,
  },
  setup() {
    const state = reactive({
      form: {
        orders: [],
      },
    });

    const load = () => {
      axios.get(`/api/orders`).then((res) => {
        state.form.orders = res.data;
      });
    };

    load();
    return { state, lib };
  },
};
</script>
        <style scoped>
.table-container {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 효과  */
  overflow: hidden; /* 테이블 라운드 테두리에 맞추어 넘치는 내용을 숨김 */
}
.table {
  margin-bottom: 0; /* 카드의 바닥에 있는 여백 제거 */
}
.button-right {
  float: right;
}
.row.mt-4 {
  display: flex;
  align-items: left;
}

.row.mt-4 > * {
  flex: 1;
}
.row.mt-4 > *:first-child {
  flex-grow: 0.2;
}

.row.mt-4 > *:last-child {
  flex-grow: 0.8;
}

.table th,
.table td {
  text-align: center;
  vertical-align: middle;
}
.table-hover tbody tr:hover {
  background-color: #f5f5f5; /* 마우스 오버 시 행 배경색 변경 */
}
.footer {
  margin-top: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #343a40;
  color: white;
  text-align: center;
}
</style>
        