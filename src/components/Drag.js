export default {
  name: 'Drag',
  render (h) {
    return this.$slots.default ? h("div",this.$slots.default) : null;
  },
  data () {
    return {
      dragged: null,
    };
  },
  props: {
    elValidator: {
      type: Function,
      default () {
        return (e) => e.target.className == "x6-graph-svg";
      },
    },
    options: { type: Object },
    data: Array,
    props: {
      type: Object,
      default: () => ({ id: 'id' })
    }
  },
  mounted () {
    const target = document.getElementById('bys-graph-container');
    document.addEventListener("dragstart",this.dragStart,false);
    document.addEventListener("drag",this.drag,false);
    document.addEventListener("dragend",this.dragEnd,false);
    /* 放置目标元素时触发事件 */
    document.addEventListener("dragover",this.dragOver,false);
    document.addEventListener("dragenter",this.dragEnter,false);
    document.addEventListener("dragleave",this.dragLeave,false);
    document.addEventListener("drop",this.drop);
  },
  beforeDestory () {
    document.addEventListener("dragstart",this.dragStart,false);
    document.removeEventListener("drag",this.drag);
    document.removeEventListener("dragend",this.dragEnd);
    /* 放置目标元素时触发事件 */
    document.removeEventListener("dragover",this.dragOver);
    document.removeEventListener("dragenter",this.dragEnter);
    document.removeEventListener("dragleave",this.dragLeave);
    document.removeEventListener("drop",this.drop);
    this.dragged = null;
  },
  methods: {
    dragStart (event) {
      // 保存拖动元素的引用 (ref.)
      this._drag = e;
      // 使其半透明
      // event.target.style.opacity = 0.7;
      console.log('dragStart',event);
      this.__draggingId = event.target.id;
      this.$emit("dragstart",event);
    },
    /* 拖动目标元素时触发 drag 事件 */
    drag (e) {
      this._drag = e;
    },
    // 重置透明度
    dragEnd (event) {
      event.target.style.opacity = "";
      this.$emit("dragend",event);
    },
    dragLeave (event) {
      // 当拖动元素离开可放置目标节点，重置其背景
      if (this.elValidator(event)) {
        event.target.style.border = this.border;
        this.$emit("dragleave",event);
      }
    },
    /**
     * 阻止默认动作以启用 drop,
     * 如不阻止默认事件则不会触发drop
     * @param {*} event
     */
    dragOver (event) {
      event.preventDefault();
    },
    dragEnter (event) {
      // 当可拖动的元素进入可放置的目标时高亮目标节点
      if (this.elValidator(event)) {
        this.border = event.target.style.border;
        event.target.style.borderWidth = "3";
        this.$emit("dragenter",event);
      }
    },
    drop (event) {
      // 阻止默认动作（如打开一些元素的链接）
      event.preventDefault();
      // 将拖动的元素到所选择的放置目标节点中
      if (this.elValidator(event)) {
        event.target.style.border = this.border;
        this.border = void 0;
        const pos = this.getDragOffsetPos(event.target);
        const source = this.data?.find(unit => unit[this.props.id] === this.__draggingId)
        this.$emit("drop",{ ...pos,...Object.assign({},source) });
      }
    },
    getDragOffsetPos (el) {
      const { clientX,clientY } = this._drag;
      const { x,y } = el.getBoundingClientRect();
      return {
        x: clientX - x,
        y: clientY - y,
      };
    },
  },
};
