import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'

import '../assets/css/main.scss'

library.add(fas, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.provide('swal', Swal)

app.mount('#app')
