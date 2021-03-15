<template>
  <div class="addCard">
    <Top message="Add new card" />
    <CardForm v-on:add-new-card="addNewCard" />
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import CardForm from '../components/CardForm'

export default {
  components: {
    Top,
    CardForm
  },
  methods: {
    addNewCard: function(newCard) {
      console.log('Hej!');
      this.$emit('add-new-card', newCard);
    }
  }
}
</script>

<style>
.addCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.exampleCard {
  height: 241px;
  width: 382px;
  border-radius: 8px;
  padding: 17px;
  margin-bottom: 20px;
}

.new__card {
  text-align: left;
  margin-left: 17px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 10px;
  grid-template-areas: "card__vendor card__vendor"
  "card__number__input card__number__input"
  "card__name card__name"
  "card__valid card__CCV";
}

label {
  font-size: 12px;
}

input {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 18px;
}

select {
  width: 382px;
  height: 56px;
  border-radius: 8px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 18px;
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