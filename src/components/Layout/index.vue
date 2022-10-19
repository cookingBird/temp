<template>
  <div
    class="layout-wrapper"
    v-bind="$utils.exceptKeys(options,'header','content','footer')"
  >
    <header
      v-if="options.header"
      v-show="options.header.visible === void 0 ? true : options.header.visible"
      v-bind="options.header"
      v-on="options.header.listeners"
    >
      {{options.header.content}}
      <slot name="header"></slot>
    </header>
    <content
      v-if="options.content"
      v-show="options.content.visible === void 0 ? true : options.content.visible"
      v-bind="options.content"
      class="overflow-hidden"
      v-on="options.content.listeners"
    >
      {{options.content.content}}
      <slot name="content"></slot>
    </content>
    <footer
      v-if="options.footer"
      v-show="options.footer.visible === void 0 ? true : options.footer.visible"
      v-bind="options.footer"
      v-on="options.footer.listeners"
    >
      {{options.footer.content}}
      <slot name="footer"></slot>
    </footer>
    <slot></slot>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  name: "layout",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
}
</script>
