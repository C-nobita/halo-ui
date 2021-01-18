<template>
  <div class="app">
    <halo-header alwaysTop scrollHide :headerList="header" @itemClick="itemClickHandler">
      <template #left>
        <img style="height: 100%" :src="libLogo">
      </template>
      <template #right
        ><span style="font-size: 12px; margin-left: 16px"
          >version: {{ version }} / Beta</span
        ></template
      >
    </halo-header>
    <halo-aside
      :openVlaue="openVlaue"
      :asideList="asideList"
      @itemClick="itemClickHandler"
    >
      <template #header>
        <img style="height: 76%" :src="Logo">
      </template>
    </halo-aside>
    <router-view />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import pack from "../package";
import libLogo from "./assets/libLogo.png"
import Logo from "./assets/LOGO.png"

const asideArr = [
  {
    name: "Aside组件",
    path: "/doc/aside",
    openAside: true,
  },
  {
    name: "Button组件",
    path: "/doc/button",
    openAside: true,
  },
  {
    name: "Dialog组件",
    path: "/doc/dialog",
    openAside: true,
  },
  {
    name: "Dropdown组件",
    path: "/doc/dropdown",
    openAside: true,
  },
  {
    name: "Header组件",
    path: "/doc/header",
    openAside: true,
  },
  {
    name: "Table组件",
    path: "/doc/table",
    openAside: true,
  },
  {
    name: "Carousel组件",
    path: "/doc/carousel",
    openAside: true,
  },
  {
    name: "DatePicker组件",
    path: "/doc/datepicker",
    openAside: true,
  },
  {
    name: "Tabs组件",
    path: "/doc/tabs",
    openAside: true,
  },
  {
    name: "Switch组件",
    path: "/doc/switch",
    openAside: true,
  },
  {
    name: "Loading组件",
    path: "/doc/loading",
    openAside: true,
  },
  {
    name: "Radio组件",
    path: "/doc/radio",
    openAside: true,
  },
  {
    name: "Input组件",
    path: "/doc/input",
    openAside: true,
  },
  {
    name: "Notice组件",
    path: "/doc/notice",
    openAside: true,
  },
].sort((a, b) => {
  return a.name[0] <= b.name[0] ? -1 : 1;
});
export default {
  name: "App",
  setup() {
    const data = reactive({
      header: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "组件",
          path: "/doc",
          openAside: true,
          fromHeader: true,
        },
      ],
      asideList: [
        {
          name: "前言",
          path: "/doc",
          openAside: true,
        },
        {
          name: "安装",
          path: "/doc/install",
          openAside: true,
        },
        {
          name: "自定义",
          path: "/doc/custom",
          openAside: true,
        },
        ...asideArr,
      ],
      openVlaue: false,
      version: pack.version,
    });
    const router = useRouter();
    const route = useRoute();
    const itemClickHandler = (params) => {
      console.log("Header Item Click! => ", params);
      if (params.path) {
        if (params.fromHeader) {
          if (params.path.startsWith("/doc") && route.path.startsWith("/doc")) {
            console.log("skip!");
          } else router.push(params.path);
        } else router.push(params.path);
      }
      data.openVlaue = params.openAside;
    };
    console.log(Logo)
    return {
      ...toRefs(data),
      itemClickHandler,
      Logo,
      libLogo
    };
  },
};
</script>

<style lang="scss">
@import "./index.scss";
body {
  min-height: 100vh;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.hover_font {
  color: black !important;
  // font-weight: 900 !important;
}
</style>
