<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/items">Items</router-link>
    </div>-->
    <header>
      <router-link to="/" class="title_img">
        <img src="./assets/title.jpg" alt="title" style="height: 100%;">
      </router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

a {
  color: #333;
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

input.searchBox {
  border: solid 1px #e7e7e7;
  background: none;
  width: 100%;
  height: 100%; /*検索ボックスの高さ*/
  padding: 0 10px; /*テキスト位置調整*/
  border-radius: 0; /*検索ボックスの角を丸める*/
  background: #efefef; /*検索ボックスの背景カラー*/
  border-radius: 6px;
  outline: 0; /*クリック時の青い枠線消す*/
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  /* display: grid;
  grid-template-columns: repeat(12, 1fr); */
  height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 24;
  width: 100%;
  border-bottom: solid 1px #efefef;
  justify-content: center;
  align-items: center;
}

.title_img {
  /* grid-column: 1/5;
  grid-row: 1/2; */
  max-width: 100%;
  max-height: 100%;
}

.story_img {
  /* grid-column: 8/9;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto; */
  grid-column: 10/11;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}

.wear_img {
  /* grid-column: 10/11;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto; */
  grid-column: 12/13;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}

/* .login_img {
  grid-column: 12/13;
  grid-row: 1/2;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
} */

button {
  font-weight: bold;
  font-size: 18px;
}

form {
  font-size: 17px;
}

option {
  font-size: 17px;
}

select {
  font-size: 17px;
}
</style>
