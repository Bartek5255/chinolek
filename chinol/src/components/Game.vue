<template>
  <div class="main">
    <div id="gracze">
      <div
        id="niebieski"
        :class="{szaroBuro: daneGry.niebieski.status<2}"
      >{{daneGry.niebieski.name}}</div>
      <div id="zielony" :class="{szaroBuro: daneGry.zielony.status<2}">{{daneGry.zielony.name}}</div>
      <div id="czerwony" :class="{szaroBuro: daneGry.czerwony.status<2}">{{daneGry.czerwony.name}}</div>
      <div id="zolty" :class="{szaroBuro: daneGry.zolty.status<2}">{{daneGry.zolty.name}}</div>
      <div id="ready">
        <input type="checkbox" name="czeck" id="czeck" v-model="checked" @change="checkcheck" />
        <p v-if="checked">chce juz grac</p>
        <p v-if="!checked">czekam na ludzi</p>
      </div>
      <p v-if="daneGry.gameStart">Gra działa :</p>
      <p v-if="daneGry.gameStart">: {{this.czas}}</p>
    </div>
    <div id="plansza">
      <img :src="'/assets/plansza.png'" alt />
    </div>
    <div id="kostka">
      <i class="fas fa-dice-one fa-10x" v-if="this.roll == '1'"></i>
      <i class="fas fa-dice-two fa-10x" v-if="this.roll == '2'"></i>
      <i class="fas fa-dice-three fa-10x" v-if="this.roll == '3'"></i>
      <i class="fas fa-dice-four fa-10x" v-if="this.roll == '4'"></i>
      <i class="fas fa-dice-five fa-10x" v-if="this.roll == '5'"></i>
      <i class="fas fa-dice-six fa-10x" v-if="this.roll == '6'"></i>
    </div>
    <button id="tuRzut" @click="rzut" v-if="daneGry[me].status == 3">roll dice</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  name: "Game",
  data() {
    return {
      daneGry: {
        niebieski: {
          name: ""
        },
        zielony: {
          name: ""
        },
        czerwony: {
          name: ""
        },
        zolty: {
          name: ""
        }
      },
      cyklicznosc: "",
      checked: false,
      me: "",
      roll: "",
      czas: 0,
      rzuconed: false,
      statusGry: false
    };
  },
  props: [],
  methods: {
    zapytajkaPoj: function() {
      axios
        .get(`/gra`, null, {
          useCredentials: true
        })
        .then(response => {
          this.daneGry = response.data.dane;
          this.me = response.data.name;
          this.czas = response.data.czas;
          this.statusGry = response.data.dane.gameStart;
          console.log(response.data);
          console.log(this.me);
          console.log(this.czas);
        });
      if (this.czas <= 0 && this.statusGry) {
        this.tura();
        this.rzuconed = false;
      }
    },

    checkcheck: function() {
      axios.post(`/gotowy`, null, {
        useCredentials: true
      });
    },
    zapytajkaConst: function() {
      this.cyklicznosc = setInterval(this.zapytajkaPoj, 1000);
    },
    rzut: function() {
      axios
        .get(`/rzut`, null, {
          useCredentials: true
        })
        .then(response => {
          this.roll = response.data;
          console.log(this.roll);
          let utterance = new SpeechSynthesisUtterance(this.roll);
          speechSynthesis.speak(utterance);
        });
    },
    tura: function() {
      axios.post(`/nextTura`, null, {
        useCredentials: true
      });
    }
  },
  mounted() {
    this.zapytajkaConst();
  },
  destroyed() {
    clearInterval(this.cyklicznosc);
  }
};
</script>

<style scoped>
#gracze {
  position: absolute;
  width: 100%;
  top: 0px;
  height: 200px;
  display: flex;
}
.szaroBuro {
  background-color: grey !important;
}
#niebieski {
  position: absolute;
  width: 200px;
  top: 50px;
  left: 30%;
  color: aliceblue;
  background-color: blue;
  height: 65px;
  padding-top: 35px;
}
#zielony {
  position: absolute;
  width: 200px;
  height: 65px;
  padding-top: 35px;
  top: 50px;
  left: calc(30% + 215px);
  color: aliceblue;
  background-color: green;
}
#czerwony {
  position: absolute;
  width: 200px;
  height: 65px;
  padding-top: 35px;
  top: 50px;
  left: calc(30% + 430px);
  color: aliceblue;
  background-color: red;
}
#zolty {
  position: absolute;
  width: 200px;
  height: 65px;
  padding-top: 35px;
  top: 50px;
  left: calc(30% + 645px);
  color: aliceblue;
  background-color: yellow;
}
#ready {
  position: absolute;
  left: calc(30% + 900px);
  top: 100px;
  height: 200px;
}
#czeck {
  position: relative;
  transform: scale(4);
}
p {
  position: relative;
  left: 50px;
  color: white;
  size: 20px;
}
#plansza {
  position: absolute;
  left: 30%;
  top: 30%;
  height: 600px;
  width: 600px;
  background-color: brown;
  /* background-image: url("/src/assets/plansza.png"); */
}
#kostka {
  position: absolute;
  left: 10%;
  top: 30%;
  height: 150px;
  width: 150px;

  color: brown;
}
#tuRzut {
  position: absolute;
  left: 10%;
  top: calc(30% + 175px);
  width: 150px;
  height: 50px;
  background-color: brown;
}
</style>
