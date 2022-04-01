import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
createApp(App).mount('#app')
