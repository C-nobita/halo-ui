import { App } from 'vue'
import Table from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Table.install = (app: App): void => {
  app.component(Table.name, Table)
}

const _Table: ComponentInstall<typeof Table> = Table

export default _Table

