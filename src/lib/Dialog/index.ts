import { App } from 'vue'
import Dialog from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
}

const _Dialog: ComponentInstall<typeof Dialog> = Dialog
export default _Dialog
