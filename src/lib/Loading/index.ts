import { App } from 'vue'
import Loading from './src/index.vue'
import { ComponentInstall } from "../utils/types"


Loading.install = (app: App): void => {
  app.component(Loading.name, Loading)
}

const _Loading: ComponentInstall<typeof Loading> = Loading

export default _Loading

