<template>
  <div class="testemonials">
    <div class="all-testemonials">
      <img
        v-for="(testemonial, index) in testemonials"
        :key="index"
        @mouseover="currentTestemonial=testemonial"
        :src="testemonial.avatar"
        :alt="testemonial.surname"
      />
    </div>
    <div class="current-testemonial">
      <img :src="currentTestemonial.avatar" :alt="currentTestemonial.surname" />
      <p>{{currentTestemonial.message}}</p>
      <h3>{{currentTestemonial.name + ' ' + currentTestemonial.surname + '. ' + currentTestemonial.date}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testemonials",
  data() {
    return {
      testemonials: [],
      currentTestemonial: {}
    };
  },

  mounted() {
    fetch("http://localhost:8080/data/testemonials.json")
      .then(response => response.json())
      .then(data => {
        this.testemonials = data.testemonials;
        this.currentTestemonial = data.testemonials[0];
      })
      .catch(errors => console.log(errors));
  }
};
</script>

<style lang="scss" scoped>
.testemonials {
  height: 300px;
  margin-top: 30px;
  display: flex;
  place-items: center;
  .all-testemonials {
    display: flex;
    flex: 2;
    justify-content: space-around;
    img {
      border-radius: 50%;
    }
  }
  .current-testemonial {
    background-color: #c5c5c5;
    height: 100%;
    flex: 1;
    padding: 30px;
    text-align: center;
    img {
      border-radius: 50%;
    }
    h3 {
      padding-top: 20px;
      text-align: right;
      font-weight: bold;
    }
  }
}
</style>
