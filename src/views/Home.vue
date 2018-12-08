<template>
  <div class="container">
    <div class="grid">
      <div v-for="grid_item in grid" class="grid_item">
        <img class="image_area" v-bind:src="grid_item.url" alt="image">
        <div class="text_area">
          <div class="detail">
            <p>{{ grid_item.title }}</p>
          </div>
          <div class="brand_icon">
            <img class="image_icon" v-bind:src="grid_item.thumbnailUrl" alt="image_icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: ".container",
  data() {
    return {
      grid: null
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => (this.grid = response.data));
  }
};
</script>

<style>
.grid {
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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
  display: block;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.text_area {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
}

.detail {
  grid-column: 1/12;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 10px 0;
  padding: 5px;
  text-align: left;
}

.brand_icon {
  grid-column: 12/13;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 30px;
}

.image_icon {
  height: 30px;
  width: 30px;
}

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal img {
  width: 90%;
  margin: auto;
}

.modal.hide {
  display: none;
}
</style>
