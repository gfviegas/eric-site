<template lang="pug">
  div.events-home
    div.container.container-responsive.main-container(v-if="events && events.length")
      h1.title.is-2 Eventos
      h2.subtitle.is-4 Fique por dentro dos eventos
      form.search-container(v-on:submit.prevent="applySearch()")
        p.control.has-addons
          input.input(type="search" placeholder="Pesquisar" v-model="filter")
          button.button.is-primary(type="submit")
            span.icon
              i.fa.fa-search
      //- div.pagination-container
      //-   pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
      article.media(v-for="eventContent in events")
        div.media-left
          router-link(:to="{ name: 'eventContent', params: { slug: eventContent.slug }}").image.is-square
            img(:src="eventContent.image | imgSrc")
        div.media-content
          div.content
            router-link(:to="{ name: 'eventContent', params: { slug: eventContent.slug }}")
              h4.title.is-4 {{eventContent.title}}
            div.events-date
              small {{eventContent.created_at | moment("L")}}
            p.events-preview {{ eventContent.content | stripped }}
      div.pagination-container
        pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
    br
</template>

<script>
  import eventsService from '../../../services/events'
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import Pagination from '../../../components/pagination/Pagination'

  const NEWS_PER_PAGE = 4

  export default {
    components: {
      Pagination
    },
    head: {
      title () {
        return getSeoTitle('Notícias')
      },
      meta () {
        return getSeoMeta({
          title: 'Notícias - Escoteiros de Minas',
          description: 'Confira as notícias da Região Escoteira de Minas Gerais.'
        })
      }
    },
    data () {
      return {
        filter: '',
        events: [],
        currentPage: 1,
        limit: 4,
        totalPages: 1,
        routeName: this.$route.name
      }
    },
    created () {
      const vm = this
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })

      const page = this.$route.query.page || 1
      const filter = this.$route.query.filter || ''

      eventsService.get({page: page, limit: NEWS_PER_PAGE, filter: filter}).then((response) => {
        vm.events = response.body.events
        vm.currentPage = response.body.meta.currentPage
        vm.limit = response.body.meta.limit
        vm.totalPages = response.body.meta.totalPages
        vm.filter = filter
      })
    },
    methods: {
      applySearch () {
        this.page = 1
        eventsService.get({page: this.page, limit: NEWS_PER_PAGE, filter: this.filter}).then((response) => {
          this.events = response.body.events
          this.currentPage = response.body.meta.currentPage
          this.limit = response.body.meta.limit
          this.totalPages = response.body.meta.totalPages
        })
      }
    },
    watch: {
      '$route' (to, from) {
        const page = to.query.page
        eventsService.get({page: page, limit: NEWS_PER_PAGE, filter: this.filter}).then((response) => {
          this.events = response.body.events
          this.currentPage = response.body.meta.currentPage
          this.limit = response.body.meta.limit
          this.totalPages = response.body.meta.totalPages
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .events-home
    .main-container
      .search-container
        padding: 2rem 0
        input
          width: 100%
      .pagination-container
        padding: 2rem
      > .title
        text-transform: uppercase
      > .subtitle
        text-transform: lowercase
      padding-top: 2rem
      padding-bottom: 1rem
      article
        flex-direction: column
        +desktop
          flex-direction: row
      .media-left
        justify-content: center
        width: 100%
        +desktop
          width: 15%
      .media-content
        display: flex
        align-self: center
        padding-top: 1rem
        +desktop
          padding-top: 0
        .title
          margin-bottom: 0
        .events-date
          margin-bottom: 1.5rem
        .events-preview
          overflow: hidden
          text-overflow: ellipsis
          line-height: 1.5rem
          height: 3rem
</style>
