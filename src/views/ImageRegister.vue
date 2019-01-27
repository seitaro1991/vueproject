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

          <div class="posted_colum">
            <div class="label">
              <label>プロジェクトを選択</label>
            </div>
            <div class="cp_ipselect cp_sl01">
              <select required v-model="projectId">
                <!-- <option value hidden>選択</option> -->
                <option
                  v-for="project in project"
                  :key="project.id"
                  :value="project.project_id"
                >{{ project.project_name }}</option>
              </select>
            </div>
          </div>

          <!-- <p>{{ title }}</p>
          <p>{{ content }}</p>-->
          <div class="create_btn">
            <button type="submit">
              <!-- <router-link to="/brandpage">画像を投稿</router-link> -->
              <p>画像を投稿</p>
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
      uploadedImage: "",
      project: null,
      uploadFile: "",
      tempImageId: null,
      projectId: ""
    };
  },
  // (読み込み時に)実行するメソッド
  methods: {
    postArticle() {
      var article = {
        temp_image_id: this.tempImageId,
        project_image_caption: this.caption,
        project_id: this.projectId
      };

      console.log(article);
      axios
        .post("https://winter-saito-1859.lolipop.io/api/project/image", article)
        .then(response => {
          this.$router.push({ name: "home" });
          // ここにルーティング処理をかく
        })
        .catch(err => {
          console.log(err);
        });
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
    groupByProjectId(baseItems) {
      // もとの配列をソート
      return (
        baseItems
          // .sort((a, b) => a.project_id - b.project_id) 並びは担保されてるので省略
          // もとの配列をフィルタリング(リデュース)
          .reduce((acc, cur, index) => {
            if (index == 0) {
              return [cur];
            } else {
              // もしもプロジェクトIdが前回と違えば、使用。同じであれば除去
              return acc[acc.length - 1].project_id != cur.project_id
                ? [...acc, cur]
                : [...acc];
            }
          }, [])
      );
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
        })
        .catch(function(error) {
          // error 処理
        });
    }
  },
  mounted() {
    axios
      .get(
        "https://winter-saito-1859.lolipop.io/api/project/" +
          this.$route.params.id
      )
      .then(response => (this.project = response.data));
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

.posted_colum {
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
