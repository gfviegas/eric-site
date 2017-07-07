<template lang="pug">
  main
    div.scout-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-2.subtitle Escotismo
      div.hero-foot
        breadcrumb
    div.scout-container
      div.container.container-responsive.main-container
        h2.title.is-2 Escotismo
        h4.subtitle.is-4 Conheça mais sobre o Escotismo
        div.columns.is-multiline
          div.column.is-2.menu-column
            aside.menu
              p.menu-label Sobre
              ul.menu-list
                li
                  router-link(exact v-bind:to="{name: 'scoutHome'}") O Escotismo
                  router-link(exact v-bind:to="{name: 'scoutValues'}") Valores
                  router-link(exact v-bind:to="{name: 'scoutMethod'}") Método Escoteiro
                  router-link(exact v-bind:to="{name: 'scoutModality'}") Modalidades
              p.menu-label Personagens
              ul.menu-list
                li
                  router-link(exact v-bind:to="{name: 'scoutBP'}") Baden-Powell
                  router-link(exact v-bind:to="{name: 'scoutCaio'}") Caio Vianna Martins
          div.column.is-9.content-column
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
    name: 'scout',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  // SCOUT BANNER
  .scout-banner
    background-blend-mode: multiply
    background-color: rgba(0, 0, 0, 0.3)
    background-image: url('~assets/images/scout-banner.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 0 85%
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

  .scout-container
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
        text-transform: lowercase
      padding-top: 2rem
      padding-bottom: 1rem
      .columns
        justify-content: space-between
</style>
