<template>
  <div>
    <article class="card" v-bind:class="vendorClass">
      <img class="cardChip" v-if="card.vendor == 'Bitcoin' " src="@/assets/chip-dark.svg" alt="chip">
      <img class="cardLogo" v-if="card.vendor == 'Bitcoin' " src="@/assets/vendor-bitcoin.svg" alt="Bitcoin">
      <img class="cardChip" v-if="card.vendor == 'Evil Corp' " src="@/assets/chip-light.svg" alt="chip">
      <img class="cardLogo" v-if="card.vendor == 'Evil Corp' " src="@/assets/vendor-evil.svg" alt="Evil Corp">
      <img class="cardChip" v-if="card.vendor == 'Ninja Bank' " src="@/assets/chip-light.svg" alt="chip">
      <img class="cardLogo" v-if="card.vendor == 'Ninja Bank' " src="@/assets/vendor-ninja.svg" alt="Ninja Bank">
      <img class="cardChip" v-if="card.vendor == 'Block Chain' " src="@/assets/chip-light.svg" alt="chip">
      <img class="cardLogo" v-if="card.vendor == 'Block Chain' " src="@/assets/vendor-blockchain.svg" alt="Block Chain">
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
        return 'blank'
      }
    }
  }
}
</script>

<style>

</style>