import { createRouter, createWebHistory } from 'vue-router'
import register from '../views/register.vue'
import homepage from '../views/homepage.vue'
import loginpage from '../views/loginpage.vue'
import registermecanicien from '../views/registermecanicien.vue'
import registergarage from '../views/registergarage.vue'
import adminpage from '../views/adminpage.vue'
import clientpage from '../views/clientpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage
    },
    {
      path: '/registermecanicien',
      name: 'registermecanicien',
      component: registermecanicien
    },
    {
      path: '/registergarage',
      name: 'registergarage',
      component: registergarage
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: adminpage
    },
    {
      path: '/clientpage',
      name: 'clientpage',
      component: clientpage
    },
  ]
})

export default router
