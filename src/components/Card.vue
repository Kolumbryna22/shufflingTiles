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
    <button
        v-if="changed"
        class="btn-add"
        @click="save()"
    >
      Zapisz
    </button>
    <div class="card-checkbox">
      <input
          :id="'blocked' + form.index"
          v-model="form.blocked"
          :name="'blocked' + form.index"
          type="checkbox"
      >
      <label :for="'blocked' + form.index">
        {{ form.blocked ? 'Zablokowano' : 'Odblokowano' }}
      </label>
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
      return this.form.name !== this.card.name;
    }
  },
  methods: {
    save () {
      this.$emit('updateCard', this.form);
    }
  }
};
</script>
