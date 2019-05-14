<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Vue.js Zonawiki"/>-->
    <Taller1 quiubole="Que hubo pues" @el-evento="muestreMsg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Taller1 from './components/Taller1.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Taller1
  },
  methods: {
    muestreMsg() {
      alert('Alerta emitida desde el componente hijo')
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
