import { App } from 'vue'
import halo from "./halo"
halo();

import Button from "./Button"
import Header from "./Header"
import Dialog from "./Dialog"
import Aside from "./Aside"
import Dropdown from "./Dropdown"

const components = [
  Button,
  Header,
  Dialog,
  Aside,
  Dropdown
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