<template>
  <div>
    <article class="card" v-bind:class="vendorClass">
      <img v-if="card.vendor == 'Bitcoin' " src="@/assets/vendor-bitcoin.svg" alt="Bitcoin">
      <img v-if="card.vendor == 'Evil Corp' " src="@/assets/vendor-evil.svg" alt="Evil Corp">
      <img v-if="card.vendor == 'Ninja Bank' " src="@/assets/vendor-ninja.svg" alt="Ninja Bank">
      <img v-if="card.vendor == 'Block Chain' " src="@/assets/vendor-blockchain.svg" alt="Block Chain">
      <p class="cardNumber">{{ card.cardNumber }}</p>
      <p class="cardHolder">{{ card.cardHolder }}</p>
      <p class="valid">{{ card.valid }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  computed: {
    vendorClass() {
      if (this.card.vendor === 'Bitcoin') {
        return 'bitcoin';
      } else if (this.card.vendor === 'Evil Corp') {
        return 'evil';
      } else if (this.card.vendor === 'Ninja Bank') {
        return 'ninja';
      } else if (this.card.vendor === 'Block Chain') {
        return 'blockchain'
      } else {
        return 'blank'}
      }
  }
}
</script>

<style>
.card {
  background-color:lightcoral;
  height: 241px;
  width: 382px;
  border-radius: 8px;
  color: white;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.bitcoin {
  background: linear-gradient(248.04deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34;
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