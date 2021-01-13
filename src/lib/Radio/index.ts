import { App } from 'vue'
import Radio from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}

const _Radio: ComponentInstall<typeof Radio> = Radio

export default _Radio

