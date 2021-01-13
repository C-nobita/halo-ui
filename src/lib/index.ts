declare global {
  interface Window {
    haloRadius?: number
  }
}
import { App } from 'vue'
import halo from "./halo"
halo(window.haloRadius)

import Button from "./Button"
import Header from "./Header"
import Dialog from "./Dialog"
import Aside from "./Aside"
import Dropdown from "./Dropdown"
import Table from "./Table"
import Carousel from "./Carousel"
import DatePicker from "./DatePicker"
import Tabs from "./Tabs"
import TabsItem from "./TabsItem"
import Switch from "./Switch"
import Loading from "./Loading"
import Radio from "./Radio"
import RadioGroup from "./RadioGroup"

const components = [
  Button,
  Header,
  Dialog,
  Aside,
  Dropdown,
  Table,
  Carousel,
  DatePicker,
  Tabs,
  TabsItem,
  Switch,
  Loading,
  Radio,
  RadioGroup
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
  DatePicker,
  Tabs,
  TabsItem,
  Switch,
  Loading,
  Radio,
  RadioGroup
}

export default {
  install
}