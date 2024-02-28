<template>
  <div class="home">
    <section class="py-5 text-center container">
        <CategoryNavVue/>
        <CategorySidebar/>
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <p></p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <!-- <div class="col" v-for="(item, idx) in state.items" :key="idx">
                <Card :item = "item"/>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import CategoryNavVue from "@/components/CategoryNav";
import CategorySidebar from "@/components/CategorySidebar";
// import Card from "@/components/Card";

export default {
  name: "Home",
  components:{
    CategoryNavVue,CategorySidebar
  }
};
</script>
    <style scoped>
</style>
    