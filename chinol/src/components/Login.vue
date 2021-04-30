<template>
  <div class="main">
    <input type="text" name="nazwa" id="nazwa" v-model="nazwaGracza" />
    <button type="submit" @click="loguj">wyslij</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  name: "Login",
  data: () => {
    return {
      nazwaGracza: "?"
    };
  },
  props: [],
  methods: {
    loguj: function() {
      console.log(this.nazwaGracza);

      axios
        .get(`http://localhost:3000/loged?name=${this.nazwaGracza}`, null, {
          useCredentials: true
        })
        .then(() => {
          this.$emit("joined"); //wykonanie mutacji (mutations)
        });
    }
  }
};
</script>

<style scoped>
html, body{
  background-color: #2c3e50;
}
</style>
