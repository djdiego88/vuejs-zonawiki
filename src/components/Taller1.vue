<template>
    <div>
      <input type="text" v-model="nombre" placeholder="Ingrese un nombre">
      <p :class="{ blue: isClicked }">{{ quiubole }} {{ nombre | placeholder() }}!</p>
      <h3>Cambiar color</h3>
      <button @click="changeColor">Cambiar color del texto</button>
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
                isClicked: false
            }
        },
        methods: {
            changeColor() {
              this.isClicked = !this.isClicked;
              this.$emit('clic-color', this.isClicked);
            }
        },
        filters: {
            placeholder: function (value) {
                if (!value) return ' persona no identificada'
                return value
            }
        }
    }
</script>
<style scoped>
  .blue {
    color: blue;
  }
</style>
