<template>
  <el-form
    v-bind="$utils.exceptKeys(options,'columns','listeners','footer','footerOptions')"
    :model="model"
    :rules="rules"
    v-on="options.listeners"
    class="myForm-container"
  >
    <template v-for="col,index of options.columns">
      <div
        v-if="col.type ==='div' && col.html"
        :key="index"
        v-html="col.html"
        v-bind="col"
      ></div>
      <div
        v-else-if="col.type ==='div'"
        :key="index"
        v-bind="col"
      >
        {{col.content}}
      </div>
      <Node
        v-else
        :key="index"
        :options="col"
        :model="model"
      />

    </template>
    <footer
      v-if="options.footer"
      v-show="options.footerOptions.visible === void 0 ? true :options.footerOptions.visible"
      v-bind="options.footerOptions"
    >
      <template v-for="item,index of options.footer">
        <el-button
          v-if="item.type === 'button'"
          :key="index"
          v-bind="$utils.exceptKeys(item,'type','listeners','label')"
          :type="item.size"
          v-on="item.listeners"
        >
          {{item.label}}
        </el-button>
      </template>
    </footer>
  </el-form>
</template>

<script>
import Node from './components/Node.vue'
export default {
  name: "index",
  components: { Node },
  props: {
    options: {
      type: Object,
      required: true,
    },
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object
    }
  },
}
</script>
<style lang='scss'>
.myForm-container {}
</style>
