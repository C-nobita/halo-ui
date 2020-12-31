<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-header :headerList="headerList" @itemClick="itemClickHandler"></halo-header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const headerList = ref([
      {
        name: "test",
        otherProps: "xx",
      },
    ]);
    const itemClickHandler = (params) => {
      console.log("header clicked!", params);
    };
    return {
      headerList,
      itemClickHandler,
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
