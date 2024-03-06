<template>
  <div class="home">
    <section class="py-5 text-center container">
      <AccountSidebar />
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <p></p>
        </div>
      </div>
    </section>
  </div>
</template>
      
<script>
//   import { reactive } from 'vue';
//   import axios from 'axios';
import AccountSidebar from "@/components/account/AccountSidebar";

export default {
  name: "Account",
  components: {
    AccountSidebar,
  },
};
</script>
      <style scoped>
</style>
      