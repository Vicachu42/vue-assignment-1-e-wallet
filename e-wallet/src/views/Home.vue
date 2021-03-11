<template>
<div class="homeView">
  <h1>E-wallet</h1>
  <Top v-bind:currentCard="currentCard"/>
  <CardStack v-bind:cards="cards"/>
  <button>Add a new card</button>
  </div>
</template>

<script>
import Top from '../components/Top'
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    CardStack
  },
  props: {
    cards: Array,
    currentCard: Object
  }
}
</script>

<style>
h1 {
  font-family: 'Source Sans Pro', sans-serif;
  size: 35px;
  line-height: 35px;
}

.activeCard {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #3a3a3a;
}

/* .topCard {
  height: 241px;
  width: 382px;
  border-radius: 8px;
  padding: 20px;
} */

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card {
  height: 241px;
  width: 382px;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: -180px;
  box-sizing: border-box;
  color: white;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
  display: grid;
  grid-template-columns: 85% 1fr;
  grid-template-rows: 45% 35% 20%
  ;
  grid-template-areas: "cardChip cardLogo"
  "cardNumber cardNumber"
  "cardHolder validThru";
}

.cardChip {
  grid-area: cardChip;
}

.cardLogo {
  grid-area: cardLogo;
}

.cardNumber {
  grid-area: cardNumber;
  font-weight: 400;
  font-size: 30px;
  line-height: 32.48px;
  padding: 0;
}

.cardHolder {
  grid-area: cardHolder;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.16px;
  text-align: left;
}

.validThru {
  grid-area: validThru;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.16px;
  text-align: right;
}

.bitcoin {
  background: linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34;
  color: black;
  justify-self: end;
}

.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 100%), #F33355;
}

.ninja {
  background: linear-gradient(248.3deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #222222;
  color: white;
}

.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9;
}
</style>