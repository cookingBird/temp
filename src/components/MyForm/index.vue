<template>
  <el-form
    v-bind="$utils.exceptKeys(options,'columns','listeners','footer','footerOptions')"
    :model="model"
    :rules="rules"
    v-on="options.listeners"
    class="myForm-container"
  >
    <el-row v-bind="options.row">
      <template v-for="col of options.columns">
        <el-col
          v-bind="col.col"
          :key="col.prop"
        >
          <el-form-item
            v-show="col.visible === void 0 ? true : col.visible"
            v-bind="col.itemProps"
            :prop="col.prop"
            :label="col.label"
          >
            <el-input
              v-if="col.type ==='input'"
              v-bind="$utils.exceptKeys(col,'itemProps','prop','label','listeners')"
              v-on="col.listeners"
              v-model="model[col.prop]"
            ></el-input>
            <el-select
              v-else-if="col.type ==='select' && col.options"
              v-bind="$utils.exceptKeys(col,'itemProps','prop','label','listeners')"
              v-on="col.listeners"
              v-model="model[col.prop]"
            >
              <el-option
                v-for="item,index in col.col"
                :key="index"
                v-bind="item"
              >
              </el-option>
            </el-select>
            <slot
              v-else-if="col.slot"
              :name="col.slotName || col.prop"
            ></slot>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
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
export default {
  name: "MyForm",
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
