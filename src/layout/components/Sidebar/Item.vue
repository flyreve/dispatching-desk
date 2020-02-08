<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<i class={icon}/>)
      // vnodes.push(<svg-icon icon-class={'play'} class={'menu-svg-icon'}/>)
    }

    if (title) {
      vnodes.push(<span slot='title' class="fz-10">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
