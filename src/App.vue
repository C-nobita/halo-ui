<template>
  <div class="app">
    <halo-header :headerList="header" @itemClick="itemClickHandler"></halo-header>
    <halo-aside :openVlaue="openVlaue" :asideList="asideList" @itemClick="itemClickHandler"></halo-aside>
    <router-view />
    <halo-dialog
      v-model:visible="dialogVisible"
      content="欢迎使用 halo-ui ! 这是自己学习中搭建的ui框架，第一次尝试难免有许多问题，如有问题欢迎提 issue 反馈，期待你的 follow 和 star！ : )"
      :comfirm="
        () => {
          dialogVisible = false;
        }
      "
    ></halo-dialog>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const data = reactive({
      header: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "组件",
          path: "/doc",
          openAside: true,
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
      ],
      dialogVisible: false,
      openVlaue: false,
    });
    const router = useRouter();
    onMounted(() => {
      setTimeout(() => {
        data.dialogVisible = false;
      });
    });
    const itemClickHandler = (params) => {
      console.log("Header Item Click! => ", params);
      if (params.path) {
        router.push(params.path);
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
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.hover_font {
  color: lightslategray !important;
  // font-weight: 900 !important;
}
</style>
