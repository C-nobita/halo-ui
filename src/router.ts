import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Layout from "./components/Layout.vue"
import AsideDemo from "./views/AsideDemo.vue"
import ButtonDemo from "./views/ButtonDemo.vue";
import DialogDemo from "./views/DialogDemo.vue";
import DropdownDemo from "./views/DropdownDemo.vue";
import HeaderDemo from "./views/HeaderDemo.vue";
import TableDemo from "./views/TableDemo.vue";
import CustomDemo from "./views/CustomDemo.vue";
import CarouselDemo from "./views/CarouselDemo.vue";
import DatePickerDemo from "./views/DatePickerDemo.vue";
import TabsDemo from "./views/TabsDemo.vue";
import SwitchDemo from "./views/SwitchDemo.vue";


import { h } from 'vue';
import Markdown from './components/markdown.vue';
import intro from './markdown/intro.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Layout,
      children: [
        {
          path: "",
          component: md(intro),
        },
        {
          path: "install",
          component: md(install)
        },
        {
          path: "aside",
          component: AsideDemo
        },
        {
          path: "button",
          component: ButtonDemo
        },
        {
          path: "dialog",
          component: DialogDemo
        },
        {
          path: "dropdown",
          component: DropdownDemo
        },
        {
          path: "header",
          component: HeaderDemo
        },
        {
          path: "table",
          component: TableDemo
        },
        {
          path: "carousel",
          component: CarouselDemo
        },
        {
          path: "datepicker",
          component: DatePickerDemo
        },
        {
          path: "tabs",
          component: TabsDemo
        },
        {
          path: "switch",
          component: SwitchDemo
        },
        {
          path: "custom",
          component: CustomDemo
        },
        {
          path: ":catchAll(.*)",
          redirect: "/"
        }
      ]
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/doc/"
    }
  ],
});
