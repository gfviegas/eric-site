<template lang="pug">
  main
    div.institutional-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h3.is-3.subtitle Por um mundo mais aventureiro,
          h3.is-3.subtitle Repleto de fraternidade e desafios.
          h3.is-3.subtitle gratidão.. sempre... alerta!
      div.level.lime.hero-foot
        nav.level-left
        nav.level-right
          div.level-item
            span.icon: i.fa.fa-circle.is-active
            - for (var x = 0; x < 3; x++)
              span.icon: i.fa.fa-circle
    transition(name="fade")
      router-view
    div.shortcuts
      div.columns.container.container-responsive
        div.column.columns
          div.column
            h1.title.is-2 Acesso Rápido
            div.column.columns.justify-center.shortcuts-column.is-multiline
              shortcut(c-class="is-light-blue" icon="bookshelf")
                p Documentos
                p Ofícios, resoluções e outros
              shortcut(c-class="is-verde-limao" icon="knot")
                p Calendário de Cursos de Formação pra Adultos - 2017
              shortcut(c-class="is-pink" icon="calendar")
                p Calendário de Eventos 2017
              shortcut(c-class="is-red" icon="letter")
                p Newsletter Regional
                p Informativo da Região Escoteira de Minas Gerais
              shortcut(c-class="is-dark-green" icon="people")
                p Conheça os Grupos Escoteiros de Minas Gerais
              shortcut(c-class="is-purple" icon="bureau")
                p Documentos
                p Ofícios, Resoluções e Outros
</template>

<script>
  import Shortcut from '../../components/shortcut/Shortcut.vue'

  export default {
    components: {
      'shortcut': Shortcut
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
    background-image: url('~assets/images/home-banner.jpg')
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
    .hero-foot
      min-height: 3rem
      background: rgba(176, 211, 83, 0.6)
      .level-right
        +mobile
          margin-top: 0.75rem
        +desktop
          padding-right: 5%
        .icon
          margin-left: 0.25rem
        .fa-circle
          color: rgba(255, 255, 255, 0.7)
          &.is-active
            color: darken($verde-limao, 30%)
  // SHORTCUTS SECTION
  .shortcuts
    background: #ecf9ff
    border-top: 3px solid #1b6c96
    padding-top: 2rem
    padding-bottom: 5rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    .title
      color: #1c9ad5
      margin-bottom: 1.5rem
    .justify-center
      +desktop
        justify-content: space-between
    .shortcuts-column
      margin-top: 2rem

</style>
