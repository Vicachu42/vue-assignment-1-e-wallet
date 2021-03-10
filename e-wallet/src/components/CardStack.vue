<template>
  <section>
    <div class="cards">
      <h2>Here's the card stack</h2>
      <Card v-for="(card, index) in cards" v-bind:key="index" v-bind:card="card"></Card>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'CardStack',
  components: {
    Card
  },
  props: {
    cards: Array
  }
}

</script>

<style>

</style>