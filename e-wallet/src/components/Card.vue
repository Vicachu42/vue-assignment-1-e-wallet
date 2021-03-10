<template>
  <div>
    <article class="card" v-bind:class="vendorClass">
      <img v-bind:class="cardChip" v-if="card.vendor == 'Bitcoin' " src="@/assets/chip-dark.svg" alt="chip">
      <img v-bind:class="cardLogo" v-if="card.vendor == 'Bitcoin' " src="@/assets/vendor-bitcoin.svg" alt="Bitcoin">
      <img v-bind:class="cardChip" v-if="card.vendor == 'Evil Corp' " src="@/assets/chip-light.svg" alt="chip">
      <img v-bind:class="cardLogo" v-if="card.vendor == 'Evil Corp' " src="@/assets/vendor-evil.svg" alt="Evil Corp">
      <img v-bind:class="cardChip" v-if="card.vendor == 'Ninja Bank' " src="@/assets/chip-light.svg" alt="chip">
      <img v-bind:class="cardLogo" v-if="card.vendor == 'Ninja Bank' " src="@/assets/vendor-ninja.svg" alt="Ninja Bank">
      <img v-bind:class="cardChip" v-if="card.vendor == 'Block Chain' " src="@/assets/chip-light.svg" alt="chip">
      <img v-if="card.vendor == 'Block Chain' " src="@/assets/vendor-blockchain.svg" alt="Block Chain">
      <p class="cardNumber">{{ card.cardNumber }}</p>
      <p class="cardHolder">{{ card.cardHolder }}</p>
      <p class="validThru">{{ card.valid }}</p>
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
  padding: 16px;
  box-sizing: border-box;
  color: white;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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
  font-size: 29px;
  line-height: 32,48px;
}

.cardHolder {
  grid-area: cardHolder;
  font-weight: 400;
  font-size: 18px;
  line-height: 21,16px;
  text-align: left;
}

.validThru {
  grid-area: validThru;
  font-weight: 400;
  font-size: 18px;
  line-height: 21,16px;
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