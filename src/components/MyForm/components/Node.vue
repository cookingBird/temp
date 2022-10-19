<template>
  <el-form-item
    v-show="options.visible === void 0 ? true : option.visible"
    v-bind="options.itemProps"
    :prop="options.prop"
    :label="options.label"
  >
    <el-input
      v-if="options.type ==='input'"
      v-bind="$utils.exceptKeys(options,'itemProps','prop','label','listeners')"
      v-on="options.listeners"
      v-model="model[options.prop]"
    ></el-input>
    <el-select
      v-else-if="options.type ==='select' && options.options"
      v-bind="$utils.exceptKeys(options,'itemProps','prop','label','listeners')"
      v-on="options.listeners"
      v-model="model[options.prop]"
    >
      <el-option
        v-for="item,index in options.options"
        :key="index"
        v-bind="item"
      >
      </el-option>
    </el-select>
    <el-select
      v-else-if="options.type ==='select' && options.url"
      v-bind="$utils.exceptKeys(options,'itemProps','prop','label','listeners')"
      v-on="options.listeners"
      v-model="model[options.prop]"
    >
      <el-option
        v-for="item,index in selectOptions"
        :key="index"
        v-bind="item"
      >
      </el-option>
    </el-select>

  </el-form-item>
</template>

<script>

export default {
  name: "Node",
  components: {},
  props: {
    options: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  provide () {
    return {};
  },
  data () {
    return {
      selectOptions: []
    };
  },
  watch: {
    "options.url": {
      immediate: true,
      handler (val,oldVal) {
        const { type } = this.options;
        if (type === 'select' && val && val != oldVal) {
          this.fetchData()
        }
      }
    }
  },
  methods: {
    fetchData (options) {
      const { url,method = 'get',request = '$http',data,params,callback } = this.options;
      this[request].request({
        url,
        method,
        data,
        params
      }).then(({ data,code }) => {
        if (code === 200) {
          this.selectOptions = callback ? callback(data) : data;
        }
      })
    }
  },
}
</script>
