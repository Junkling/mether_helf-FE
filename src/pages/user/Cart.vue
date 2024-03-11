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
        <div class="cart">
          <ul>
            <li v-for="(cart, idx) in state.form.carts" :key="idx">
              <h4 class="name">{{ cart.item.name }}</h4>
              <div>
                <img :src="cart.item.imgPath" />
                <span class="undiscounted"
                  >상품 금액:
                  {{ lib.getNumberFormatted(cart.item.price * cart.count) }}
                  원</span
                >

                <span class="price"
                  >할인가 :
                  {{
                    lib.getNumberFormatted(
                      (cart.item.price -
                        Math.ceil(
                          (cart.item.price * cart.item.discountPer) / 100
                        )) *
                        cart.count
                    )
                  }}원</span
                >
                <div>
                  <label for="count" class="form-label">수량</label>
                  <div class="update-count">
                    <input
                      type="text"
                      class="form-control"
                      id="count"
                      v-model="cart.count"
                    />
                    <button type="button" class="btn btn-success" @click="updateCount(cart.id , cart.count)">수정</button>
                  </div>
                </div>
              </div>
              <button
                style="float: right"
                class="fa fa-trash"
                @click="remove(cart.id)"
              ></button>
            </li>
          </ul>
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
          <div>상품 금액</div>
          <div>
            {{ lib.getNumberFormatted(totalPrice()) }}
            원
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>상품할인금액</div>
          <div>
            - {{ lib.getNumberFormatted(totalDiscount()) }}
            원
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div>배송비</div>
          <div>{{ lib.getNumberFormatted(state.form.delivery) }}원</div>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <div>결제예정금액</div>
          <div>
            {{ lib.getNumberFormatted(totalResult()) }}
            원
          </div>
        </div>

        <hr class="my-4" />
        <div class="form-group">
          <label for="address" class="form-label">주소</label>
          <input
            type="text"
            class="form-control"
            id="address"
            v-model="state.form.address"
          />
        </div>
        <div class="form-group">
          <label for="payment" class="form-label">카드번호</label
          ><input
            type="text"
            class="form-control"
            id="payment"
            v-model="state.form.payment"
          />
        </div>

        <button class="btn btn-primary w-100" type="button" @click="createOrder">구매하기</button>
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
import axios from "axios";
import AccountSidebar from "@/components/account/AccountSidebar";
import lib from "@/scripts/lib";
import router from "@/scripts/router";

export default {
  name: "Cart",
  components: {
    AccountSidebar,
  },
  setup() {

    const state = reactive({
      form: {
        carts: [],
        delivery: 2500,
        totalPrice: 0,
        address : "",
        payment : "",

      },
    });

    const load = () => {
      axios.get("/api/carts").then((res) => {
        state.form.carts = res.data;
      });
    };
    load();

    const updateCount=(id,count)=>{
      const dto = {
        count:count
      }
      axios.put(`/api/carts/${id}`,dto).then((res) => {
        console.log(res.data)
      });
      router.push({path:'/cart'});
    };
    
    //주문 생성 메서드
    const createOrder=()=>{
      const dto = {
        cartId : state.form.carts.map(c => c.id),
        address : state.form.address,
        payment : state.form.payment,
        statusId : 1
      }
      axios.post(`/api/orders`,dto).then((res) => {
        console.log(res.data)
      });
      router.push({path:'/orders'});
    };
    

    const totalPrice = () => {
      return state.form.carts
        .map((c) => c.item.price * c.count)
        .reduce((prev, curr) => prev + curr, 0);
    };

    const totalDiscount = () => {
      return state.form.carts
        .map(
          (c) => Math.ceil((c.item.price * c.item.discountPer) / 100) * c.count
        )
        .reduce((prev, curr) => prev + curr, 0);
    };

    const totalResult = () => {
      return (
        state.form.carts
          .map(
            (c) =>
              (c.item.price -
                Math.ceil((c.item.price * c.item.discountPer) / 100)) *
              c.count
          )
          .reduce((prev, curr) => prev + curr, 0) + 2500
      );
    };
    const remove =(id)=>{
      axios.delete(`/api/carts/${id}`).then((res)=>{
        console.log(res.data);
        window.alert("장바구니에서 삭제되었습니다.");
        router.push({path:'/cart'});
      })
    }

    return { state, lib, totalPrice, totalDiscount, totalResult ,updateCount,createOrder,remove};
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

.col-15 {
  margin-top: 1rem;
  display: flex;
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

.update-count {
  display: flex;
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

.btn-success {
  background-color: rgb(26, 200, 136);
  color: white;
  height: 1px;
  width: 10%;
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
.cart {
  flex-direction: row;
  flex-wrap: nowrap;
}
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}
.cart ul li img {
  width: 150px;
  height: 150px;
}
.cart ul li .name {
  margin-left: 25px;
}
.cart ul li .price {
  margin-left: 25px;
  color: red;
}
.cart ul li i {
  font-size: 20px;
  margin-top: 65px;
  margin-right: 50px;
  float: right;
}
.cart .btn {
  font-size: 20px;
  padding: 30px 50px;
  display: block;
  margin: 0 auto;
}
</style>
    