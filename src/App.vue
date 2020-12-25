<template>
  <div class="app">
    <lighting-header :headerList="[1231231, 123123, 123]" @itemClick="test" />
    <lighting-button disabled>这是被禁用的按钮</lighting-button><lighting-button @click="visible = true">这是可用的按钮</lighting-button>
    <lighting-dialog v-model:visible="visible" content="欢迎使用 lighting-ui ! 这是自己学习中搭建的ui框架，第一次尝试难免有许多问题，如有问题欢迎提 issue 反馈，期待你的 follow 和 star！ : )" :comfirm="() => {visible = false}"/>
    <lighting-aside />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
  },
  setup() {
    const visible = ref(false);
    const test = (a) => {
      console.log(a)
    }
    return {
      visible,
      test
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss"; 
  .app {
    background:"/wallhaven-ym1wp7";
    height: 100vh;
  }
  .hover_font {
    color: lightslategray !important;
    // font-weight: 900 !important;
  }
</style>
