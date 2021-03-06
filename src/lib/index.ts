declare global {
  interface Window {
    haloRadius?: number
  }
}

interface MethodConfig {
  confirm?: Function;
  content?: String;
  confirmTxt?: String;
  onClose?: Function;
  title?: String;
  html?: String;
  showClose?: Boolean;
  duration?: Number;
}
interface MethodReturn {
  close?: () => void;
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $callDialog: (methodConifg?: MethodConfig) => MethodReturn;
    $notice: (methodConifg?: MethodConfig) => MethodReturn;
  }
}


import { App } from 'vue'
import halo from "./halo"
import createDialogInstance from "./Dialog/dialog.jsx"
import createNotificationInstance from "./Notice/notice.jsx"
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
import Input from "./Input"
import Notice from "./Notice"

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
  RadioGroup,
  Input
]


const methods = [
  {
    method: 'callDialog',
    fun: createDialogInstance
  },
  {
    method: 'notice',
    fun: createNotificationInstance
  }
]


const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  });

  methods.forEach(item => {
    app.config.globalProperties[`$${item.method}`] = item.fun
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
  RadioGroup,
  Input,
  Notice
}

export default {
  install
}