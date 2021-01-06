import { App } from 'vue'
import halo from "./halo"
halo();

import Button from "./Button"
import Header from "./Header"
import Dialog from "./Dialog"
import Aside from "./Aside"
import Dropdown from "./Dropdown"
import Table from "./Table"
import Carousel from "./Carousel"
import DatePicker from "./DatePicker"

const components = [
  Button,
  Header,
  Dialog,
  Aside,
  Dropdown,
  Table,
  Carousel,
  DatePicker
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
  Aside,
  Table,
  Carousel,
  DatePicker
}

export default {
  install
}