<template>
  <div>
    <h2>DatePicker 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="DatePicker" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    暂无
    <h3>Events</h3>
    <halo-table :header="eventTableHeader" :data="eventTableData"></halo-table>
    <h3>types</h3>
    暂无
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import DatePicker from "../components/DatePicker.demo.vue";
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
        name: "类型",
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
        prop: "date",
        desc: "初始值",
        default: "new Date()",
        require: "false",
        type: "Date",
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
        event: "picked",
        params: "date",
        paramsType: "Date",
        desc: "选中日期时触发的事件",
      },
    ]);

    return {
      DatePicker,
      propsTableHeader,
      propsTableData,
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
