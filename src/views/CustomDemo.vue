<template>
  <div>
    如果你需要一个与组件库类似的光晕效果，请在目标元素上添加在 .halo_hover 的 class
    <br />
    示例:
    <div class="demo">
      <div style="width: 100%; height: 100px;" class="halo_hover"></div>
    </div>
    示例代码:
    <pre class="code" v-html="html1"></pre>
    <!-- ================== -->
    <br />
    如果你需要一个与组件库类似的边框效果，那你可以这样做
    <br />
    示例:
    <div class="demo">
      <div style="width: 100%; height: 100px; padding: 2px; box-sizing: border-box" class="halo_hover">
        <div style="width: 100%; height: 100%; background: grey;"></div>
      </div>
    </div>
    示例代码:
    <pre class="code" v-html="html2"></pre>
    <!-- ================== -->
    <br />
    如果你觉得内容也加上了光晕的效果不好看，那么你可以对内容的光晕屏蔽，只要加上 .halo_none 的类即可
   <br />
    示例:
    <div class="demo">
      <div style="width: 100%; height: 100px; padding: 2px; box-sizing: border-box" class="halo_hover">
        <div style="width: 100%; height: 100%; background: grey;" class="halo_none"></div>
      </div>
    </div>
    示例代码:
    <pre class="code" v-html="html3"></pre>
    <!-- ================== -->
    你还可以在全局定义一个 .hover_font 用来修改，光晕填充的内容字体样式。
    <br />
    根据以上的基础示例来自定义你的组件吧。
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
const Prism = (window as any).Prism;
export default defineComponent({
  setup() {
    const html1 = computed(() => {
      return Prism.highlight('<div style="width: 100%; height: 100px;" class="halo_hover"></div>', Prism.languages.html, "html");
    });
    const html2 = computed(() => {
      return Prism.highlight(`<div style="width: 100%; height: 100px; padding: 2px; box-sizing: border-box" class="halo_hover">
  <div style="width: 100%; height: 100%; background: grey;"></div>
</div>`, Prism.languages.html, "html");
    });
    const html3 = computed(() => {
      return Prism.highlight(`<div style="width: 100%; height: 100px; padding: 2px; box-sizing: border-box" class="halo_hover">
  <div style="width: 100%; height: 100%; background: grey;" class="halo_none"></div>
</div>`, Prism.languages.html, "html");
    });
    return {
      html1,
      html2,
      html3
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  color: white;
  text-align: left;
  .tip {
    font-size: 12px;
  }
  .code {
    background-color: #fff;
    padding: 16px;
    text-align: left;
    overflow-x: auto;
  }
  .demo {
    border: dashed gray 2px;
    padding: 10px;
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
