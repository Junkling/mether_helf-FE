<template>
  <div class="flex-shrink-0 p-3 bg-white" style="width: 280px">
    <a
      href="/"
      class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
    >
      <svg class="bi me-2" width="30" height="24">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-5 fw-semibold">Guns</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li v-for="(secondCategories, idx) in secondCategories"
                :key="idx" class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#home-collapse"
          aria-expanded="true"
        >
          {{ secondCategories.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "CategorySidebar",
  props:{
    secondCategories : Object
  },
  setup() {
    const state = reactive({
    });
    return { state };
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link {
  color: firebrick !important; /* 원하는 색깔의 코드를 여기에 넣으세요. 예) #ff0000 */
}
.mb-1 {
  text-align: left;
}
</style>