<template>
  <div
      :style="'background-color: ' + card.color"
      class="card"
  >
    <p>
      {{ card.name }}
    </p>
    <p>
      {{ card.blocked ? 'Zablokowane' : 'Odblokowane' }}
    </p>
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
  }
};
</script>
