<template lang="pug">
  div.level.lime
    nav.level-left
      div.level-item
        h4.subtitle.is-5 {{text}}
    nav.level-right
      div.level-item
        p O que você procura?
</template>

<script>
  export default {
    computed: {
      text () {
        return this.$route.meta.breadcrumb
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/common'
  .level
    min-height: 3rem
    background: $light-gray
    display: flex
    width: 100%
    justify-content: space-between
    flex-direction: column
    +desktop
      justify-content: space-between
      flex-direction: row
    .level-left
      +mobile
        margin-top: 0.75rem
      +desktop
        padding-left: 6%
      .subtitle
        font-weight: 300
        color: black
        font-style: italic
    .level-right
      +mobile
        margin-top: 0.75rem
      +desktop
        padding-right: 5%

</style>
