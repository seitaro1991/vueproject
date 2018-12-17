<template>
  <div class="project">
    <h2>プロジェクト名</h2>
    <p>プロジェクト説明</p>
  </div>
</template>

<script>
export default {

  data() {
    return {

    };
  },
  methods: {

    }
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => (this.grid = response.data));
  }
};
</script>

<style>
</style>

