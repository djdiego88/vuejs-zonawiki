import Vue from 'vue'
import Router from 'vue-router'
import Taller1 from '@/components/Taller1'
import Taller3 from '@/components/Taller3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Taller1',
      component: Taller1,
      props: true
    },
    {
      path: '/taller3',
      name: 'Taller3',
      component: Taller3
    }
  ]
})
