function exceptKeys (source,...keys) {
  if (!keys?.length) return source;
  return keys.reduce((pre,cur) => ({
    ...pre,
    [cur]: source[cur],
  }),{});
}
function renderFunctionalEl (h,options,ctx) {
  return h(
    options.type ? options.type : 'div',
    {
      class: options.class,
      style: options.style,
      attrs: options.attrs,
      on: {
        ...Object.assign({},options.listeners),
        ...Object.assign({},Object.keys(options.events || {}).reduce((pre,key) => {
          return {
            ...pre,
            [key]: () => { ctx.$emits(options.events[key]) }
          }
        },{}))
      },
    },
    (options.slot && options.slotName)
      ? ctx.$scopedSlots[options.slotName](ctx.$data)
      : options.content
        ? options.content
        : options?.children?.map(child => renderFunctionalEl(h,child,ctx))
  )
};
function renderEl (h,options,ctx,isFirst = true) {
  return h(
    options.type ? options.type : 'div',
    {
      class: options.class,
      style: options.style,
      attrs: {
        ...ctx.$utils.expectKeys(options,'src','alt')
      },
      domPress: {
        innerHtml: options.html || options.content
      },
      on: {
        ...Object.assign({},options.listeners),
        ...Object.assign({},Object.keys(options.events || {}).reduce((pre,key) => {
          return {
            ...pre,
            [key]: () => { ctx.$emits(options.events[key]) }
          }
        },{}))
      },
      ...ctx.$utils.exceptKeys(options,'type','class','style','html','content','listeners','events')
    },
    isFirst
      ? ((options.slot && options.slotName && ctx.$scopedSlots[options.slotName])
        ? ctx.$scopedSlots[options.slotName](ctx.$data)
        : (options.slot && !options.slotName && ctx.$scopedSlots.default)
          ? ctx.$scopedSlots.default(ctx.$data)
          : options.children
            ? options.children.map(child => renderEl(h,child,ctx,false))
            : [options.content]).concat(ctx.$slots.default)
      : ((options.slot && options.slotName && ctx.$scopedSlots[options.slotName])
        ? ctx.$scopedSlots[options.slotName](ctx.$data)
        : (options.slot && !options.slotName && ctx.$scopedSlots.default)
          ? ctx.$scopedSlots.default(ctx.$data)
          : options.children
            ? options.children.map(child => renderEl(h,child,ctx,false))
            : [options.content])
  )
}
export default {
  // functional: true,
  props: {
    options: {
      type: Object
    }
  },
  render (h,ctx) {
    return renderEl(h,this.options,this)
  }
}
