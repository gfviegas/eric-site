<template lang="pug">
  article.home-page
    section.news(v-if="news && news.length")
      div.columns
        div.column.is-7.is-paddingless
          .news-carrosel
            carousel(:banners="banners")

        div.column.is-5.right-column
          .news-highlight(v-if="news && news.length")
            h4.subtitle.is-4 O que rolou!
            section.scroll-section
              div(v-for="n in news")
                new-highlight(:data="n")
            router-link(:to="{name: 'newsList'}")
              more-button(c-class="is-orange is-small") Ver tudo
          .news-highlight(v-if="events && events.length")
            h4.subtitle.is-4 O que vai rolar...
            section.scroll-section
              div(v-for="e in events")
                new-highlight(:data="e" :is-event="true")
            router-link(:to="{name: 'eventsList'}")
              more-button(c-class="is-secondary is-small") Ver tudo
    section.bread
      breadcrumb

    div.young-section
      .container.container-responsive
        .columns.is-multiline
          .shortcut.column.is-4
            a(href="http://www.escoteirocomorgulho.com.br/" target="_BLANK")
              figure.image.is-3by2
                img(src="~assets/images/escotismo.jpg")
              p.shortcut-label Seja Escoteiro!
          .shortcut.column.is-4
            router-link(:to="{name: 'scoutHome'}")
              figure.image.is-3by2
                img(src="~assets/images/news-banner.jpg")
              p.shortcut-label O Escotismo
          .shortcut.column.is-4
            a(href="https://www.escoteiros.org.br/especialidades/" target="_BLANK")
              figure.image.is-3by2
                img(src="~assets/images/scout-banner.jpg")
              p.shortcut-label Guia de Especialidades
          .shortcut.column.is-4
            a(href="https://www.lojaescoteira.com.br/" target="_BLANK")
              figure.image.is-3by2
                img(src="~assets/images/loja-escoteira.jpg")
              p.shortcut-label Loja Escoteira
          .shortcut.column.is-4
            router-link(:to="{name: 'scoutHome'}")
              figure.image.is-3by2
                img(src="~assets/images/pioneirias.jpg")
              p.shortcut-label Pioneirias?
          .shortcut.column.is-4
            a(href="https://www.escoteiros.org.br/noticia-detalhe/o-app-de-acompanhamento-de-progressao-pessoal-esta-de-cara-nova-mais-completo-agradavel-e-facil-de-usar/" target="_BLANK")
              figure.image.is-3by2
                img(src="~assets/images/mappa.png")
              p.shortcut-label O Mapa Jovem

    section.fixed-post(v-if="fixedNews && fixedNews.title")
      div.columns.container.container-responsive
        div.column.is-3.right-column
          figure.image.is-square
            img(:src="fixedNews.image | imgSrc")
        div.column.is-9.columns
          div.column
            h2.title.is-2 {{fixedNews.title}}
            p.content(v-html="fixedNews.content")
    shortcuts
</template>

<script>
  import Vue from 'vue'

  import Carousel from './components/Carousel.vue'
  import MoreButton from '../../components/buttons/MoreButton.vue'
  import SearchField from '../../components/input/SearchField.vue'
  import NewHighlight from '../../components/news/NewHighlight.vue'
  import Shortcuts from '../../components/shortcuts/Shortcuts.vue'
  import Breadcrumb from '../../components/breadcrumb/Breadcrumb.vue'
  import newsService from '../../services/news'
  import eventsService from '../../services/events'
  import bannersService from '../../services/banners'
  import setupService from '../../services/setup'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../services/seo'
  import OneSignal from '../../services/onesignal'

  export default {
    components: {
      Carousel,
      MoreButton,
      SearchField,
      NewHighlight,
      Shortcuts,
      Breadcrumb
    },
    head: {
      title: getSeoTitle('Home'),
      meta: () => {
        return getSeoMeta({
          title: 'Home - Escoteiros de Minas',
          description: 'Site Oficial dos Escoteiros de Minas Gerais'
        })
      },
      script: () => {
        return getSeoScript({})
      }
    },
    data () {
      return {
        setup: {
          video_url: null, video_description: null
        },
        fixedNews: {},
        news: [],
        events: [],
        banners: [],
        msg: 'Stuff'
      }
    },
    methods: {
      getEventBackground (image) {
        return {
          backgroundImage: `url('${process.env.IMG_URL}${image}')`
        }
      }
    },
    async created () {
      const vm = this
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })

      OneSignal.prompt()

      const newsResponse = await newsService.get({
        page: 1,
        limit: 15,
        sort: '-createdAt'
      })
      vm.news = newsResponse.body.resources

      const eventsResponse = await eventsService.get({
        page: 1,
        limit: 15,
        end_date: {
          '$not': {
            '$lt': Vue.moment().startOf('day').toDate().toISOString()
          }
        },
        sort: 'start_date'
      })
      vm.events = eventsResponse.body.resources

      const bannersResponse = await bannersService.query()
      vm.banners = bannersResponse.body.resources

      const setupResponse = await setupService.query()
      if (setupResponse.fixedNews) {
        const newsResponse = await newsService.find(setupResponse.fixed_news)
        vm.newsResponse = newsResponse.body
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  .home-page
  // HOME BANNER
  .home-banner
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


  // NEWS SECTION
  .news
    padding-bottom: 0.3rem
    text-align: left
    +desktop
      text-align: justify

    .news-carrosel
      display: flex
      flex-direction: column
      justify-content: center
      // background: transparentize(darken($primary, 20%), 0.2)
      background: transparent
      width: 100%
      height: 100%
    .news-highlight
      &:not(:last-child)
        margin-bottom: 0.5rem
        border-bottom: 2px dashed $primary
      .scroll-section
        height: 18rem
        overflow-y: scroll
        overflow-x: hidden
        div
          padding-right: 2rem
      .button
        margin: 1rem 0
      .subtitle
        font-weight: 800

    .new-content
      .content
        overflow: hidden
        text-overflow: ellipsis
        line-height: 1.5rem
        height: 6rem
    .title
      color: $primary
    .subtitle
      text-transform: uppercase
      font-weight: bold
      margin-bottom: 10px
    .right-column
      +desktop
        display: flex
        flex-direction: column
        justify-content: space-evenly
        padding: 0.25rem 1.5rem
  // PARALLAX SECTION
  .parallax
    background-blend-mode: multiply
    background-color: rgba(18, 119, 126, 0.6)
    background-image: url('~assets/images/home-parallax.jpg')
    background-attachment: fixed
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    .hero-body
      .subtitle
        padding: 4rem 0
        color: white
        font-family: 'Roboto'
        text-transform: uppercase
  // ABOUT SECTION
  .about
    padding-bottom: 7rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    padding-top: 2rem
    background: $warning
    .title, .content
      color: darken($warning, 25%)
    .right-column
      +desktop
        padding-left: 2rem
      button
        margin-top: 2rem
        margin-bottom: 1rem
  // FIXED POST SECTION
  .fixed-post
    border-bottom: 3px solid $primary
    padding-bottom: 7rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    padding-top: 2rem
    background: lighten($secondary, 10%)
    .title, .content
      color: $primary
    .right-column
      +desktop
        padding-left: 2rem
      button
        margin-top: 2rem
        margin-bottom: 1rem
  // EVENTS SECTION
  .events
    background: white
    padding-top: 2rem
    padding-bottom: 5rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    .justify-center
      justify-content: space-between
    .hero
      background-blend-mode: multiply
      background-color: rgba(0, 0, 0, 0.6)
      background-position: center
      background-size: cover
      text-transform: uppercase
      padding: 0
      min-height: 12rem
      +mobile
        width: auto
        margin-bottom: 2rem
      +desktop
        width: 22rem
        margin: 0 0.5rem
        margin-bottom: 0
      .hero-head
        text-align: left
        height: 50%
        padding: 1rem
        color: white
        font-weight: bold
      .hero-foot
        display: flex
        flex-direction: column
        justify-content: center
        height: 50%
        padding: 1rem
        background-blend-mode: multiply
        background-color: rgba(27, 143, 150, 0.7)
        color: white
        line-height: 1.25rem
        text-transform: none
        .more-icon
          position: relative
          bottom: 1rem
          left: 90%
          color: $verde-limao
          font-size: 3rem
  // YOUNGS SECTION
  .young-section
    padding: 2.5rem 0
    .shortcut
      padding: 1rem 2rem
      .shortcut-label
        text-align: center
        text-transform: uppercase
        font-weight: 800
        font-size: 1.45rem
        color: $dark
        font-family: 'Capsuula'
      img
        filter: brightness(60%)

</style>
