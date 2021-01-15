<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-button @click="callNotice1">呼出一个自动关闭的Notice组件</halo-button>
    <halo-button @click="callNotice2">呼出一个不会自动关闭的Notice组件</halo-button>
    <halo-button @click="callNotice3">呼出一个传入HTML片段的Notice组件</halo-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();

    const callNotice1 = () => {
      const noticeReturn = proxy.$notice({
        title: "test",
        content: "这是一个会自动关闭的Notice组件,默认事件3s",
      });
      console.log("Notice return => ", noticeReturn);
    };
    const callNotice2 = () => {
      const noticeReturn = proxy.$notice({
        title: "test",
        duration: 0,
        content: "这是一个不会动关闭的Notice组件",
      });
      console.log("Notice return => ", noticeReturn);
    };
    const callNotice3 = () => {
      const noticeReturn = proxy.$notice({
        title: "test",
        content: "test",
        html:
          '<p style="width: 300px;">这是传入<i style="color: tomato">HTML</i>片段的Notice组件</p>',
      });
      console.log("Notice return => ", noticeReturn);
    };

    return {
      callNotice1,
      callNotice2,
      callNotice3,
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
  flex-direction: column;
}
</style>
