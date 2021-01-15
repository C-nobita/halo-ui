<template>
  <div>
    <h2>Dialog 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="DialogDemo" />
    <h3>Props</h3>
    <halo-table :header="propsTableHeader" :data="propsTableData"></halo-table>
    <h3>Slots</h3>
    暂无
    <h3>Events</h3>
    暂无
    <h3>Types</h3>
    暂无
    <h3>以API的方式使用</h3>
    <pre class="code" v-html="code"></pre>
    <h3>MethodConifg</h3>
    <halo-table :header="methodConfigHeader" :data="methodConfigData"></halo-table>
    <h3>MethodReturn</h3>
    <halo-table :header="methodReturnHeader" :data="methodReturnData"></halo-table>
  </div>
</template>

<script lang="ts">
const Prism = (window as any).Prism;
import Demo from "../components/Demo.vue";
import DialogDemo from "../components/Dialog.demo.vue";
import { defineComponent, ref, computed } from "vue";
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
        prop: "visible",
        desc: "显示dialog",
        default: "false",
        require: "false",
        type: "Boolean",
      },
      {
        prop: "confirm",
        desc: "点击dialog的确认按钮",
        default: "() => void",
        require: "false",
        type: "Function",
      },
      {
        prop: "content",
        desc: "dialog的提示内容",
        default: "",
        require: "false",
        type: "String",
      },
      {
        prop: "confirmTxt",
        desc: "确认按钮的文案",
        default: "好的",
        require: "false",
        type: "String",
      },
    ]);
    const methodConfigHeader = ref([
      {
        key: "key",
        name: "属性",
      },
      {
        key: "desc",
        name: "描述",
      },
      {
        key: "type",
        name: "类型结构",
      },
      {
        key: "default",
        name: "默认值",
      },
      {
        key: "require",
        name: "是否必须",
      },
    ]);
    const methodConfigData = ref([
      {
        key: "confirm",
        desc: "点击确认按钮执行的方法",
        type: "Function",
        default: '() => {}',
        require: "false",
      },
      {
        key: "content",
        desc: "内容",
        type: "String",
        default: "",
        require: "false",
      },
      {
        key: "confirmTxt",
        desc: "确认按钮的文字描述",
        type: "String",
        default: "好的",
        require: "false",
      },
      {
        key: "clickOverlayCancel",
        desc: "点击蒙板层是否关闭",
        type: "Boolean",
        default: "true",
        require: "false",
      },
    ]);
    const methodReturnHeader = ref([
      {
        key: "key",
        name: "字段",
      },
      {
        key: "desc",
        name: "描述",
      },
    ]);
    const methodReturnData = ref([
      {
        key: "close",
        desc: "调用会关闭当前实例",
      },
    ]);
    const code = computed(() => {
      return Prism.highlight(
        `const { proxy } = getCurrentInstance();
proxy.$callDialog(config?: MethodConifg): MethodReturn;`,
        Prism.languages.js,
        "js"
      );
    });

    return {
      DialogDemo,
      propsTableHeader,
      propsTableData,
      code,
      methodConfigHeader,
      methodConfigData,
      methodReturnHeader,
      methodReturnData,
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
.code {
  background-color: #fff;
  padding: 16px;
  text-align: left;
  overflow-x: auto;
  color: black;
  margin: 10px 0;
}
</style>
