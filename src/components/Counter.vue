<template>
  <div class="counter">
    <button class="button" type="button" @click="decrement">-</button>
    <div class="counter-window">{{counter}}</div>
    <button class="button" type="button" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    decrement() {
      return this.counter--;
    },
    increment() {
      return this.counter++;
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  margin-top: 30px;
  display: flex;
  place-items: center;
  .counter-window {
    padding: 0 10px;
  }
}
</style>