<template>
  <div class="project" v-if="project_info">
    <div class="project_detail">
      <router-link :to="'/brandpage/'+ project_info.brand_id ">
        <div class="brand_icon">
          <img :src="project_info.brand_logo" alt="icon">
        </div>
      </router-link>
      <h2 class="project_title">{{ project_info.project_name }}</h2>

      <div class="project_caption" :class="{ close: isClose }">
        <p>{{ project_info.project_caption }}</p>
      </div>
      <button class="caption_continue_btn" v-on:click="more()">{{ isClose ? "Read more" : "Close"}}</button>

      <div class="project_photos_grid">
        <div v-for="grid_item in project_info.project_images" class="grid_item" :key="grid_item.id">
          <img class="grid_image" :src="grid_item.project_image_path" alt="image">
        </div>
      </div>
      <!-- <button class="photo_continue_btn" href>Read more</button> -->
    </div>
    <div class="project_product">
      <div class="product_picture">
        <img :src="project_info.product_image_path" alt="商品写真">
      </div>
      <div class="product_name">
        <h3>{{ project_info.product_name }}</h3>
      </div>
      <div class="product_price">
        <p>¥{{ project_info.product_price }}-</p>
      </div>
      <div class="product_cost">
        <p>製造原価: ¥{{ project_info.product_cost }}-</p>
        <p>size : {{ project_info.product_size }}</p>
      </div>
      <div class="product_caption">
        <p>{{ project_info.product_caption }}</p>
      </div>
      <div class="choice_area">
        <div class="choice" v-for="item in items" :key="item.key">
          <!-- <p>商品代金の10%で</p> -->
          <label>
            <input type="radio" v-model="radio_picked" :value="item.value">
            {{ item.label }}
          </label>
          <!-- <input
          type="radio"
          name="social"
          id="social"
          value="社会貢献団体を応援"
          v-model="picked"
          checked="checked"
        >
        <label for="social">社会貢献団体を応援</label>
        <br>
        <input type="radio" name="support" id="support" value="プロジェクトを応援" v-model="picked">
        <label for="support">このブランドを応援</label>
        <br>
        <input type="radio" name="discount" id="discount" value="商品を割引き" v-model="picked">
        <label for="discount">商品を割引き</label>
          <br>-->
        </div>
      </div>
      <div class="answer">
        <p>商品代金の10%→ {{ radio_picked }}</p>
      </div>
      <div class="buy_btn">
        <router-link to="/payment">購入手続きへ</router-link>
      </div>
      <!-- <a class="edit_btn" href>プロジェクトを編集</a> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  /* 
  見えない状態
  heigt:xxx px;
  overflow:hidden;

  見える状態
  height: auto;
  overflow: visible;
  */
  data() {
    return {
      project_info: null,
      picked: "",
      isClose: true,
      radio_picked: null,
      items: [
        {
          key: 1,
          value: "社会貢献団体を応援",
          label: "社会貢献団体を応援",
          checked: true,
          name: "social"
        },
        {
          key: 2,
          value: "プロジェクトを応援",
          label: "プロジェクトを応援",
          checked: false,
          name: "support"
        },
        {
          key: 3,
          value: "割引き",
          label: "割引き",
          checked: false,
          name: "discount"
        }
      ]
    };
  },
  created() {
    this.radio_picked = this.items.find(item => item.checked).value;
  },
  methods: {
    more: function(event) {
      this.isClose = !this.isClose;
    }
  },
  mounted() {
    axios
      .get(
        "https://winter-saito-1859.lolipop.io/api/project_view/" +
          this.$route.params.id
      )
      .then(response => (this.project_info = response.data));
  }
};
</script>

<style scoped>
.project {
  padding-top: 50px;
  margin: 5px;
}

.brand_icon {
  margin: 10px auto;
}

.brand_icon img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.project_title {
  width: 96%;
  margin: 0 auto;
  font-size: 18px;
}

/* .project_photos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
}

.photo {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border: solid 1px #efefef;
}

.photo img {
  width: 100%;
} */

.project_photos_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
  /* margin-top: 20px; */
}

.grid_item {
  font-size: 12px;
  margin: 0 auto;
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

.photo_continue_btn {
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
  width: 95%;
  margin: 0 auto;
}

.caption_continue_btn {
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
  width: 95%;
  margin: 0 auto;
}

.project_caption {
  padding: 10px;
  font-size: 14px;
  overflow: hidden;
  position: relative;
}

.project_caption.close {
  height: 180px;
}

.project_caption.close:after {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  content: "";
  width: 100%;
  height: 50%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.7) 20%,
    rgba(255, 255, 255, 1) 80%
  );
}

.project_product {
  justify-content: center;
  align-items: center;
}

.product_name {
  font-size: 15px;
  margin: 0 10%;
}

.product_picture {
  margin-top: 20px;
  font-size: 12px;
}

.product_picture img {
  width: 90%;
}

.product_price {
  font-size: 20px;
}

.product_cost {
  margin-top: 10px;
  font-size: 15px;
}

.product_caption {
  margin: 10px;
  font-size: 12px;
}

.choice_area {
  margin-top: 20px;
}

.answer {
  font-weight: bold;
  margin-top: 20px;
}

.buy_btn {
  width: 80%;
  margin: 0 auto 20px;
  font-weight: bold;
  border: 2px solid #434a54;
  border-radius: 5px;
  font-size: 12px;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  background: rgb(253, 188, 66);
  font-size: 15px;
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
  width: 90%;
  margin: 0 auto;
}
</style>

