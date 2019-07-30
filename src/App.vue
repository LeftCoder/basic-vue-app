<template>
  <div class="app container">
    <Message></Message>
    <Counter></Counter>
    <Gallery></Gallery>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Counter from "@/components/Counter.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "app",
  components: { Message, Counter, Gallery },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.app {
  margin-top: 30px;
}
</style>
