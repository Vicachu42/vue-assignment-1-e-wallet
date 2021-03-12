<template>
  <section>
    <div class="cards">
      <Card v-for="(card, index) in cards" v-bind:key="index" v-bind:card="card" v-on:click.native="$emit('switch-card', card.id)"></Card>
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