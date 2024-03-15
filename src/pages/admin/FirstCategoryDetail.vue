<template>
  <h1>대카테고리 상세 보기</h1>

  <div class="col-md-12">
    <div class="col-md-6">
      <h2>상세</h2>
      <form>
        <div class="form-group">
          <label for="role" class="form-label">코드명</label>
          <!-- <input type="text" class="form-control" id="role" v-model="role" /> -->
          <select v-model="state.role" class="form-select">
            <option
              v-for="(item, index) in state.roleList"
              :key="index"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="name" class="form-label">카테고리명</label>
          <input type="text" class="form-control" id="name" v-model="name" />
        </div>
        <hr class="my-4" />
        <div class="row">
          <div class="col">
            <button class="w-100 btn btn-primary btn-lg" @click="edit">
              수정하기
            </button>
          </div>
          <div class="col">
            <button
              class="w-100 btn btn-secondary btn-lg"
              onclick="location.href = '/murthehelp/admin/first_categories'"
              type="button"
            >
              취소
            </button>
          </div>
        </div>
        <button
          class="w-100 btn btn-danger btn-lg"
          @click="remove()"
          type="button"
        >
          삭제하기
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { reactive } from "vue";
import router from "@/scripts/router";

export default {
  name: "FirstCategoryDetail",
  data() {
    return {
      id: this.$route.params.firstCategoryId,
      role: "",
      name: "",
    };
  },
  mounted() {
    axios.get(`/api/first-categories/${this.id}`).then((res) => {
      this.name = res.data.name;
      this.role = res.data.role;
      this.state.role = res.data.role;
    });
  },
  setup() {
    const state = reactive({
      form: {
        role: "",
        roleList: [],
      },
    });
    const load = () => {
      axios.get(`/api/admin/role`).then((res) => {
        state.roleList = res.data;
      });
    };
    load();
    return { state };
  },
  methods: {
    edit() {
      const dto = {
        name: this.name,
        role: this.state.role,
      };
      axios.put(`/api/admin/first-categories/${this.id}`, dto).then((res) => {
        console.log(res.data);
        window.alert("수정 완료되었습니다.");
      });
      router.push({ path: "/murthehelp/admin/first_categories" });
    },
    remove() {
      axios.delete(`/api/admin/first-categories/${this.id}`).then((res) => {
        window.alert("삭제 완료되었습니다.");
        console.log(res.data);
      });
      router.push({ path: "/murthehelp/admin/first_categories" });
    },
  },
};
</script>
  
  <style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

h1 {
  color: #333;
  text-align: center;
  margin-top: 20px;
}

.col-md-6 {
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.comment-box {
  margin-top: 30px;
}

.comment-heading {
  font-weight: bold;
  margin-bottom: 10px;
}

.comment {
  margin-bottom: 20px;
}

.comment .comment-author {
  font-weight: bold;
}

.comment .comment-content {
  margin-top: 5px;
}
</style>