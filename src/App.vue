<template>
  <div class="app">
    <Header :headerList="[1231231, 123123, 123]" @itemClick="test" />
    <Button disabled>hah</Button><Button @click="visible = true">hah</Button>
    <Dialog v-model:visible="visible" />
  </div>
</template>

<script lang="ts">
import { Button, Header, Dialog } from "./lib/index"
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    Button,
    Header,
    Dialog
  },
  setup() {
    const visible = ref(false);
    const test = (a) => {
      console.log(a)
    }
    return {
      visible,
      test
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss"; 
  .app {
    background:"/wallhaven-ym1wp7";
    height: 100vh;
  }
  .hover_font {
    color: lightslategray !important;
    // font-weight: 900 !important;
  }
</style>
