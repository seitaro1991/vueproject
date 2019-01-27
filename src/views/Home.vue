<template>
  <div class="container">
    <!-- <div class="modal" :class="{ hide: isHide }" v-on:click="hide()">
      <img :src="modal_img">
      <a class="go_project_btn" href>
        <router-link to="/project">プロジェクトへ</router-link>
      </a>
    </div>-->
    <div class="grid">
      <router-link
        v-for="grid_item in project_feeds"
        class="grid_item"
        :to="'/project/'+ grid_item.project_id "
        :key="grid_item.project_id"
        v-on:click="show($event)"
      >
        <div class="aaa">
          <img class="image_area" :src="grid_item.project_image_path" alt="image">
          <!-- <GridItem v-bind:title="grid_item.title" v-bind:thumbnail="grid_item.thumbnailUrl"></GridItem> -->
          <!-- ↓GridItemに以下の内容が入っている -->
          <div class="text_area">
            <div class="detail">
              <h3>{{ grid_item.project_name }}</h3>
              <p>{{ grid_item.project_image_caption }}</p>
            </div>
            <router-link :to="'/brandpage/'+ grid_item.brand_id" class="brand_icon">
              <img class="image_icon" v-bind:src="grid_item.brand_logo" alt="image_icon">
            </router-link>
          </div>
        </div>
      </router-link>
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
      project_feeds: null
      // modal_img: "",
      // isHide: true
    };
  },
  methods: {
    // hide: function(event) {
    //   this.isHide = true;
    // },
    // show: function(event) {
    //   this.isHide = false;
    //   this.modal_img = event.target.src;
    // }
  },
  mounted() {
    axios
      .get("https://winter-saito-1859.lolipop.io/api/project_feeds")
      .then(response => {
        this.project_feeds = response.data;
        // this.project_feeds = response.data.sort(
        //   (a, b) => b.project_image_id - a.project_image_id
        // );
      });
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
  margin-bottom: 10px;
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
  object-fit: cover;
  border-radius: 5px;
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
  /* display: flex; */
  justify-content: center;
  align-items: center;
}

.modal img {
  width: 90%;
  margin: 40px auto 0;
}

.go_project_btn {
  font-weight: bold;
  border: 2px solid rgb(201, 201, 201);
  border-radius: 5px;
  font-size: 12px;
  display: block;
  margin: 5px auto;
  padding: 5px 0;
  cursor: pointer;
  text-align: center;
  color: #333;
  grid-column: 1/2;
  width: 50%;
  background: #fff;
}

.modal.hide {
  display: none;
}
</style>
