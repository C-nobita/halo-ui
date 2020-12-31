<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-table
      class="demo_table"
      :header="tableHeaderData"
      :data="tableBodyData"
    ></halo-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const tableHeaderData = ref([
      {
        key: "key1",
        name: "第一列 / key1",
      },
      {
        key: "key2",
        name: "第二列 / key2",
      },
    ]);
    const tableBodyData = ref([
      {
        key1: "123",
        key2: "456",
      },
      {
        key1: "789",
      },
      {},
    ]);
    return {
      tableHeaderData,
      tableBodyData,
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
  &_table {
    flex: 1;
  }
}
</style>
