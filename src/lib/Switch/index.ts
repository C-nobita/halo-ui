import { App } from 'vue'
import Switch from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

const _Switch: ComponentInstall<typeof Switch> = Switch

export default _Switch

