<template>
  <div id="app">
    <Cards />
  </div>
</template>

<script>
import Cards from './components/Cards';

export default {
  name: 'App',
  components: {
    Cards
  }
};
</script>

<style lang="scss">
@import "./src/styles/main.scss";
</style>
