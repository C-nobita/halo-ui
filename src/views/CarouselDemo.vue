<template>
  <div>
    <h2>Carousel 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="CarouselDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    <halo-table :header="slotTableHeader" :data="slotTableData"></halo-table>
    <h3>Events</h3>
    暂无
    <h3>types</h3>
    <halo-table :header="typesTableHeader" :data="typesTableData"></halo-table>
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import CarouselDemo from "../components/Carousel.demo.vue";
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
        prop: "loop",
        desc: "是否开启循环",
        default: "true",
        require: "false",
      },
      {
        prop: "duration",
        desc: "轮播间隔时间 / 为 (0|null|''|undefined|false) 则不会开启轮播",
        default: "3000",
        require: "false",
      },
      {
        prop: "itemList",
        desc: "轮播项，可以是图片也可以是文字",
        default: "carouselObj[ ]",
        require: "true",
      },
      {
        prop: "itemBackgrounds",
        desc: "轮播项的背景颜色，长度不需要和轮播项一致",
        default: "color[ ]",
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
        slot: "left",
        desc: "左侧按钮插槽",
      },
      {
        slot: "right",
        desc: "右侧按钮插槽",
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
        interface: "carouselObj",
        desc: "carousel 组件每一项的数据结构",
        type: "{ type: 'text' | 'image'; text?: string; image?: string; }",
      },
    ]);
    return {
      CarouselDemo,
      propsTableHeader,
      propsTableData,
      slotTableHeader,
      slotTableData,
      typesTableHeader,
      typesTableData
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
