<template>
  <div class="black-bg" v-if="state.modelStatus == true">
    <div class="white-bg">
      <h4>{{ state.model.title }}</h4>
      <hr />
      <span class="model-span"> 결제 계좌 </span>
      <p>
        {{ state.model.payment }}
      </p>
      <div>
        <span class="model-span"> 배송지 </span>
        <p>
          {{ state.modelDelivery.address }}
        </p>
        <span class="model-span">배송 상태</span>
        <p>
          {{ state.modelDelivery.statusName }}
        </p>
      </div>
      <span class="model-span"> 결제 총액 </span>
      <p>{{ lib.getNumberFormatted(state.model.amount) }} 원</p>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>상품명</th>
            <th>원가</th>
            <th>구매 수</th>
            <th>총액</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, idx) in state.model.orderItemList" :key="idx">
            <td>
              <a>{{ items.itemName }}</a>
            </td>
            <td>{{ lib.getNumberFormatted(items.itemPrice) }} 원</td>
            <td>{{ items.count }}</td>
            <td>{{ lib.getNumberFormatted(items.amount) }} 원</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <button @click="state.modelStatus = false">닫기</button>
    </div>
  </div>

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
          <Pagenation
            :pages="state.pages"
            :number="state.number"
            :pathInfo="pathInfo"
          />

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
                <td>
                  <button class="btn btn-primary" @click="setOrder(order.id)">
                    상세보기
                  </button>
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
import Pagenation from "@/components/Pagenation";
import { useRoute } from "vue-router";

export default {
  name: "Orders",
  components: {
    AccountSidebar,
    Pagenation

  },
  setup() {
    const route = useRoute();

    const pathInfo = {
      pathName: "Orders",
    };
    const state = reactive({
      form: {
        modelStatus: false,
        orders: [],
        model: {},
        modelDelivery: {},
        number: 1,
        pages: [],
      },
    });

    const load = () => {
      axios.get(`/api/orders`,{params:{page: route.query.page,}}).then((res) => {
        state.form.orders = res.data;
        state.number = res.data.number + 1;
        state.pages = lib.getTotalPages(res.data.totalPages);
      });
      state.model = {};
      state.modelDelivery = {};
    };

    load();
    const setOrder = (id) => {
      axios.get(`/api/orders/${id}`).then(({ data }) => {
        state.model = data;
        state.modelDelivery = data.delivery;
        
      });
      state.modelStatus = true;
    };

    return { state, lib, setOrder ,pathInfo};
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
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  z-index: 9999;
  box-sizing: border-box;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.model-span {
  font-weight: bold;
}
</style>
        