<template>
  <div>
    <h2>Dialog 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="DialogDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    暂无
    <h3>Events</h3>
    暂无
    <h3>types</h3>
    暂无
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import DialogDemo from "../components/Dialog.demo.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    const propsTableHeader = ref([
      {
        key: "prop",
        name: "prop",
      },
      {
        key: "desc",
        name: "描述",
      },
      {
        key: "default",
        name: "默认值",
      },
      {
        key: "require",
        name: "是否必填",
      },
    ]);
    const propsTableData = ref([
      {
        prop: "visible",
        desc: "显示dialog",
        default: "false",
        require: "false",
      },
      {
        prop: "confirm",
        desc: "点击dialog的确认按钮",
        default: "() => void",
        require: "false",
      },
      {
        prop: "content",
        desc: "dialog的提示内容",
        default: "",
        require: "false",
      },
      {
        prop: "confirmTxt",
        desc: "确认按钮的文案",
        default: "好的",
        require: "false",
      },
    ]);

    return {
      DialogDemo,
      propsTableHeader,
      propsTableData,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  color: white;
  .tip {
    font-size: 12px;
  }
}
h2 {
  color: white;
  text-align: left;
}
h3 {
  text-align: left;
}
</style>
