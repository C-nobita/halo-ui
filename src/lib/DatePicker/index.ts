import { App } from 'vue'
import DatePicker from './src/index.vue'
import { ComponentInstall } from "../utils/types"


DatePicker.install = (app: App): void => {
  app.component(DatePicker.name, DatePicker)
}

const _DatePicker: ComponentInstall<typeof DatePicker> = DatePicker
export default _DatePicker
