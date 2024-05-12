<template>
  <hr class="my-4" />
  <div class="container">
    <div class="py-5 text-center">
      <h2>대 카테고리 등록 폼</h2>
    </div>

    <form>
      <div class="form-group">
        <label for="role" class="form-label">코드</label>
        <select v-model="state.form.role" class="form-select">
          <option
            v-for="(item, index) in state.roleList"
            :key="index"
            :value="item.name"
          >
            {{ item.name }}
          </option>
        </select>
      </div>

      <div>
        <hr class="my-4" />
        <div class="form-group">
          <label for="name" class="form-label">대 카테고리명</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="state.form.name"
          />
        </div>
        <hr class="my-4" />

        <div class="row">
          <div class="col">
            <button class="w-100 btn btn-primary btn-lg" @click="create">
              상품 등록
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
      </div>
    </form>
  </div>
</template>
  <script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/scripts/router";

export default {
  name: "Create1stCategory",
  setup() {
    const state = reactive({
      form: {
        role: "",
        name: "",
      },
      roleList: [],
    });
    const load = () => {
      axios.get(`/api/admin/role`).then((res) => {
        state.roleList = res.data;
      });
    };
    load();
    const create = () => {
      axios.post("/api/admin/first-categories", state.form).then((res) => {
        // alert("생성 완료되었습니다.");
        console.log(res.data);
        window.alert("생성되었습니다.");
      });
      router.push({ path: "/murthehelp/admin/first_categories" });
    };
    return { state, create };
  },
};
</script>
  
  <style scoped>
</style>