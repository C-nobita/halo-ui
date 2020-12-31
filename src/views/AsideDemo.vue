<template>
  <div>
    <h2>Aside 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="AsideDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="slotTableData"></halo-table>
    <h3>Events</h3>
    <halo-table :header="eventTableHeader" :data="eventTableData"></halo-table>
    <h3>types</h3>
    <halo-table :header="typesTableHeader" :data="typesTableData"></halo-table>
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import AsideDemo from "../components/Aside.demo.vue";
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
        prop: "openVlaue",
        desc: "是否打开",
        default: "false",
        require: "false",
      },
      {
        prop: "asideList",
        desc: "列表",
        default: "asideObj[ ]",
        require: "true",
      },
      {
        prop: "type",
        desc: "组件类型/为 custom 自定义样式",
        default: "/",
        require: "false",
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
        slot: "header",
        desc: "组件上部/顶部的插槽",
      },
      {
        slot: "footer",
        desc: "组件下部/尾部的插槽",
      },
      {
        slot: "menu",
        desc: "组件按钮/开关的插槽",
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
    ]);
    const eventTableData = ref([
      {
        event: "itemClick",
        params: "asideObj",
        desc: "点击 aside 组件每一项触发的事件",
      },
    ]);
    const typesTableHeader = ref([
      {
        key: "interface",
        name: "类型名称",
      },
      {
        key: "desc",
        name: "描述",
      },
      {
        key: "type",
        name: "类型结构",
      },
    ]);
    const typesTableData = ref([
      {
        interface: "asideObj",
        desc: "aside 组件每一项的数据结构",
        type: "{ name: string; [ name: string ]: any; }",
      },
    ]);
    return {
      AsideDemo,
      propsTableHeader,
      propsTableData,
      slotTableHeader,
      slotTableData,
      eventTableHeader,
      eventTableData,
      typesTableHeader,
      typesTableData,
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
