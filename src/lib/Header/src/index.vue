<template>
  <div class="halo_header halo_hover">
    <div class="halo_header_wraper halo_none" :class="theme">
      <div class="halo_header_wraper_left">123</div>
      <div class="halo_header_wraper_content" :class="theme">
        <Button
          @click="emit('itemClick', item)"
          type="custom"
          class="halo_header_wraper_content_item"
          v-for="(item, index) in headerList"
          :key="index"
          >{{ item }}</Button
        >
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import
import Button from "../../Button";
import { defineComponent, computed, getCurrentInstance } from "vue";

export default defineComponent({
  name: "halo-header",
  props: {
    type: {
      type: String,
      default: "",
    },
    loading: Boolean,
    headerList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const { emit } = getCurrentInstance();
    const theme = computed(() => [`halo_header_wraper_${props.type}`]);
    return {
      emit,
      theme,
    };
  },
});
</script>

<style lang="scss" scoped>
$color: #333;
$white: #fff;
.halo_header {
  color: $color;
  width: 100%;
  height: 60px;
  background-color: rgba($white, 0.3);
  box-sizing: border-box;
  overflow: hidden;
  transition: all linear 0.6s;
  padding: 0 0 2px;
  &_wraper {
    height: 100%;
    width: 100%;
    background-color: $color;
    color: $white;
    display: flex;
    justify-content: space-around;
    &_content {
      &_item {
        width: 150px;
        padding: 0;
        text-align: center;
        height: 100%;
      }
      &_item:hover {
        padding: 0 2px;
      }
    }
    &_left {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &_wraper_between {
    justify-content: space-between;
  }
}
</style>
