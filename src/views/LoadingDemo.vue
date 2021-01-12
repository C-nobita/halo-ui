<template>
  <div>
    <h2>Loading 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="LoadingDemo" />
    <h3>Props</h3>
    暂无
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="slotTableData"></halo-table>
    <h3>Events</h3>
    暂无
    <h3>types</h3>
    暂无
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import LoadingDemo from "../components/Loading.demo.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
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
        desc: "组件内容提示",
      },
    ]);
    return {
      LoadingDemo,
      slotTableHeader,
      slotTableData
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
