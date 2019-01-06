<template>
  <div class="image_form">
    <div class="image_form_detail">
      <h2 class="title">画像投稿</h2>
      <div>
        <form v-on:submit.prevent="postArticle">
          <div class="project_image">
            <label>画像をアップロード</label>
            <img v-show="uploadedImage" :src="uploadedImage" accept="image/jpeg, image/png">
            <input type="file" v-on:change="onFileChange">
          </div>

          <div class="project_image_caption">
            <div class="detail_write">
              <textarea v-model="caption" rows="5" placeholder="画像キャプションを書く"></textarea>
            </div>
          </div>

          <div class="posted_column">
            <div class="label">
              <label>プロジェクトを選択</label>
            </div>
            <div class="cp_ipselect cp_sl01">
              <select required>
                <option value hidden>選択</option>
                <option
                  value="1"
                >cat最高の製品を作り、環境に与える不必要な悪影響を最小限に抑える。そして、ビジネスを手段として環境危機に警鐘を鳴らし、解決に向けて実行する。</option>
                <option value="2">dog</option>
                <option value="3">rabbit</option>
                <option value="4">squirrel</option>
              </select>
            </div>
          </div>

          <!-- <p>{{ title }}</p>
          <p>{{ content }}</p>-->
          <div class="create_btn">
            <button type="submit">
              <router-link to="/brandpage">画像を投稿</router-link>
            </button>
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
      caption: "",
      uploadedImage: ""
    };
  },
  // (読み込み時に)実行するメソッド
  methods: {
    postArticle() {
      var article = {
        product_caption: this.caption
      };
      var id = 1;
      console.log(article);
      //   axios
      //     .post("/api/image_upload")
      //     .then(res => {
      //       // 遷移する処理
      //       console.log(res.data.title);

      //     })
      //     .catch(err => {});
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
.image_form {
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

.posted_column {
  margin-top: 20px;
}

/* .write select {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  margin: 0 auto;
} */

.cp_ipselect {
  overflow: hidden;
  width: 95%;
  margin: 0 auto;
  text-align: center;
}
.cp_ipselect select {
  width: 100%;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
}
.cp_ipselect select::-ms-expand {
  display: none;
}
.cp_ipselect.cp_sl01 {
  position: relative;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  background: #ffffff;
}
.cp_ipselect.cp_sl01::before {
  position: absolute;
  top: 0.8em;
  right: 0.9em;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #666666;
  pointer-events: none;
}
.cp_ipselect.cp_sl01 select {
  padding: 8px 38px 8px 8px;
  color: #666666;
  font-weight: bold;
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

.project_image {
  margin: 20px 0 5px;
}

.project_image input {
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
  background: rgb(235, 235, 235);
}

.project_image img {
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
  margin: 20px auto;
  background: rgb(201, 201, 201);
}

.create_btn button {
  font-weight: bold;
}
</style>
