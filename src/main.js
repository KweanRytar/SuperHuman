import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import FontAwesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import all solid icons or specific ones
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faXmark) // Add icons to library
import {MotionPlugin} from '@vueuse/motion'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register globally
app.use(MotionPlugin) // Register MotionPlugin globally
app.mount('#app')
