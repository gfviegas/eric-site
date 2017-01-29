<template lang="pug">
  div.column.is-narrow.columns.box(v-bind:class="cClass")
    div.column.is-one-third.icon-section(v-bind:style="{backgroundImage: url }")
    div.column.content-section: slot
</template>

<script>
  export default {
    name: 'shortcut',
    props: ['p1', 'p2', 'icon', 'cClass'],
    computed: {
      url () {
        const img = require('../../assets/images/shortcut-icons/' + this.icon.toLowerCase() + '.png')
        return 'url(' + img + ')'
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .box
    border-radius: 0
    padding: 0
    min-height: 10rem
    text-transform: uppercase
    +mobile, +tablet
      width: auto
      margin-bottom: 2rem !important
    +desktop
      width: 22rem
      margin-bottom: 0 !important
    p
      font-size: 1.15rem
      text-align: left
      color: white

    // COLORS
    &.is-light-blue
      background: #77b3d4
    &.is-verde-limao
      background: $verde-limao
    &.is-pink
      background: #d49377
    &.is-red
      background: #da5f73
    &.is-dark-green
      background: #40573d
    &.is-purple
      background: #6e20a0

    .icon-section
      +mobile
        background-size: contain
        background-repeat: no-repeat
        background-position: center
        min-height: 10rem
      +desktop
        background-size: cover
        background-position: -1rem, 0
        min-height: 0

      display: flex
      flex-direction: column
      justify-content: center
    .content-section
      display: flex
      flex-direction: column
      justify-content: space-between
</style>
