<template>
  <div class="black-bg" v-if="state.modelStatus == true">
    <div class="white-bg">
      <h4>{{ state.model.nickname }}</h4>
      <p>
        {{ state.model.email }}
      </p>
      <hr />
      <div class="form-group">
        <label for="role" class="form-label">권한</label
        >
        <select v-model="state.model.role" class="form-select">
          <option
            v-for="(item, index) in state.roleList"
            :key="index"
            :value="item.name"
          >
            {{ item.name }}
          </option>
        </select>
        <button class="btn btn-primary" @click="changeRole(state.model.id)">
          권한 수정
        </button>
      </div>
      <button @click="state.modelStatus = false">닫기</button>
    </div>
  </div>

  <div class="home">
    <section class="py-5 text-center container">
      <header class="header text-center">
        <h1>유저 목록</h1>
      </header>
    </section>
    <div class="container my-4">
      <div class="row mt-4">
        <AdminSidebar />
        <div class="table-container mt-4 p-3">
          <form>
            
            <Pagenation :pages = "state.pages" :number = "state.number" :pathInfo = pathInfo />

            
            <div class="d-flex">
              <div class="input-group">
                <input
                  class="form-control"
                  name="nickname"
                  placeholder="닉네임 검색"
                />
                <button class="btn btn-primary lh-1 p-0 px-2">
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>

              <div class="input-group">
                <!-- <input
                  class="form-control"
                  name="role"
                  placeholder="코드명 검색"
                /> -->
                <select class="form-select" name="role">
                  <option value="" selected disabled>코드 검색</option>
                  <option
                    v-for="(item, index) in state.roleList"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <button class="btn btn-primary lh-1 p-0 px-2">
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>
            </div>
          </form>
          <table class="table table-striped table-hover">
            <thead class="thead-dark">
              <tr>
                <th>닉네임</th>
                <th>코드명</th>
                <th>이메일</th>
                <th>상세</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(users, idx) in state.userList" :key="idx">
                <td>
                  <a>{{ users.nickname }}</a>
                </td>
                <td>{{ users.role }}</td>
                <td>{{ users.email }}</td>
                <td>
                  <button class="btn btn-primary" @click="setUser(users.id)">
                    권한 수정
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
import { useRoute } from "vue-router";
import lib from "@/scripts/lib";
import Pagenation from "@/components/Pagenation";

export default {
  name: "AdminUser",
  components: {
    AdminSidebar,
    Pagenation
  },
  setup() {
    const route = useRoute();
    const pathInfo = {
      pathName: "AdminUser",
    };
    const state = reactive({
      form: {
        modelStatus: false,
        model: {},
        userList: [],
        number: 1,
        pages: [],
        role: "",
      },
      roleList: [],
    });
    const load = () => {
      axios
        .get("/api/admin/users", {
          params: {
            nickname: route.query.nickname,
            role: route.query.role,
            page: route.query.page,
          },
        })
        .then(({ data }) => {
          state.userList = data.content;
          state.number = data.number + 1;
          state.pages = lib.getTotalPages(data.totalPages);
        });
      state.model = {};
      
      axios.get(`/api/admin/role`).then((res) => {
        state.roleList = res.data;
      });
    };
    load();

    const setUser = (id) => {
      axios.get(`/api/admin/users/${id}`).then(({ data }) => {
        state.model = data;
      });
      state.modelStatus = true;
    };

    const changeRole = (id) => {
      const dto = {
        roleName: state.model.role,
      };
      axios.put(`/api/admin/users/${id}`, dto).then(({ data }) => {
        console.log(data);
        state.modelStatus = false;
        window.alert("권한을 수정했습니다.");
        router.push({ path: "/murthehelp/admin/users" });
      });
    };
    return { state, setUser, changeRole ,pathInfo};
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
        