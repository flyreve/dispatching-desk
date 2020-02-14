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
      const menuIcon = `iconfont ${icon}`
      vnodes.push(<i class={menuIcon}/>)
      // vnodes.push(<svg-icon icon-class={'play'} class={'menu-svg-icon'}/>)
    }

    if (title) {
      vnodes.push(<span slot='title' class="fz-10 ml-10">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
