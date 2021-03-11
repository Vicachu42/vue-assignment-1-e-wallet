<template>
  <div class="addCard">
    <h1>Add card</h1>
    <form>
      <label>Card number</label>
      <input type="text" v-model="add.number" required />
    </form>
    <p>{{ add.number}}</p>
    <div id="checkboxes">
      <label>Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="add.categories" />
      <label>Wizards</label>
      <input type="checkbox" value="wizards" v-model="add.categories" />
    </div>
    <p>{{ add.categories }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add: {
        number: '',
        categories: []
      }
    }
  }
}
</script>

<style>

</style>