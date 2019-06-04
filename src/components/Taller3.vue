<template>
    <div>
        <h2>Aquí carga el contenido del Taller 3</h2>
        <button @click="goBack">Ir atrás</button>
        <pre> {{ data }}</pre>
        <!--<ul>
            <li v-for="item in data.data" :key="item.id">
                <strong>{{item.name}}</strong> - Email: {{item.email}}
            </li>
        </ul>-->
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                data: {}
            }
        },
        mounted: function() {
            this.getData();
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            getData() {
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then((resp) => {
                    this.data = resp
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>
