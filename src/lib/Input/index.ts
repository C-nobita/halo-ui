import { App } from 'vue'
import Input from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

const _Input: ComponentInstall<typeof Input> = Input

export default _Input

