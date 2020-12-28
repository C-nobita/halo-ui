import { createApp } from 'vue'
import App from './App.vue'
import './lib/halo.scss'
import './index.css'
// import haloUi from "./utils/haloUi"
import haloUi from "./lib"
const app = createApp(App);
// haloUi(app);
app.use(haloUi).mount('#app')