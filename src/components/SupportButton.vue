<template>
  <div>
    <a class="button is-warning" @click="$modal.show('contact-support-modal')">Support</a>

    <modal width="100%" height="auto" name="contact-support-modal" :pivotY="1">
      <div>
        <h1>Do you have a question?</h1>

        <form autocomplete="off" @submit.prevent="contactSupport">
          <div class="field">
            <label for="name" class="label">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="input"
              placeholder="What's your name?"
              v-model="form.name"
              required
            />
          </div>
          <div class="field">
            <label for="email" class="label">Your email</label>
            <input
              type="text"
              name="email"
              id="email"
              class="input"
              placeholder="What's your email?"
              v-model="form.email"
              required
            />
          </div>
          <div class="field">
            <label for="question" class="label">Your question</label>
            <textarea
              name="question"
              id="question"
              class="textarea"
              placeholder="Wrtie your question here"
              v-model="form.question"
              required
            ></textarea>
          </div>

          <div class="buttons is-pulled-right">
            <a class="button is-light" @click="closeModal">Cancel</a>
            <button type="submit" :class="classList" :disabled="submitted">Send</button>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import Form from "@/helpers/Form";

export default {
  name: "SupportButton",
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        question: ""
      }),
      submitted: false
    };
  },

  computed: {
    classList() {
      return this.submitted ? "is-loading button is-link" : "button is-link";
    }
  },

  methods: {
    contactSupport() {
      this.submitted = true;
      setTimeout(() => {
        this.closeModal();
      }, 3000);
    },

    closeModal() {
      this.$modal.hide("contact-support-modal");
      this.form.reset();
      this.submitted = false;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 15px;
}

form {
  padding: 30px;
  width: 50%;
  margin: 30px auto;

  .buttons {
    display: flex;
  }
}
</style>
