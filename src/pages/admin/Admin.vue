<template>
  <div class="home">
    <section class="py-5 text-center container">
      <header class="header text-center">
        <h1>관리자 페이지</h1>
      </header>
    </section>
    <div class="container my-4">
      <div class="row mt-4">
        <AdminSidebar />
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
import { reactive } from "vue";
import AdminSidebar from "@/components/admin/AdminSidebar";
import axios from "axios";

export default {
  name: "Admin",
  components: {
    AdminSidebar,
  },
  setup() {
    const state = reactive({
      form: { users: [] },
    });
    const load = () => {
      axios.get("/api/admin/users").then((data) => {
        state.users = data.content;
      });
    };
    load();
    return { state };
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
            