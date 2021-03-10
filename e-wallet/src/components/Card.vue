<template>
<article>
    <!-- <h3>Here's the individual card</h3> -->
    <div class="card">
      <!-- <img class="vendor" alt="vendor"> -->
      <!-- <p>{{ card.vendor }}</p> -->
      <p class="cardNumber">{{ card.cardNumber }}</p>
      <p class="cardHolder">{{ card.cardHolder }}</p>
      <p class="valid">{{ card.valid }}</p>
    </div>
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

/* .cardNumber {
  
} */
</style>