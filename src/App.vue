<template>
  <div id="app">
    <h1>To do list</h1>
    <List />
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  components : {
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0 auto;
}
#app h1 {
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 60px;
}
</style>
