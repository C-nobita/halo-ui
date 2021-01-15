<template>
  <div>
    <h2>Notice 组件</h2>
    <span class="tip">ps: 如果你需要自定义组件样式请加上 type 属性并且值为 custom.</span>
    <Demo :component="NoticeDemo" />
    <h3>Props</h3>
    暂无
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
import NoticeDemo from "../components/Notice.demo.vue";
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
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
        key: "duration",
        desc: "Notice 组件自动关闭的时间，为0则不会自动关闭",
        type: "Number",
        default: 3000,
        require: "false",
      },
      {
        key: "showClose",
        desc: "显示关闭按钮",
        type: "Boolean",
        default: "true",
        require: "false",
      },
      {
        key: "title",
        desc: "标题",
        type: "String",
        default: "",
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
        key: "html",
        desc: "内容 / 对比content字段，html会优先显示",
        type: "JSX",
        default: "",
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
proxy.$notice(config?: MethodConifg): MethodReturn;`,
        Prism.languages.js,
        "js"
      );
    });
    return {
      NoticeDemo,
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
