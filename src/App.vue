<template>
  <div class="app container">
    <Message></Message>
    <div class="flex">
      <Counter></Counter>
      <SupportButton></SupportButton>
    </div>
    <Testemonials></Testemonials>
    <Gallery></Gallery>
  </div>
</template>

<script>
import {
  Message,
  Counter,
  Gallery,
  SupportButton,
  Testemonials
} from "@/components";

export default {
  name: "app",
  components: { Message, Counter, Gallery, SupportButton, Testemonials },
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
    align-items: center;
    justify-content: space-between;
  }
}
</style>
