<template>
  <div class="app container">
    <Message></Message>
    <div class="flex">
      <Counter></Counter>
      <SupportButton></SupportButton>
    </div>
    <Gallery></Gallery>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Counter from "@/components/Counter.vue";
import Gallery from "@/components/Gallery.vue";
import SupportButton from "@/components/SupportButton.vue";

export default {
  name: "app",
  components: { Message, Counter, Gallery, SupportButton },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.app {
  margin-top: 30px;

  .flex {
    display: flex;
    place-items: center;
  }
}
</style>
