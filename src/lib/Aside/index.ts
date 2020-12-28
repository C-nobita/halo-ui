import { App } from 'vue'
import Aside from './src/index.vue'
import { ComponentInstall } from "../utils/types"

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

// const _Aside: ComponentInstall<typeof Aside> = Aside

// export default _Aside
export default Aside
