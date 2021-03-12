<template>
  <div
      :style="'background-color: ' + form.color"
      class="card"
  >
    <input
        :id="form.name + form.index"
        v-model="form.name"
        :name="form.name + form.index"
        type="text"
    >
    <div class="card-checkbox">
      <input
          :id="'blocked' + form.index"
          v-model="form.blocked"
          :name="'blocked' + form.index"
          type="checkbox"
      >
      <label :for="'blocked' + form.index">
        {{ form.blocked ? 'Zablokowano' : 'Odblokowano' }} {{ card.index }}
      </label>
    </div>
    <div
        v-if="changed"
        class="card-buttons"
    >
      <button
          class="btn-add"
          @click="save()"
      >
        Zapisz
      </button>
      <button
          class="btn-cancel"
          @click="cancel()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: { ...this.card }
    };
  },
  computed: {
    changed () {
      return this.form.name !== this.card.name || this.form.blocked !== this.card.blocked;
    }
  },
  watch: {
    card () {
      this.form = { ...this.card };
    }
  },
  methods: {
    save () {
      this.$emit('updateCard', this.form);
    },
    cancel () {
      this.form = { ...this.card };
    }
  }
};
</script>
