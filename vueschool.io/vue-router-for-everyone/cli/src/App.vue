<template>
  <div id="app">
    <TheNavigation />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/brazil">Brazil</router-link> |
      <router-link to="/jamaica">Jamaica</router-link> |
      <router-link to="/panama">Panama</router-link> |
      <router-link to="/hawaii">Hawaii</router-link>
    </nav> -->
    <router-view />
  </div>
</template>



<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation,
  },
};
</script>



<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>