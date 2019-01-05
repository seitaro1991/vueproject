<template>
  <div class="project_form">
    <div class="project_form_detail">
      <h2 class="title">新規プロジェクト作成</h2>
      <div>
        <form v-on:submit.prevent="postArticle">
          <div class="project_title">
            <div class="title">
              <label>プロジェクト名</label>
            </div>
            <div class="title_write">
              <textarea v-model="title" rows="3" placeholder="タイトル"></textarea>
            </div>
          </div>
          <div class="project_detail">
            <div class="detail">
              <label>プロジェクト詳細</label>
            </div>
            <div class="detail_write">
              <textarea v-model="content" rows="20" placeholder="内容"></textarea>
            </div>
          </div>
          <div class="project_image">
            <label>プロジェクト画像をアップロード</label>
            <img v-show="uploadedImage" :src="uploadedImage" accept="image/jpeg, image/png">
            <input type="file" v-on:change="onFileChange">
          </div>
          <!-- <p>{{ title }}</p>
          <p>{{ content }}</p>-->
          <div class="create_btn">
            <button type="submit">
              <router-link to="/productregister">新規作成</router-link>
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
      title: "",
      content: "",
      uploadedImage: ""
    };
  },
  // (読み込み時に)実行するメソッド
  methods: {
    postArticle() {
      var article = {
        project_name: this.title,
        project_caption: this.content
      };
      var id = 1;
      console.log(article);
      // axios.post("/api/project" ,article).then(res => {
      //   console.log(res.data.title);
      //   console.log(res.data.content);
      // });
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
.project_form {
  padding-top: 50px;
  margin: 5px;
}

.title {
  width: 96%;
  margin: 0 auto;
  font-size: 18px;
}

.project_title {
  margin: 20px 0;
}

.title_write textarea {
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

.project_detail {
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
  margin: 20px 0;
}

.project_image input {
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
  margin: 0 auto 20px;
  background: rgb(201, 201, 201);
}
</style>
