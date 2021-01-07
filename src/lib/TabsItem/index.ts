import { App } from 'vue'
import TabsItem from './src/index.vue'
import { ComponentInstall } from "../utils/types"


TabsItem.install = (app: App): void => {
  app.component(TabsItem.name, TabsItem)
}

const _TabsItem: ComponentInstall<typeof TabsItem> = TabsItem

export default _TabsItem

