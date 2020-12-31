<template>
  <div>
    <h2>Dropdown 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="DropdownDemo" />
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
import DropdownDemo from "../components/Dropdown.demo.vue";
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
        prop: "values",
        desc: "选择展开的数组",
        default: "[ ]",
        require: "true",
      },
      {
        prop: "selectValue",
        desc: "选择的值",
        default: "",
        require: "true",
      },
      {
        prop: "type",
        desc: "组件类型/为 custom 自定义样式",
        default: "/",
        require: "false",
      },
    ]);

    return {
      DropdownDemo,
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
