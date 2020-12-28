import { App } from 'vue'
import Dropdown from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

const _Dropdown: ComponentInstall<typeof Dropdown> = Dropdown

export default _Dropdown
