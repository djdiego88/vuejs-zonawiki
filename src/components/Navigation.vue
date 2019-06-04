<template>
    <div id="nav">
      <router-link :to="{ name: 'Taller1' }">Talleres Anteriores</router-link> - 
      <router-link to="/taller3">Taller 3</router-link>
    </div>
</template>
<style scoped>
   #nav{
        margin-bottom: 1rem;
   } 
</style>
