<template>
  <section class="py-5 text-center container">
    <h2>
      당신의 코드로 접근해주십시오.
    </h2>
    <hr>
    <div>
      <button type="button" class="btn btn-danger btn-lg btn-block">
        <!-- <router-link to='/items/RED' class="text-black"> RED </router-link> -->
        <router-link class="text-black" :to="{name: 'Home', params :{role: 'RED'}}"> RED </router-link>
        
      </button>
    </div>
    <div>
      <button
        style="background-color: blueviolet"
        type="button"
        class="btn btn-warning btn-lg btn-block"
      >
        <!-- PURPLE -->
        <router-link class="text-black" :to="{name: 'Home', params :{role: 'PURPLE'}}"> PURPLE </router-link>

      </button>
    </div>
    <div>
      <button type="button" class="btn btn-warning btn-lg btn-block">
        <!-- YELLOW -->
        <!-- <router-link to='/items/YELLOW' class="text-black"> YELLOW </router-link> -->
        <router-link class="text-black" :to="{name: 'Home', params :{role: 'YELLOW'}}"> YELLOW </router-link>

      </button>
    </div>
    <div>
      <button type="button" class="btn btn-success btn-lg btn-block">
        <!-- GREEN -->
        <router-link class="text-black" :to="{name: 'Admin'}"> GREEN </router-link>

        <!-- <router-link> GREEN </router-link> -->
      </button>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Index",
  components: {},
  setup() {
    const state = reactive({
      form: {},
    });
    // const load = () => {
    // };
    return { state };
  },
};
</script>

<style>
</style>
