<template>
  <h1>상품 상세 보기</h1>

  <div class="col-md-12">
    <div class="col-md-6">
      <h2>상품 상세</h2>
      <form>
        <div class="form-group">
          <label for="itemname" class="form-label">상품명</label>
          <input
            type="text"
            class="form-control"
            id="itemname"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="price" class="form-label">가격</label
          ><input type="text" class="form-control" id="price" v-model="price" />
        </div>
        <div class="form-group">
          <label for="discountPer" class="form-label">할인률(%)</label
          ><input
            type="text"
            class="form-control"
            id="discountPer"
            v-model="discountPer"
          />
        </div>
        <div class="form-group">
          <label for="stock" class="form-label">수량</label
          ><input type="text" class="form-control" id="stock" v-model="stock" />
        </div>
        <div class="form-group">
          <label for="content">내용</label>
          <textarea
            class="form-control"
            id="content"
            placeholder="내용을 입력하세요"
            v-model="content"
          ></textarea>
        </div>
        <hr class="my-4" />
        <div class="row">
          <div class="col">
            <button class="w-100 btn btn-primary btn-lg" @click="edit">
              수정하기
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
        <button
          class="w-100 btn btn-danger btn-lg"
          @click="remove()"
          type="button"
        >
          삭제하기
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/scripts/router";

export default {
  name: "ItemDetail",
  data() {
    return {
      id: this.$route.params.itemId,
      name: "",
      price: 0,
      discountPer: 0,
      stock: 0,
      content: "",
    };
  },
  mounted() {
    axios.get(`/api/admin/items/${this.id}`).then((res) => {
      this.name = res.data.name;
      this.price = res.data.price;
      this.discountPer = res.data.discountPer;
      this.stock = res.data.stock;
      this.sellCount = res.data.sellCount;
      this.content = res.data.content;
    });
  },
  setup() {},
  methods: {
    edit() {
      const dto = {
        name: this.name,
        price: this.price,
        discountPer: this.discountPer,
        stock: this.stock,
        content: this.content,
      };
      axios.put(`/api/admin/items/${this.id}`, dto).then((res) => {
        window.alert("수정 완료되었습니다.");
        console.log(res.data);
      });
      router.push({ path: "/murthehelp/admin/items" });
    },
    remove() {
      axios.delete(`/api/admin/items/${this.id}`).then((res) => {
        window.alert("삭제 완료되었습니다.");
        console.log(res.data);
      });
      router.push({ path: "/murthehelp/admin/items" });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

h1 {
  color: #333;
  text-align: center;
  margin-top: 20px;
}

.col-md-6 {
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.comment-box {
  margin-top: 30px;
}

.comment-heading {
  font-weight: bold;
  margin-bottom: 10px;
}

.comment {
  margin-bottom: 20px;
}

.comment .comment-author {
  font-weight: bold;
}

.comment .comment-content {
  margin-top: 5px;
}
</style>