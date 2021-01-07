<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-tabs v-model:tab="currentTab" @change="changeHandler">
      <halo-tabs-item
        v-for="(item, index) in tabsArr"
        :key="index"
        :lable="item.lable"
        :name="item.name"
        >{{ item.content }}</halo-tabs-item
      >
      <halo-tabs-item :lable="3" name="0_ 0">789</halo-tabs-item>
    </halo-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const tabsArr = reactive([
      {
        lable: 1,
        name: "-. -",
        content: "123",
      },
      {
        lable: 2,
        name: "=_ =",
        content: "456",
      },
    ]);

    const currentTab = ref("");

    const changeHandler = (tab) => {
      console.log("tabs changed!", tab);
    };

    return {
      currentTab,
      tabsArr,
      changeHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
