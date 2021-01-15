import { App } from 'vue'
import { ComponentInstall } from "../utils/types"
import createNotificationInstance from "./notice"

createNotificationInstance.install = (app: App): void => {
  app.config.globalProperties.$notice = createNotificationInstance
}

const _Notice: ComponentInstall<typeof createNotificationInstance> = createNotificationInstance
export default _Notice
