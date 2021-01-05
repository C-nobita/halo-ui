<demo>
使用示例
</demo>
<template>
  <div class="demo">
    <halo-carousel :itemList="list" :itemBackgrounds="backgrounds"></halo-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const list = ref([
      { type: "text", text: "123" },
      {
        type: "image",
        image:
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2471826223,1654648024&fm=26&gp=0.jpg",
      },
      { type: "text", text: "789" },
    ]);
    const backgrounds = ref(["#123", "#456", "#789"]);
    return {
      list,
      backgrounds,
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
}
</style>
