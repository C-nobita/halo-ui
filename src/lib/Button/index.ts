import { App } from 'vue'
import Button from './src/index.vue'
import { ComponentInstall } from "../utils/types"

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

// const _Button: ComponentInstall<typeof Button> = Button

// export default _Button
export default Button
