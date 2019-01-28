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
              <textarea v-model="caption" rows="10" placeholder="内容"></textarea>
            </div>
          </div>
          <div class="project_image">
            <label>プロジェクト画像をアップロード</label>
            <img v-show="uploadedImage" :src="uploadedImage" accept="image/jpeg, image/png">
            <input type="file" v-on:change="onFileChange">
          </div>

          <div class="project_image_caption">
            <!-- <div class="detail">
              <label>画像キャプション入力</label>
            </div>-->
            <div class="detail_write">
              <textarea v-model="image_caption" rows="5" placeholder="画像キャプションを書く"></textarea>
            </div>
          </div>

          <!-- <p>{{ title }}</p>
          <p>{{ content }}</p>-->
          <div class="create_btn">
            <button type="submit">
              <span>プロジェクト作成</span>
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
      caption: "",
      uploadedImage: "",
      image_caption: "",
      tempImageId: null,
      uploadFile: ""
    };
  },
  // (読み込み時に)実行するメソッド
  methods: {
    postArticle() {
      var article = {
        project_name: this.title,
        project_caption: this.caption,
        project_brand_id: this.$route.params.id,
        project_image: [
          {
            temp_image_id: this.tempImageId,
            project_image_caption: this.image_caption
          }
        ]
      };

      console.log(article);
      this.$router.push({ name: "productregister", params: 15 });

      // Axios でプロジェクト作成のAPIへポストする
      // axios
      //   .post("https://winter-saito-1859.lolipop.io/api/project", article)
      //   .then(response => {
      //     // ↑が成功したら、レスポンスの中にあるProjectIdが帰ってくるので、ProjectIdを使用して、Product登録ページにリンク
      //     const projectId = response.data.project_id;
      //     console.log("プロジェクト登録成功");
      //     console.log(projectId);
      //     this.$router.push({ name: "productregister", params: { projectId } });
      //   })
      //   .catch(err => console.log(err));
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      this.uploadFile = files[0];
      this.submitImage();
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitImage() {
      var formData = new FormData();
      console.log("submitImage");
      formData.append("images", this.uploadFile);
      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      axios
        .post(
          "https://winter-saito-1859.lolipop.io/api/image_upload",
          formData,
          config
        )
        .then(response => {
          this.tempImageId = response.data.temp_image_id;
          console.log("画像イメージアップロード完了");
          // response 処理
          console.log(this.tempImageId);
        })
        .catch(function(error) {
          // error 処理
        });
    }
  },
  mounted() {}
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
  font-size: 17px;
  display: block;
  margin-top: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
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
  font-size: 17px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #333;
  width: 95%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
}

.project_image {
  margin: 20px 0 5px;
}

.project_image input {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 17px;
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
  font-size: 17px;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  width: 90%;
  margin: 20px auto;
  background: rgb(201, 201, 201);
}
</style>
