<template>
  <div id="app">
    <h1>Testing things out</h1>
    <router-view v-bind:cards="cards"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cards: [
        { id: 0, vendor: 'bitcoin', cardNumber: '6720 4519 2443 2976', cardHolder: 'Joe Exotic', valid: '20/02'},
        { id: 1, vendor: 'evilCorp', cardNumber: '6720 4519 2443 2976', cardHolder: 'Doc Antle', valid: '20/02'},
        { id: 2, vendor: 'ninjaBank', cardNumber: '6720 4519 2443 2976', cardHolder: 'Carol Baskin', valid: '20/02'},
        { id: 3, vendor: 'blockChain', cardNumber: '6720 4519 2443 2976', cardHolder: 'Jeff Lowe', valid: '20/02'}
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

body {
  width: 414px;
  height: 100%;
}

#app {
  font-family: 'PT Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>