<template>
  <div class="addCard">
    <Top message="Add new card" />

    <NewCard />

    <!-- <section class="blankCard">
    <Card>
      <p>{{ add.number }}</p>
    </Card>
    </section> -->

  </div>
</template>

<script>
import Top from '../components/Top.vue'
// import Card from '../components/Card.vue'
import NewCard from '../components/NewCard'

export default {
  components: {
    Top,
    NewCard
  }
}
</script>

<style>
</style>