<template>
  <div class="app">
    <halo-header
      alwaysTop
      scrollHide
      :headerList="header"
      @itemClick="itemClickHandler"
    ></halo-header>
    <halo-aside
      :openVlaue="openVlaue"
      :asideList="asideList"
      @itemClick="itemClickHandler"
    ></halo-aside>
    <router-view />
    <halo-dialog
      v-model:visible="dialogVisible"
      content="欢迎使用 halo-ui ! 这是自己学习中搭建的ui框架，第一次尝试难免有许多问题，如有问题欢迎提 issue 反馈，期待你的 follow 和 star！ : )"
      :confirm="
        () => {
          dialogVisible = false;
        }
      "
    ></halo-dialog>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

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
          name: "自定义",
          path: "/doc/custom",
          openAside: true,
        }
      ],
      dialogVisible: false,
      openVlaue: false,
    });
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      setTimeout(() => {
        data.dialogVisible = false;
      });
    });
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
    return {
      ...toRefs(data),
      itemClickHandler,
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
