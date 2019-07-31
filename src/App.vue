<template>
  <div class="app container">
    <Message></Message>
    <div class="flex">
      <Counter></Counter>
      <SupportButton></SupportButton>
    </div>
    <Testemonials></Testemonials>
    <Carousel>
      <img src="https://placeimg.com/640/480/any" alt="">
      <img src="https://placeimg.com/640/480/any?2" alt="">
      <img src="https://placeimg.com/640/480/any?3" alt="">
      <img src="https://placeimg.com/640/480/any?4" alt="">
      <img src="https://placeimg.com/640/480/any?5" alt="">
    </Carousel>
  </div>
</template>

<script>
import {
  Message,
  Counter,
  Carousel,
  SupportButton,
  Testemonials
} from "@/components";

export default {
  name: "app",
  components: { Message, Counter, Carousel, SupportButton, Testemonials },
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
