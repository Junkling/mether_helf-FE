<template>
  <h1>중카테고리 상세 보기</h1>

  <div class="col-md-12">
    <div class="col-md-6">
      <h2>상세</h2>
      <form>
        <div class="form-group">
          <label for="firstCategoryId" class="form-label"
            >상위 카테고리</label
          >
          <!-- <input type="text" class="form-control" id="firstCategoryId" v-model="firstCategoryId" /> -->
          <select v-model="state.form.firstCategoryId" class="form-select">
            <option value="" selected disabled>
              현재 값 : {{ firstCategoryName }}
            </option>
            <option
              v-for="(item, index) in state.firstCategoryList"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="name" class="form-label">카테고리명</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="state.name"
          />
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
              onclick="location.href = '/murthehelp/admin/second_categories'"
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
import router from "@/scripts/router";
import { reactive } from "vue";

export default {
  name: "SecondCategoryDetail",
  data() {
    return {
      id: this.$route.params.secondCategoryId,
      firstCategoryId: 0,
      firstCategoryName: "",
      name: "",
    };
  },
  mounted() {
    axios.get(`/api/admin/second-categories/${this.id}`).then((res) => {
      this.firstCategoryId = res.data.firstCategory.id;
      this.state.firstCategoryId = res.data.firstCategory.id;
      this.firstCategoryName = res.data.firstCategory.name;
      this.state.firstCategoryName = res.data.firstCategory.name;
      this.name = res.data.name;
      this.state.name = res.data.name;
    });
  },
  setup() {
    const state = reactive({
      form: {
        firstCategoryName: "",
        firstCategoryId: 0,
        firstCategoryList: [],
      },
    });
    const load = () => {
      axios.get(`/api/first-categories`).then((res) => {
        state.firstCategoryList = res.data;
      });
    };
    load();
    return { state };
  },
  methods: {
    edit() {
      const dto = {
        name: this.state.name,
        firstCategoryId: this.state.firstCategoryId,
      };
      axios.put(`/api/admin/second-categories/${this.id}`, dto).then((res) => {
        alert("수정 완료되었습니다.");
        console.log(res.data);
      });
      router.push({ path: "/murthehelp/admin/second_categories" });
    },
    remove() {
      axios.delete(`/api/admin/second-categories/${this.id}`).then((res) => {
        window.alert("삭제 완료되었습니다.");
        console.log(res.data);
      });
      router.push({ path: "/murthehelp/admin/second_categories" });
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