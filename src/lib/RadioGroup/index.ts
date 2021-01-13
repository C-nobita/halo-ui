import { App } from 'vue'
import RadioGroup from './src/index.vue'
import { ComponentInstall } from "../utils/types"


RadioGroup.install = (app: App): void => {
  app.component(RadioGroup.name, RadioGroup)
}

const _RadioGroup: ComponentInstall<typeof RadioGroup> = RadioGroup

export default _RadioGroup

