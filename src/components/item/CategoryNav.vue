<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">코드</a>
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
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">RED</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PURPLE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">YELLOW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">규정</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "CategoryNav",
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
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


</style>