<template>
  <div class="brand">
    <div class="brand_head">
      <div class="brand_name">
        <h3>{{ brand_info.brand_official }}</h3>
      </div>
      <div class="brand_icon">
        <img :src="brand_info.brand_logo" alt="icon">
      </div>
      <div class="brand_id">
        <p>@{{ brand_info.brand_name }}</p>
      </div>
      <div class="brand_url">
        <a :href="brand_info.brand_url">{{ brand_info.brand_url }}</a>
      </div>
      <div class="brand_detail">
        <p>{{ brand_info.brand_caption }}</p>
      </div>
      <div class="btn_area">
        <a class="project_btn" href>
          <router-link to="/projectregister">プロジェクト作成</router-link>
        </a>
        <a class="photo_btn" href>
          <router-link to="/imageregister">写真を投稿</router-link>
        </a>
        <a class="edit_btn" href>基本情報編集</a>
      </div>
    </div>
    <div class="project_detail">
      <div class="grid">
        <router-link
          to="/project"
          v-for="grid_item in brand_info.projects"
          class="grid_item"
          :key="grid_item.id"
        >
          <img class="grid_image" :src="grid_item.project_image_path" alt="image">
          <div class="text_area">
            <p class="detail">{{ grid_item.project_name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      brand_info: null
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/brand_page/1.json")
      .then(response => (this.brand_info = response.data));
  }
};
</script>

<style scoped>
.brand {
  margin: 5px;
}

.brand_head {
  margin-top: 60px;
}

.brand_icon {
  margin: 5px auto;
}

.brand_icon img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.btn_area {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
  padding-bottom: 5px;
}

.project_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  grid-column: 1/2;
}

.photo_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  grid-column: 2/3;
}

.edit_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  grid-column: 1/3;
}

.brand_detail {
  margin: 0 auto;
  font-size: 14px;
  /* text-align: left; */
  padding: 15px;
  color: rgb(129, 129, 129);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
}

.grid_item {
  font-size: 12px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border: solid 1px #efefef;
}

.image_area {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid_image {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.grid_title {
  text-align: center;
  font-size: 14px;
  display: block;
}

.detail {
  font-size: 1px;
  display: block;
  /* margin: 10px 0; */
  padding: 5px;
}
</style>

