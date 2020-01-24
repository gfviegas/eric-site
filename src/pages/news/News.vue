<template lang="pug">
  main
    div.news-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Notícias
      div.hero-foot
        breadcrumb
    transition(name="fade")
      router-view
</template>

<script>
  import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'

  export default {
    components: {
      'breadcrumb': Breadcrumb
    },
    name: 'news'
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  // NEWS BANNER
  .news-banner
    background-blend-mode: multiply
    background-color: rgba(0, 0, 0, 0.42)
    background-image: url('~assets/images/news-banner.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 0 100%
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
