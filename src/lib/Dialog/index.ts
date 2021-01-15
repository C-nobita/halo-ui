import { App } from 'vue'
import Dialog from './src/index.vue'
import { ComponentInstall } from "../utils/types"
import createDialogInstance from "./dialog"

Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
  app.config.globalProperties.$callDialog = createDialogInstance
}

const _Dialog: ComponentInstall<typeof Dialog> = Dialog
export default _Dialog
