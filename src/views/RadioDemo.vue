<template>
  <div>
    <h2>Radio 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="RadioDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="slotTableData"></halo-table>
    <h3>Events</h3>
    <halo-table :header="eventTableHeader" :data="eventTableData"></halo-table>
    <h3>types</h3>
    暂无
    <h2>RadioGroup 组件</h2>
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="secPropsTableData"></halo-table>
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="secSlotTableData"></halo-table>
    <h3>Events</h3>
    <halo-table :header="eventTableHeader" :data="secEventTableData"></halo-table>
    <h3>types</h3>
    暂无
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import RadioDemo from "../components/Radio.demo.vue";
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
        prop: "lable",
        type: "String | Number",
        desc: "单选框选中时的值",
        default: "",
        require: "true",
      },
      {
        prop: "disabled",
        desc: "是否禁用单选框",
        type: "Boolean",
        default: "false",
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
        slot: "default",
        desc: "单选框对应的文字描述",
      },
    ]);
    const secSlotTableData = ref([
      {
        slot: "default",
        desc: "Radio 组件的容器",
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
        event: "checked",
        params: "lable",
        paramsType: "lable",
        desc: "每一项的 radio 对应的 lable",
      },
    ]);
    const secPropsTableData = ref([
      {
        prop: "value",
        type: "String | Number",
        desc: "当前单选框组的选中值",
        default: "",
        require: "false",
      },
    ]);
    const secEventTableData = ref([
      {
        event: "change",
        params: "lable",
        paramsType: "lable",
        desc: "每一项的 radio 对应的 lable",
      },
    ])
    return {
      propsTableHeader,
      propsTableData,
      RadioDemo,
      eventTableHeader,
      eventTableData,
      secPropsTableData,
      secEventTableData,
      slotTableHeader,
      slotTableData,
      secSlotTableData
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
