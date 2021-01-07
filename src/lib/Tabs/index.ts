import { App } from 'vue'
import Tabs from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
}

const _Tabs: ComponentInstall<typeof Tabs> = Tabs

export default _Tabs

