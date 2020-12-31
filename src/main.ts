import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import './index.css'
// import './lib/halo.scss'
// import haloUi from "./lib"
import 'github-markdown-css'
import "../dist/halo-ui.css"
import haloUi from "../dist/halo-ui.esm"
const app = createApp(App);
// haloUi(app);
app.use(haloUi).use(router).mount('#app')