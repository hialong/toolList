import './assets/main.css'
import {router} from "@/routers/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import App from './App.vue'


createApp(App).use(router).use(ElementPlus).mount('#app')
