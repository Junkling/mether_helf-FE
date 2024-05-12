<template>
  <div
    v-if="modelStatus_1 == true || modelStatus_2 == true"
    style="
      background-color: white;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    "
  >
    <input
      type="checkbox"
      id="get-real-page-1"
      name="get-real-page-1"
      @click="modelStatus_1 = false"
    />
    <iframe
      src="https://duboo31.github.io/clone-coding-todays-house/"
      style="width: 100%; height: 93%"
    ></iframe>
    <span style="float: right"
      ><input
        type="checkbox"
        id="get-real-page-2"
        name="get-real-page-2"
        @click="modelStatus_2 = false"
    /></span>
  </div>
  <section class="py-5 container">
    <div class="container">
      <h2>MurtheHelp에 오신걸 환영합니다.</h2>
      <br />
      <br />
      <br />
      <h4>
        해당 페이지는 킬러들을 위한 쇼핑몰 입니다. 코드가 부여된 회원만 접근
        가능합니다.
      </h4>
      <h4 style="color: red">(권한 부여 필수)</h4>
      <br />
      <br />
      <br />
      <div class="d-grid gap-2">
        <a class="btn btn-outline-dark" href="/murthehelp/login" role="button">
          <!-- <router-link class="text-black" to="/murthehelp/login"> -->
          로그인
          <!-- </router-link> -->
          <!-- </button> -->
        </a>

        <a class="btn btn-outline-info" href="/murthehelp/signup" role="button">회원 가입 (권한 부여 후 사용 가능)</a>

        <!-- <button type="button" class="btn btn-outline-info">
          <router-link class="text-black" to="/murthehelp/signup">
            회원 가입
          </router-link>
        </button> -->
      </div>
    </div>
  </section>
</template>
      
  <script>
export default {
  name: "Fack",
  components: {},
  data() {
    return {
      modelStatus_1: true,
      modelStatus_2: true,
    };
  },
  methods: {},
};
</script>
      <style scoped>
</style>
      