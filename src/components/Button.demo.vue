<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-button @click="clickHandler">这是一个按钮</halo-button>
    <halo-button disabled @click="clickHandler">这是一个不可用的按钮</halo-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const clickHandler = () => {
      console.log("button clicked!");
    };
    return {
      clickHandler,
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
