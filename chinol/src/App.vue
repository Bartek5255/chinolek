<template>
  <div id="app">
    <login v-if="stan == false" @joined="joined"></login>
    <game v-if="stan==true"></game>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Game from "./components/Game.vue";

export default {
  name: "App",
  data: () => {
    return {
      stan: false
    };
  },
  components: {
    Login,
    Game
  },
  methods: {
    joined: function() {
      this.stan = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
html,
body {
  background-color: #2c3e50;
}
</style>
