<template lang="pug">
  div.level
    nav.level-left
      div.level-item
        h4.subtitle.is-5 {{text}} {{sufix}}
    //- nav.level-right
      .field.level-item
        p.control.has-icon.has-icon-right
          input.input.is-expanded(type="text" placeholder="O que você procura?" name="search" v-model="search")
          span.icon.is-right.is-small
            i.fa.fa-search
</template>

<script>
  export default {
    props: {
      sufix: {
        required: false,
        default: ''
      }
    },
    data () {
      return {
        search: ''
      }
    },
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
    z-index: 5
    min-height: 4rem
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
      .control
        min-width: 25rem
        .icon
          color: $dark

</style>
