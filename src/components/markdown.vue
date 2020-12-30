<template>
  <article class="markdown-body color_white" v-html="content"></article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.color_white {
  color: white !important;
  text-align: left !important;
  text-indent: 2em;
}

</style>
