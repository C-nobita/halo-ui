<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-aside
      type="custom"
      :asideList="list"
      class="demo_aside"
      @itemClick="clickHandler"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const list = ref([
      {
        name: "test",
      },
    ]);
    const clickHandler = (params) => {
      console.log(params);
    };
    return {
      list,
      clickHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 300px;
  overflow: hidden;
  &_aside {
    position: absolute !important;
    width: 200px !important;
    height: 100%;
  }
}
</style>
