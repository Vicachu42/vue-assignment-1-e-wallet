<template>
<article>
    <h3>Here's the individual card</h3>
    <p>{{ card.id }}</p>
    <p>{{ card.vendor }}</p>
    <p>{{ card.cardNumber }}</p>
    <p>{{ card.cardHolder }}</p>
    <p>{{ card.valid }}</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  computed: {
    details() {
      return this.cards.filter((details) => { return details.id === parseInt(this.$route.params.id)});
    }
  }
}
</script>

<style>

</style>