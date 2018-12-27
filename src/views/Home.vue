<template>
  <div class="container">
    <div class="modal" :class="{ hide: isHide }" v-on:click="hide()">
      <h3></h3>
      <img :src="modal_img">
    </div>
    <div class="grid">
      <div
        v-for="grid_item in grid"
        class="grid_item"
        :key="grid_item.id"
        v-on:click="show($event)"
      >
        <img class="image_area" :src="grid_item.url" alt="image">
        <!-- <GridItem v-bind:title="grid_item.title" v-bind:thumbnail="grid_item.thumbnailUrl"></GridItem> -->
        <!-- ↓GridItemに以下の内容が入っている -->
        <div class="text_area">
          <div class="detail">
            <h3>{{ grid_item.title }}</h3>
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
// import GridItem from "@/components/GridItem";

export default {
  // name: "container",
  // template: ".container",
  // components: { GridItem },
  data() {
    return {
      grid: null,
      modal_img: "",
      isHide: true
    };
  },
  methods: {
    hide: function(event) {
      this.isHide = true;
    },
    show: function(event) {
      this.isHide = false;
      this.modal_img = event.target.src;
    }
  },
  mounted() {
    axios.get("/api/photo.json").then(response => (this.grid = response.data));
  }
};
</script>


<style scoped>
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
  height: 350px;
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
  margin: 0;
  padding: 5px;
  text-align: left;
}

.detail h3 {
  margin-bottom: 10px;
}

.brand_icon {
  grid-column: 12/13;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

.image_icon {
  height: 40px;
  width: 40px;
}

.imge_icon {
  margin: 0 auto;
}

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal img {
  width: 90%;
  margin: 0 auto;
}

.modal.hide {
  display: none;
}
</style>
