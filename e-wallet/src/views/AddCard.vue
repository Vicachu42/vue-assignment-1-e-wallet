<template>
  <div class="addCard">
    <Top message="Add new card" />
    <article class="new__card">
      <NewCard />
    </article>
    <section>
      <button class="addButton">Add card</button>
    </section>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import NewCard from '../components/NewCard'

export default {
  components: {
    Top,
    NewCard
  }
}
</script>

<style>
.addCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.new__card {
  text-align: left;
}

label {
  font-size: 12px;
}

input {
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