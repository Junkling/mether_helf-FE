<template>
  <div class="home">
    <div class="black-bg" v-if="modelStatus==true">
    <div class="white-bg">
      <h4> {{model.itemName}} </h4>
      <p> {{ model.detail }} </p>
      <button @click="modelStatus=false"> 닫기 </button>
    </div>
  </div>
    <section class="py-5 text-center container">
      <!-- <CategoryNavVue :firstCategory = "firstCategory"/> -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">대카테고리</a>
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
              <a class="nav-link link-dark" @click="findItems(secondCategories.id)">
                {{ secondCategories.name }}
              </a>
            </li>
          </ul>
        </div>
        <CategorySidebar :secondCategories="secondCategories" />
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item" />
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

export default {
  name: "Home",
  components: {
    Card,
  },
  setup() {
    const state = reactive({
      form: {
        modelStatus: false,
        items: [],
        firstCategoies: [],
        firstCategoryName: "",
        secondCategories: [],
      },
    });
    const load = () => {
      axios.get("/api/first_categories/list/RED").then(({ data }) => {
        state.firstCategories = data;
        changeFirstCategory(data[0]);
      });
    };
    const changeFirstCategory = (category) => {
      state.firstCategoryName = category.name;
      axios
        .get(`/api/second_categories/list/${category.id}`)
        .then(({ data }) => {
          state.secondCategories = data;
        });
    };

    const findItems = (id) => {
      axios.get(`/api/items/list/${id}`).then(({ data }) => {
        state.items = data;
      });
    };

    // axios.get(`/api/second_categories/${this.categoryId}`).then((res) => {
    //   state.secondCategory = res.data;
    // })
    // axios.get("/api/items/list/1").then((res) => {
    //     state.items = res.data;
    // })
    load();
    return { state, changeFirstCategory, findItems };
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
/* .d-flex {
  display: flex;
  flex-wrap: wrap;
  right: 0%;
} */

/* .card-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card-container .col {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}

.category-sidebar {
  flex: 0 0 25%;
  max-width: 25%;
} */
.nav-link {
  display: inline-block;
  margin-right: 15px;
  margin-left: 15px;
}
.mb-1 {
  text-align: left;
}
/* .album {
  display: flex;
} */
</style>