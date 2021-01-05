import { App } from 'vue'
import Carousel from './src/index.vue'
import { ComponentInstall } from "../utils/types"

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
}

const _Carousel: ComponentInstall<typeof Carousel> = Carousel

export default _Carousel
