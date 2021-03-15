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
  margin-left: 17px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 10px;
  grid-template-areas: "card__number__input card__number__input"
  "card__name card__name"
  "card__valid card__CCV"
  "card__vendor card__vendor";
}

input {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  padding-left: 10px;
}

select {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  padding-left: 10px;
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