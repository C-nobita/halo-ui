import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import './lib/halo.scss'
// import haloUi from "./lib"
import "../dist/halo-ui.css"
import haloUi from "../dist/halo-ui.esm"
const app = createApp(App);
// haloUi(app);
app.use(haloUi).mount('#app')