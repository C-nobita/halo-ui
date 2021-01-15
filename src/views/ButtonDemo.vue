<template>
  <div>
    <h2>Button 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="ButtonDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="slotTableData"></halo-table>
    <h3>Events</h3>
    <halo-table :header="eventTableHeader" :data="eventTableData"></halo-table>
    <h3>Types</h3>
    暂无
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import ButtonDemo from "../components/Button.demo.vue";
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
        key: "type",
        name: "参数类型",
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
        prop: "hoverLight",
        desc: "鼠标移上是否有hover效果",
        default: "true",
        require: "false",
        type: "Boolean",
      },
      {
        prop: "type",
        desc: "组件类型/为 custom 自定义样式",
        default: "/",
        require: "false",
        type: "String",
      },
    ]);
    const slotTableHeader = ref([
      {
        key: "slot",
        name: "插槽",
      },
      {
        key: "desc",
        name: "描述",
      },
    ]);
    const slotTableData = ref([
      {
        slot: "default / 默认插槽",
        desc: "可以给按钮加 icon",
      },
    ]);
    const eventTableHeader = ref([
      {
        key: "event",
        name: "事件",
      },
      {
        key: "desc",
        name: "描述",
      },
      {
        key: "params",
        name: "参数",
      },
      {
        key: "paramsType",
        name: "参数类型",
      },
    ]);
    const eventTableData = ref([
      {
        event: "click",
        params: "e: Event",
        desc: "点击事件",
      },
      {
        event: "/",
        params: "e",
        paramsType: "Event",
        desc: "与原生 button 一致",
      },
    ]);
    return {
      ButtonDemo,
      propsTableHeader,
      propsTableData,
      slotTableHeader,
      slotTableData,
      eventTableHeader,
      eventTableData,
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
