<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Taller1 quiubole="Que hubo pues" @clic-color="showMsg"/>
    <!--<navigation></navigation>
    <router-view quiubole="Que hubo pues" @clic-color="showMsg"></router-view>-->
    <div v-if="showDiv">Se ha cambiado el color del mensaje del usuario</div>
  </div>
</template>

<script>
import Taller1 from './components/Taller1.vue'
//import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Taller1,
    //Navigation
  },
  data() {
    return {
      showDiv: false
    }
  },
  mounted: function () {
    this.showWelcome();
  },
  methods: {
    showMsg(show) {
      this.showDiv = show;
    },
    showWelcome() {
      console.log('Bienvenid@ a esta página')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
