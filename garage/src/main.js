// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Geolocation from 'vue3-geolocation'

const app = createApp(App)

app.use(router)
app.use(Vue3Geolocation, {}) // Ajoutez un objet vide comme deuxième argument
app.mount('#app')
