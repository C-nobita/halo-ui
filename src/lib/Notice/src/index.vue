<template>
  <div class="halo_notice halo_hover">
    <div class="halo_notice_wraper halo_none">
      <div class="halo_notice_wraper_header">
        <span class="halo_notice_wraper_header_title">{{ title }}</span>
        <span class="halo_notice_wraper_header_cancel iconfont" @click="cancel"
          >&#xe71a;</span
        >
      </div>
      <div class="halo_notice_wraper_content" v-html="html ? html : content">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
export default defineComponent({
  name: "halo-notice",
  props: {
    render: Function,
    duration: {
      type: Number,
      default: 3000,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    cancel: Function,
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    html: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    let timer;
    let closeTimer;
    onMounted(() => {
      timer = setTimeout(() => {
        props.render && props.render();
      }, 100);
      if (props.duration) {
        closeTimer = setTimeout(() => {
          props.cancel()
        }, Number(props.duration))
      }
    });
    onBeforeUnmount(() => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "../../halo.scss";
.halo_notice {
  padding: 2px;
  background-color: rgba($color: #fff, $alpha: 0.3);
  &_wraper {
    min-width: 200px;
    min-height: 100px;
    background-color: $color;
    padding: 10px;
    color: $white;
    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_title {
        font-size: 16px;
      }
      &_cancel {
        cursor: pointer;
        font-size: 12px;
      }
    }
    &_content {
      font-size: 12px;
    }
  }
}
</style>
