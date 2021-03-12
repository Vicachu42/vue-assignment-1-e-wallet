<template>
  <div class="addCard">
    <Top message="Add new card" />
    <section class="blankCard">
    <Card>
      <!-- <p>{{ add.number }}</p> -->
    </Card>
    </section>
    <form class="inputForm">
      <label>Card number</label>
      <input type="text" v-model="add.number" />
      <label>Cardholder name</label>
      <input type="text" v-model="add.name" />
      <label>Valid thru</label>
      <input type="text" v-model="add.valid" />
      <label>CCV</label>
      <input type="text" v-model="add.CCV" />
      <label>Card vendor</label>
      <input type="text" v-model="add.vendor" />
      <select id="vendors">
        <option value="bitcoin">Bitcoin</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja</option>
        <option value="blockchain">Block Chain</option>
      </select>
    </form>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    Top,
    Card
  },
  props: {
    card: Object
  },
  data() {
    return {
      add: {
        number: ''
      }
    }
  }
}
</script>

<style>

</style>