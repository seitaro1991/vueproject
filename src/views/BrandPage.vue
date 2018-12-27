<template>
  <div class="brand">
    <div class="brand_head">
      <div class="brand_name">
        <h3>Patagonia</h3>
      </div>
      <div class="brand_icon">
        <img
          src="https://cdn-ak.f.st-hatena.com/images/fotolife/S/SikisimaHisayuki/20170905/20170905123623.jpg"
          alt="icon"
        >
      </div>
      <div class="brand_id">
        <p>@patagonia.inc</p>
      </div>
      <div class="brand_url">
        <a href="https://patagonia.com">https://patagonia.com</a>
      </div>
      <div class="brand_detail">
        <p>最高の製品を作り、環境に与える不必要な悪影響を最小限に抑える。そして、ビジネスを手段として環境危機に警鐘を鳴らし、解決に向けて実行する。</p>
      </div>
      <div class="btn_area">
        <a class="project_btn" href>プロジェクト作成</a>
        <a class="photo_btn" href>写真を投稿</a>
        <a class="edit_btn" href>編集</a>
      </div>
    </div>
    <div class="project_detail">
      <div class="grid">
        <div class="grid_item" v-on:click="greet">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/static/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw9e053212/images/content/companyInfo/1105x622_davis_t_1306.jpg"
            alt
          >
          <div class="text_area">
            <p class="detail">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="grid_item" v-on:click="greet">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/static/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw2c59681f/images/sport-pages/f18-snow/yoder-cap-kit.jpg"
            alt
          >
          <div class="text_area">
            <p class="detail">テキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="grid_item" v-on:click="greet">
          <img
            class="grid_image"
            src="https://www.ei-publishing.co.jp/wp/wp-content/uploads/2017/07/20025036/01_SAT.jpg"
            alt
          >
          <div class="text_area">
            <p class="detail">テキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="grid_item" v-on:click="greet">
          <img
            class="grid_image"
            src="https://www.patagonia.jp/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2d90660a/images/hi-res/25921_SMDB.jpg?sw=750&sh=750&sm=fit&sfrm=png"
            alt
          >
          <div class="text_area">
            <p class="detail">テキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => (this.grid = response.data));
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

