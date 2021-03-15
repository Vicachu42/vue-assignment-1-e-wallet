<template>
  <div class="addCard">
    <Top message="Add new card" />
    <CardForm />
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import CardForm from '../components/CardForm'

export default {
  components: {
    Top,
    CardForm
  }
}
</script>

<style>
.addCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

label {
  font-size: 12px;
}

.new__card {
  text-align: left;
}

input {
  width: 382px;
  height: 56px;
  border-radius: 8px;
}

select {
  width: 382px;
  height: 56px;
  border-radius: 8px;
}

.cardValid {
  width: 175px;
}

.cardCCV {
  width: 175px;
}

.addCard .addButton {
  background-color: black;
  color: white;
}

</style>