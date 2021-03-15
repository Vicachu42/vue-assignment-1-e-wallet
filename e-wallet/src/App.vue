<template>
  <div id="app">
    <router-view v-bind:cards="cards" v-bind:currentCard="currentCard" v-on:switch-card="switchCard" v-on:add-new-card="addNewCard"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cards: [
        { id: 1, vendor: 'Evil Corp', cardNumber: '6720 4519 2443 2976', cardHolder: 'Doc Antle', valid: '02/02'},
        { id: 2, vendor: 'Ninja Bank', cardNumber: '6720 4519 2443 2976', cardHolder: 'Jeff Lowe', valid: '02/02'},
        { id: 3, vendor: 'Block Chain', cardNumber: '6720 4519 2443 2976', cardHolder: 'Carol Baskin', valid: '02/02'},
        { id: 4, vendor: 'Bitcoin', cardNumber: '6720 4519 2443 2976', cardHolder: 'John Finlay', valid: '02/02'}
      ],
      currentCard: { id: 0, vendor: 'Bitcoin', cardNumber: '6720 4519 2443 2976', cardHolder: 'Joe Exotic', valid: '02/02'}
    }
  },
  methods: {
    switchCard(id) {
      const newCurrentCard = this.cards.find(card => card.id === id);
      console.log(newCurrentCard);
      const lastCurrentCard = this.currentCard;
      this.currentCard = newCurrentCard;
      this.cards.push(lastCurrentCard);
      const index = this.cards.findIndex(card => card.id === id);
      console.log(index);
      this.cards.splice(index, 1);
    },
    addNewCard: function(newCard) {
      this.cards.push(newCard);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600;700&display=swap');

body {
  width: 414px;
  height: 100%;
  box-sizing: border-box;
}

#app {
  font-family: 'PT Mono', monospace;
  text-align: center;
  color: black;
  text-transform: uppercase;
  margin-top: 40px;
}
</style>