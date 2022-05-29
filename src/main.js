import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router";
import {createApp} from "vue";
const app = createApp(App);
app.use(router)
app.mount('#app')
