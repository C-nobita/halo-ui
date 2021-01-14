<template>
  <div>
    <h2>Input 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="InputDemo" />
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
import InputDemo from "../components/Input.demo.vue";
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
        prop: "inputType",
        desc: "输入框类型 text | password",
        default: "text",
        require: "false",
        type: "string",
      },
      {
        prop: "showPassword",
        desc: "如果是密码框的话，显示显示密码的按钮",
        default: "false",
        require: "false",
        type: "Boolean",
      },
      {
        prop: "value",
        desc: "输入框的值",
        default: "",
        require: "true",
        type: "string | number",
      },
      {
        prop: "type",
        desc: "组件类型/为 custom 自定义样式",
        default: "",
        require: "false",
        type: "String",
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
        event: "",
        params: "",
        paramsType: "",
        desc: "未提供，请获取该组件实例中的 originalEl(即为原生input元素) 来绑定对应原生事件",
      },
    ]);

    return {
      InputDemo,
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
