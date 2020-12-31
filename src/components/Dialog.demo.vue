<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-dialog
      v-model:visible="dialogVisible"
      content="欢迎使用 halo-ui ! 这是自己学习中搭建的ui框架，第一次尝试难免有许多问题，如有问题欢迎提 issue 反馈，期待你的 follow 和 star！ : )"
      :confirm="confirmHandler"
    ></halo-dialog>
    <halo-button @click="dialogVisible = true">打开dialog</halo-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const dialogVisible = ref(false);
    const confirmHandler = () => {
      dialogVisible.value = false;
    };
    return {
      dialogVisible,
      confirmHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
