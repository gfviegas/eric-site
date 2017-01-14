<template lang="pug">
  main.hello
    my-header
    div.hero
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
    div.news
      div.columns.container
        div.column.is-7.columns.is-offset-1
          div.column
            h1.title.is-2 Notícias
            div.columns.align-items-center
              div.column.is-4.has-text-centered
                figure.image.is-square
                  img(src="http://bulma.io/images/placeholders/480x480.png")
              div.column.new-content
                h5.subtitle.is-5 titulo da materia em destaque, blá blá blá blá blá blá
                p.content Lorem ipsum dolor sit amet, con se cte tur adipis elit. Quisque in turpis eu velit iaculis ornare. Praesent dapibus enim a nisl conse ctetur fringilla. In condiment um id urna ut feugiat.
                more-button(c-class="is-primary") Saiba +

        div.column.is-5.columns.right-column
          div.column
            search-field
            - for (var x = 0; x < 3; x++)
              new-highlight
            more-button(c-class="is-primary") Saiba +
    br
    br
    br
    br
    br
</template>

<script>
  import Header from '../../components/header/Header.vue'
  import MoreButton from '../../components/buttons/MoreButton.vue'
  import SearchField from '../../components/input/SearchField.vue'
  import NewHighlight from '../../components/news/NewHighlight.vue'

  export default {
    components: {
      'my-header': Header,
      'more-button': MoreButton,
      'search-field': SearchField,
      'new-highlight': NewHighlight
    },
    name: 'home',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .hero
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

  .news
    padding-top: 1rem
    background: #f6fce6
    text-align: justify
    > .container
      padding-top: 2%
    .title
      color: $primary
    .subtitle
      text-transform: uppercase
      font-weight: bold
      margin-bottom: 10px
    .right-column
      +desktop
        padding-left: 2rem
</style>
