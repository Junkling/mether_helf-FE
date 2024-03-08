<template>
  <div class="home">
    <section class="py-5 text-center container">
      <header class="header text-center">
        <h1>상품 목록</h1>
      </header>
      <div class="button-right">
        <button
          class="btn btn-primary"
          onclick="location.href = '/admin/items/add'"
        >
          <a class="nav-link link-dark"> 생성 </a>
        </button>
      </div>
    </section>

    <div class="container my-4">
      <div class="row mt-4">
        <AdminSidebar />
        <div class="table-container mt-4 p-3">
          <form>
            <div class="d-flex">
              <div class="input-group">
                <input
                  class="form-control"
                  name="itemName"
                  placeholder="상품명 검색"
                />
                <button class="btn btn-primary lh-1 p-0 px-2">
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>

              <div class="input-group">
                <input
                  class="form-control"
                  name="secondCategoryId"
                  placeholder="중 카테고리로 검색"
                />
                <button class="btn btn-primary lh-1 p-0 px-2">
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>
            </div>
          </form>

          <table class="table table-striped table-hover">
            <thead class="thead-dark">
              <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>할인율</th>
                <th>상세</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in state.itemList" :key="idx">
                <td>
                  <a>{{ item.name }}</a>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.discountPer }}</td>
                <td>
                  <button class="btn btn-primary" @click="showDetail(item.id)">
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
import AdminSidebar from "@/components/admin/AdminSidebar";
import router from "@/scripts/router";

export default {
  name: "AdminItem",
  components: {
    AdminSidebar,
  },
  setup() {
    const state = reactive({
      form: {
        modelStatus: false,
        model: {},
        itemList: [],
      },
    });
    const load = () => {
      axios.get("/api/items/admin/list/2").then(({ data }) => {
        state.itemList = data;
      });
    };
    const showDetail = (id) => {
      router.push({ path: `/admin/item/${id}` });
    };
    const toCreate = () => {
      router.push({ path: `/admin/item/add` });
    };
    load();
    return { state, showDetail, toCreate };
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
.btn-primary,
.btn-info,
.btn-success,
.btn-secondary {
  margin: 5px;
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
</style>
          