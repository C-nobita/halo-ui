import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Layout from "./components/Layout.vue"
// import SwitchDemo from "./components/SwitchDemo.vue";
// import ButtonDemo from "./components/ButtonDemo.vue";
// import DialogDemo from "./components/DialogDemo.vue";
// import TabsDemo from "./components/TabsDemo.vue";

import { h } from 'vue';
import Markdown from './components/markdown.vue';
import intro from './markdown/intro.md'
// import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
      // children: [
      // ]
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
router.afterEach(() => {
});
