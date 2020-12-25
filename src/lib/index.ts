import { App } from 'vue'
import lightHover from "./light-hover"
lightHover();

import Button from "./Button"
import Header from "./Header"
import Dialog from "./Dialog"
import Aside from "./Aside"

const components = [
  Button,
  Header,
  Dialog,
  Aside,
]


const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}


export {
  Button,
  Header,
  Dialog,
  Aside
}

export default {
  install
}