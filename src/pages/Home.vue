<template>
  <div class="black-bg" v-if="state.modelStatus == true">
    <div class="white-bg">
      <div class="container">
        <h4>{{ state.model.name }}</h4>
        <div>원가</div>
        <small class="price text-muted"
          >{{ lib.getNumberFormatted(Math.ceil(state.model.price)) }}원</small
        >
        <br />
        <div>할인가</div>
        <small class="real text-danger">
          {{
            lib.getNumberFormatted(
              state.model.price -
                Math.ceil((state.model.price * state.model.discountPer) / 100)
            )
          }}
          원
        </small>
        <hr />
        <p class="card-text">
          <span>{{ state.model.content }} </span>
        </p>
        <hr />
        <div class="form-group">
          <label for="cartCount" class="form-label">수량</label
          ><input
            type="text"
            class="form-control"
            id="cartCount"
            v-model="cartCount"
          />
          <button class="btn btn-primary" @click="addToCart(state.model.id , cartCount)">
            장바구니 담기
          </button>
        </div>
        <button
          class="btn btn-secondary btn-lg btn-block"
          @click="state.modelStatus = false"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
  <div class="home">
    <section class="py-5 text-center container">
      <!-- <CategoryNavVue :firstCategory = "firstCategory"/> -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> {{ $route.params.role }}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li
                class="nav-item"
                v-for="(firstCategories, idx) in state.firstCategories"
                :key="idx"
              >
                <a
                  class="nav-link"
                  @click="changeFirstCategory(firstCategories)"
                >
                  {{ firstCategories.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    <div class="container">
      <div class="d-flex">
        <div class="flex-shrink-0 p-3 bg-white" style="width: 280px">
          <a
            class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <svg class="bi me-2" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-5 fw-semibold">{{ state.firstCategoryName }}</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li
              v-for="(secondCategories, idx) in state.secondCategories"
              :key="idx"
              class="mb-1"
            >
              <a
                class="nav-link link-dark"
                @click="findItems(secondCategories.id)"
              >
                {{ secondCategories.name }}
              </a>
            </li>
          </ul>
        </div>
        <CategorySidebar :secondCategories="secondCategories" />
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item" />
            <button
              class="btn btn-secondary btn-lg btn-block"
              @click="setModel(item.id)"
            >
              상세보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import { reactive } from "vue";
import axios from "axios";
import Card from "@/components/item/Card";
import lib from "@/scripts/lib";
import { useRoute } from "vue-router";

export default {
  name: "Home",
  components: {
    Card,
  },
  data(){
    return {
      cartCount: 1,
    }
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      form: {
        modelStatus: false,
        model: {},
        items: [],
        firstCategoies: [],
        firstCategoryName: "",
        secondCategories: [],
      },
    });
    const load = () => {
      axios
        .get(`/api/first-categories`, {
          params: {
            role: route.params.role,
          },
        })
        .then(({ data }) => {
          state.firstCategories = data;
          console.log(state.firstCategoies);
          changeFirstCategory(data[0]);
        });
      state.model = {};
    };

    const changeFirstCategory = (category) => {
      state.firstCategoryName = category.name;
      axios
        .get(`/api/second-categories/list`, {params : {firstCategoryId:category.id}})
        .then(({ data }) => {
          state.secondCategories = data;
        });
      state.items = [];
    };

    load();
    const findItems = (id) => {
      axios.get(`/api/items/list`, {params : {secondCategoryId:id}}).then(({ data }) => {
        state.items = data;
      });
    };
    const setModel = (id) => {
      axios.get(`/api/items/${id}`).then(({ data }) => {
        state.model = data;
      });
      state.modelStatus = true;
    };
    const addToCart = (itemId, cartCount) => {
      const dto = {
        itemId: itemId,
        count: cartCount,
      };
      axios.post(`/api/carts`, dto).then(({ data }) => {
        console.log(data);
        state.modelStatus = false;
        window.alert("장바구니에 담았습니다.");
      });
      state.modelStatus = false;
    };
    return { state, changeFirstCategory, findItems, setModel, lib, addToCart };
  },
};
</script>
    <style scoped>
.navbar-nav {
  display: flex;
  justify-content: center;
}

.nav-item {
  flex: 0 1 auto;
  text-align: center;
}
.nav-link {
  display: inline-block;
  margin-right: 15px;
  margin-left: 15px;
}
.mb-1 {
  text-align: left;
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