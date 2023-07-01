import { createRouter, createWebHistory } from 'vue-router'
import register from '../views/register.vue'
import homepage from '../views/homepage.vue'
import loginpage from '../views/loginpage.vue'
import registermecanicien from '../views/registermecanicien.vue'
import registergarage from '../views/registergarage.vue'
import adminpage from '../views/adminpage.vue'
import clientpage from '../views/clientpage.vue'
import mecanicienpageapropos from '../views/mecanicienpageapropos.vue'
import mecanicienaccueil from '../views/mecanicienaccueil.vue'
import garagepage from '../views/garagepage.vue'
import validationcode from '../views/validationcode.vue'


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
    {
      path: '/mecanicienpageapropos',
      name: 'mecanicienpageapropos',
      component: mecanicienpageapropos
    },
    {
      path: '/mecanicienaccueil',
      name: 'mecanicienaccueil',
      component: mecanicienaccueil
    },
    {
      path: '/garagepage',
      name: 'garagepage',
      component: garagepage
    },
    {
      path: '/validationcode',
      name: 'validationcode',
      component: validationcode
    },
  ]
})

export default router
