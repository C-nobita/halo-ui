import { App } from 'vue'
import Header from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

const _Header: ComponentInstall<typeof Header> = Header

export default _Header

