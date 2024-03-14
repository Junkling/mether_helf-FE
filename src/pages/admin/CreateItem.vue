<template>
  <hr class="my-4" />
  <div class="container">
    <div class="py-5 text-center">
      <h2>상품 등록 폼</h2>
    </div>

    <form>
      <div class="form-group">
        <label for="secondCategoryId" class="form-label"
          >중 카테고리</label
        >
        <select v-model="state.form.secondCategoryId" class="form-select">
          <option
            v-for="(item, index) in state.secondCategoryList"
            :key="index"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <!-- <FormSelect :id= "state.form.secondCategoryId" :list="state.secondCategoryList"/> -->
      </div>

      <div>
        <hr class="my-4" />
        <div class="form-group">
          <label for="name" class="form-label">상품명</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="state.form.name"
          />
        </div>
        <div class="form-group">
          <label for="price" class="form-label">가격</label
          ><input
            type="text"
            class="form-control"
            id="price"
            v-model="state.form.price"
          />
        </div>
        <div class="form-group">
          <label for="discountPer" class="form-label">할인률(%)</label
          ><input
            type="text"
            class="form-control"
            id="discountPer"
            v-model="state.form.discountPer"
          />
        </div>
        <div class="form-group">
          <label for="stock" class="form-label">수량</label
          ><input
            type="text"
            class="form-control"
            id="stock"
            v-model="state.form.stock"
          />
        </div>
        <div class="form-group">
          <label for="content">내용</label>
          <textarea
            class="form-control"
            id="content"
            placeholder="내용을 입력하세요"
            v-model="state.form.content"
          ></textarea>
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
              onclick="location.href = '/murthehelp/admin/items'"
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
// import FormSelect from "@/components/FormSelect";

export default {
  name: "CreateItem",
  components: {
    // FormSelect,
  },
  setup() {
    const state = reactive({
      form: {
        secondCategoryId: 0,
        name: "",
        price: 0,
        discountPer: 0,
        stock: 0,
        content: "",
      },
      secondCategoryList:[],
    });
    const load = () => {
      axios.get(`/api/second-categories/list`).then((res) => {
        state.secondCategoryList = res.data;
      });
    };
    load();
    const create = () => {
      axios.post("/api/admin/items", state.form).then((res) => {
        console.log(res.data);
        window.alert("생성되었습니다.");
      });
      router.push({ path: "/murthehelp/admin/items" });
    };
    return { state, create };
  },
};
</script>

<style scoped>
</style>