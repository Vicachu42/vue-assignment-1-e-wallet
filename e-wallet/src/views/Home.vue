<template>
<div class="homeView">
  <h1>Here is the Homeview</h1>
  <CardStack v-bind:cards="cards"/>
  </div>
</template>

<script>
import CardStack from '../components/CardStack.vue'

export default {
  name: 'Home',
  components: {
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
</style>