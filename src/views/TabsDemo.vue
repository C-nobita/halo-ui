<template>
  <div>
    <h2>Tabs 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="TabsDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    暂无
    <h3>Events</h3>
    <halo-table :header="eventsTableHeader" :data="eventsTableData"></halo-table>
    <h3>Types</h3>
    <halo-table :header="typesTableHeader" :data="typesTableData"></halo-table>
    <h3>TabsItem 子组件 Props</h3>
    <halo-table :header="propsTableHeader" :data="TabsPropsTableData"></halo-table>
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import TabsDemo from "../components/Tabs.demo.vue";
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
        prop: "tab",
        desc: "当前对应 tab 页的lable",
        default: "",
        require: "true",
        type: "Number | String",
      },
    ]);
    const eventsTableHeader = ref([
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
    const eventsTableData = ref([
      {
        event: "change",
        params: "item",
        paramsType: "tabObj",
        desc: "tab 发生切换时触发的事件",
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
        interface: "tabObj",
        desc: "每个 tab 的参数对象",
        type: "{ lable: String | Number; name: String | Number; [name?: string]: any }",
      },
    ]);
    const TabsPropsTableData = ref([
      {
        prop: "lable",
        desc: "每个 tab 页对应的 lable 与父组件 tab props对应",
        default: "",
        require: "true",
        type: "Number | String",
      },
      {
        prop: "name",
        desc: "每个 tab 页对应的标题",
        default: "",
        require: "true",
        type: "Number | String",
      },
    ])
    return {
      TabsDemo,
      propsTableHeader,
      propsTableData,
      eventsTableHeader,
      eventsTableData,
      typesTableHeader,
      typesTableData,
      TabsPropsTableData
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
