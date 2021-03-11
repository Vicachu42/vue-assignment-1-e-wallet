<template>
  <div>
    <p class="activeCard">Active card</p>
    <article class="topCard" v-bind:class="vendorClass">
      <p class="cardNumber">{{ currentCard.cardNumber }}</p>
      <p class="cardHolder">{{ currentCard.cardHolder }}</p>
      <p class="validThru">{{ currentCard.valid }}</p>
        <Card v-for="card in currentCard" v-bind:key="card" v-bind:card="card"></Card>
    </article>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Top',
  components: {
    Card
  },
  props: {
    currentCard: Object
  }
}
</script>

<style>

</style>