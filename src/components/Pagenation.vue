<template>
  <ul class="pagination">
    <li
      v-for="(page, idx) in pages"
      :key="idx"
      class="page-item"
      name="page"
      :class="page == number ? 'active' : ''"
    >
      <a class="page-link">
        <router-link
          name="page"
          class="text-black"
          :to="{
            name: pathInfo.pathName,
            query: {
              ...$route.query,
              page: page - 1,
            },
          }"
        >
          {{ page }}
        </router-link>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagenamtion",
  props: { pages: [], number: Number, pathInfo: Object },
  setup() {},
};
</script>

<style></style>

