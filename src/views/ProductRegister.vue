<template>
  <div class="product_form">
    <div class="product_form_detail">
      <h2 class="title">商品登録</h2>
      <div>
        <form action="post">
          <div class="product_name">
            <div class="name">
              <label>商品名</label>
            </div>
            <div class="write">
              <input v-model="name" type="text" name id placeholder="商品名">
            </div>
          </div>

          <div class="product_price">
            <div class="price">
              <label>価格</label>
            </div>
            <div class="write">
              <input v-model="price" type="number" name id placeholder="¥10,000">
            </div>
          </div>

          <div class="product_cost">
            <div class="cost">
              <label>製造原価</label>
            </div>
            <div class="write">
              <input v-model="cost" type="number" name id placeholder="¥3,000">
            </div>
          </div>

          <div class="product_size">
            <div class="size">
              <label>サイズ</label>
            </div>
            <div class="write">
              <input v-model="size" type="text" name id placeholder="S,M,L">
            </div>
          </div>

          <div class="product_stock">
            <div class="stock">
              <label>在庫数</label>
            </div>
            <div class="write">
              <input v-model="cost" type="number" name id placeholder="30">
            </div>
          </div>

          <div class="product_image">
            <label>商品写真をアップロード</label>
            <img v-show="uploadedImage" :src="uploadedImage">
            <input type="file" v-on:change="onFileChange">
          </div>

          <div class="product_detail">
            <div class="detail">
              <label>商品説明</label>
            </div>
            <div class="detail_write">
              <textarea v-model="content" rows="10" placeholder="商品説明"></textarea>
            </div>
          </div>
          <!-- <p>{{ title }}</p>
          <p>{{ content }}</p>-->
          <div class="create_btn">
            <button v-on:click="postArticle">商品を登録</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // メソッドの実行
  // created() {
  // },
  // メソッドで使う&テンプレート内で使う変数を定義
  data() {
    return {
      name: "",
      price: "",
      cost: "",
      size: "",
      stock: "",
      content: "",
      uploadedImage: ""
    };
  },
  // (読み込み時に)実行するメソッド
  methods: {
    postArticle() {
      var article = {
        title: this.name,
        content: this.content
      };
      var id = 1;
      axios.post().then(res => {
        console.log(res.data.name);
        console.log(res.data.price);
        console.log(res.data.cost);
        console.log(res.data.size);
        console.log(res.data.stock);
        console.log(res.data.content);
      });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped>
.product_form {
  padding-top: 50px;
  margin: 5px;
}

.title {
  width: 96%;
  margin: 0 auto;
  font-size: 18px;
}

.product_title {
  margin: 20px 0;
}

.write input {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  width: 95%;
  margin: 0 auto;
}

.product_detail {
  margin: 20px 0;
}

.detail_write textarea {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  width: 95%;
  margin: 0 auto;
}

.product_image {
  margin: 20px 0;
}

.product_image input {
  font-weight: bold;
  /* border: 2px solid rgb(201, 201, 201); */
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  width: 95%;
  margin: 0 auto;
  background: rgb(235, 235, 235);
}

.product_image img {
  margin: 0 auto 20px;
  width: 90%;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  padding: 5px;
  display: block;
}

.create_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  width: 90%;
  margin: 0 auto 20px;
  background: rgb(201, 201, 201);
}
</style>
