<template>
  <div>
    <div class="cards">
      <Card
          v-for="(card, index) in cards"
          :key="index"
          :card="{...card, index}"
          @updateCard="updateCard($event, index)"
      />
    </div>
    <CardForm
        @addCard="addCard($event)"
    />
    <button
        class="btn-add"
        @click="shuffleCards()"
    >
      Przetasuj
    </button>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import CardForm from '@/components/CardForm.vue';

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
  components: {
    Card,
    CardForm
  },
  data () {
    return {
      cards: [
        new CardConstructor({
          name: 'zielony',
          color: '#008000'
        }),
        new CardConstructor({
          name: 'niebieski',
          color: '#587297'
        }),
        new CardConstructor({
          name: 'white',
          color: '#FFFFFF'
        }),
        new CardConstructor({
          name: 'black',
          color: '#000000'
        }),
        new CardConstructor({
          name: 'żółty',
          color: '#f7e431'
        })
      ]
    };
  },
  methods: {
    updateCard (e, index) {
      this.$set(this.cards, index, new CardConstructor(e));
    },
    shuffleCards () {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * this.cards.length);
        const temp = { ...this.cards[i] };

        if (!this.cards[i].blocked && !this.cards[j].blocked) {
          this.$set(this.cards, i, this.cards[j]);
          this.$set(this.cards, j, temp);
        }
      }
    },
    addCard (e) {
      this.cards.push(new CardConstructor(e));
    }
  }
};
</script>
