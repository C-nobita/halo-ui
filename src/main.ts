import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './lib/halo.scss'
import haloUi from "./lib"
// import "./../dist/lib/halo.ts.css"
// import haloUi from "../dist/lib/halo.esm"
const app = createApp(App);
// haloUi(app);
app.use(haloUi).mount('#app')