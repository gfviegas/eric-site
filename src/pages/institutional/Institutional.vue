<template lang="pug">
  main
    div.institutional-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-2.subtitle Institucional
      div.hero-foot
        breadcrumb
    transition(name="fade")
      router-view
    shortcuts
</template>

<script>
  import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'
  import Shortcuts from '../../components/shortcuts/Shortcuts.vue'

  export default {
    components: {
      'shortcuts': Shortcuts,
      'breadcrumb': Breadcrumb
    },
    name: 'institutional',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  // INSTITUTIONAL BANNER
  .institutional-banner
    background-blend-mode: multiply
    background-color: rgba(0, 0, 0, 0.3)
    background-image: url('~assets/images/institutional-banner.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 0 50%
    .hero-body
      padding-top: 12rem
      min-height: 25rem
      section.container
        text-align: left
      .subtitle
        margin-bottom: 0px
        color: white
        text-transform: uppercase
        font-family: 'Roboto'
        font-weight: 300
</style>
