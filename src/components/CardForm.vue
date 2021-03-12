<template>
  <div class="card-form">
    <div class="input-container">
      <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          required
      >
      <label for="name">
        Wpisz nazwę
      </label>
    </div>
    <button
        class="btn-add"
        @click="save()"
    >
      Dodaj
    </button>
  </div>
</template>

<script>
class CardConstructor {
  constructor (data) {
    this.name = data?.name || '';
    this.color = data?.color || this.randomColor();
    this.blocked = data?.blocked || false;
  }

  randomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

export default {
  data () {
    return {
      form: new CardConstructor()
    };
  },
  methods: {
    save () {
      this.$emit('addCard', this.form);
      this.form = new CardConstructor();
    }
  }
};
</script>