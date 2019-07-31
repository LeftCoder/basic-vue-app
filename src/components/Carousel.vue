<template>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<script>
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export default {
  name: "Carousel",
  props: {
    autoplay: { default: false }
  },

  mounted() {
    new Flickity (this.$el, {
      autoPlay: this.autoplay,
      wrapAround: true,
      cellAlign: "left", 
      contain: true
    });
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: 30px;
}
</style>
