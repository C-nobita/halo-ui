<template>
  <div>
    <h2>Table 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="TableDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    暂无
    <h3>Events</h3>
    暂无
    <h3>types</h3>
    <halo-table :header="typesTableHeader" :data="typesTableData"></halo-table>
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import TableDemo from "../components/Table.demo.vue";
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
        prop: "header",
        desc: "标题列表",
        default: "tableHedaerObj[ ]",
        require: "true",
      },
      {
        prop: "data",
        desc: "表体列表",
        default: "tableBodyObj[ ]",
        require: "true",
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
        interface: "tableHedaerObj",
        desc: "table 组件表头每一项的数据结构 每一项有且只有一个 key",
        type: "{ key: string; name: string; }",
      },
      {
        interface: "tableBodyObj",
        desc: "table 组件表体每一项的数据结构 / key与表头key对应",
        type: "{ [key: string]: string; }",
      },
    ]);
    return {
      TableDemo,
      propsTableHeader,
      propsTableData,
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
