export default {
  name: 'DragItem',
  props: {
    options: {
      type: Object,
      required: true,
    },
    props: {
      type: Object,
      default: () => ({
        id: 'id',
        label: 'name',
      })
    },
    nodeData: {
      type: Object
    },
    elValidator: {
      type: Function,
      default () {
        return (e) => e.target.className == "x6-graph-svg";
      },
    },
  },
  render (h) {
    const defaultSlot = this.$slots.default;
    return h(
      'div',
      {
        attrs: {
          draggable: true,
          id: this.nodeData[this.props.id],
        },
      },
      defaultSlot || this.nodeData[this.props.label],
    );
  },
};
