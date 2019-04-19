<template>
  <svg :class="svgClass" :style="iconSize" aria-hidden="true" >
    <use :xlink:href="iconSymbol"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 24
    }
  },
  computed: {
    iconSymbol () {
      return `#icon-${this.iconName}`
    },
    svgClass () {
      return `svg-icon ${this.className ? this.className : ''}`
    },
    iconSize () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .svg-icon
    fill currentColor
    overflow hidden
</style>
