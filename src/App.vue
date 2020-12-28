<template>
  <div class="app">
    <halo-header :headerList="[1231231, 123123, 123]" @itemClick="test" />
    <halo-button disabled>这是被禁用的按钮</halo-button
    ><halo-button @click="visible = true">这是可用的按钮</halo-button>
    <halo-dialog
      v-model:visible="visible"
      content="欢迎使用 halo-ui ! 这是自己学习中搭建的ui框架，第一次尝试难免有许多问题，如有问题欢迎提 issue 反馈，期待你的 follow 和 star！ : )"
      :comfirm="
        () => {
          visible = false;
        }
      "
    />
    <halo-aside>
      <template #header>12</template>
      <template #footer>12</template>
    </halo-aside>
    <halo-dropdown
      v-model:selectValue="selectValue"
      :values="['!@#', '!23', '22sf', 'sdasd']"
      >dsdasd</halo-dropdown
    >
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const ins = getCurrentInstance();
    const visible = ref(false);
    const test = (a) => {
      console.log(a);
      // ins.$callDialog();
      console.log(ins);
    };
    const selectValue = ref("");
    return {
      visible,
      test,
      selectValue,
    };
  },
};
</script>

<style lang="scss">
@import "./index.scss";
.app {
  background: "/wallhaven-ym1wp7";
  height: 100vh;
}
.hover_font {
  color: lightslategray !important;
  // font-weight: 900 !important;
}
</style>
