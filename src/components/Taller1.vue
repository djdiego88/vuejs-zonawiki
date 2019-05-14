<template>
    <div>
      <input type="text" v-model="nombre">
      <p>{{quiubole}} {{nombre}}!</p>
      <a @click="hiceClic('Esto sale cuando hago clic')">Haz clic aquí</a>
      <h3>Computed properties</h3>
      <p>{{ nombreAlReves }}</p>
      <h3>Watcher</h3>
      <input type="text" v-model="texto">
      <small>{{ ayuda }}</small>
      <h3>Filtros</h3>
      {{ nombre | capitalize }}
      <h3>Eventos</h3>
      <button @click="$emit('el-evento')">Emite evento al padre</button>
    </div>
</template>
<script>
    export default {
        name: 'Taller1',
        props: {
            quiubole: String
        },
        data() {
            return {
                nombre: '',
                texto: '',
                ayuda: ''
            }
        },
        methods: {
            hiceClic(text) {
                alert(text)
            }
        },
        computed: {
            // a computed getter
            nombreAlReves: function () {
              // `this` points to the vm instance
              return this.nombre.split('').reverse().join('')
            }
        },
        watch: {
            // whenever question changes, this function will run
            texto: function (nuevoTexto, viejoTexto) {
              this.ayuda = 'El campo de texto acabó de cambiar'
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            }
        }
    }
</script>
