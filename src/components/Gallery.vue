<template>
  <div class="gallery">
    <div class="photo" v-for="slide in slides" :key="slide.id">
      <img :src="slide.url" :alt="slide.source_id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Gallery",
  data() {
    return {
      slides: []
    };
  },

  mounted() {
    axios
      .get("http://www.splashbase.co/api/v1/images/latest")
      .then(response => (this.slides = response.data.images))
      .catch(errors => console.log(errors));
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .photo img {
    width: auto;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
}
</style>
