<template>
  <div class="lighting_dialong lighting_light_hover">
    
  </div>
</template>

<script lang="ts">
// import
import Button from "./Button.vue";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "lighting-button",
  props: {
    centralize: Boolean,
    loading: Boolean,
    headerList: {
      type: Array,
      default: [],
    },
  },
  components: {
    Button,
  },
  setup(props, { emit }) {
    const theme = computed(() => [props.centralize ? 'centralize' : ''])
    return {
      emit,
      theme,
    };
  },
});
</script>

<style lang="scss" scoped>
$h: 39px;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$white: #fff;
.lighting_dialong {
  
}

</style>
