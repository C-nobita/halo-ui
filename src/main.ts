import { createApp } from 'vue'
import App from './App.vue'
import './lib/simple.scss'
import './index.css'
// import lightingUi from "./utils/lightingUi"
import lightingUi from "./lib"
const app = createApp(App);
// lightingUi(app);
app.use(lightingUi).mount('#app')