import { App } from 'vue'
import Header from './src/index.vue'

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

export default Header
