<template lang="pug">
  div.news-home
    div.container.container-responsive.main-container(v-if="news && news.length")
      h2.title.is-2 Notícias
      h4.subtitle.is-4 Fique por dentro das novidades
      form.search-container(v-on:submit.prevent="applySearch()")
        p.control.has-addons
          input.input(type="search" placeholder="Pesquisar" v-model="filter")
          button.button.is-primary(type="submit")
            span.icon
              i.fa.fa-search
      //- div.pagination-container
      //-   pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
      article.media(v-for="newsContent in news")
        div.media-left
          router-link(:to="{ name: 'newsContent', params: { slug: newsContent.slug }}").image.is-square
            img(:src="newsContent.image | imgSrc")
        div.media-content
          div.content
            router-link(:to="{ name: 'newsContent', params: { slug: newsContent.slug }}")
              h4.title.is-4 {{newsContent.title}}
            div.news-date
              small {{newsContent.created_at | moment("L")}}
            p.news-preview {{ newsContent.content | stripped }}
      div.pagination-container
        pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
    br
</template>

<script>
  import newsService from '../../../services/news'
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
        news: [],
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

      newsService.get({page: page, limit: NEWS_PER_PAGE, filter: filter}).then((response) => {
        vm.news = response.body.news
        vm.currentPage = response.body.meta.currentPage
        vm.limit = response.body.meta.limit
        vm.totalPages = response.body.meta.totalPages
        vm.filter = filter
      })
    },
    methods: {
      applySearch () {
        this.page = 1
        newsService.get({page: this.page, limit: NEWS_PER_PAGE, filter: this.filter}).then((response) => {
          this.news = response.body.news
          this.currentPage = response.body.meta.currentPage
          this.limit = response.body.meta.limit
          this.totalPages = response.body.meta.totalPages
        })
      }
    },
    watch: {
      '$route' (to, from) {
        const page = to.query.page
        newsService.get({page: page, limit: NEWS_PER_PAGE, filter: this.filter}).then((response) => {
          this.news = response.body.news
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
  .news-home
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
        .news-date
          margin-bottom: 1.5rem
        .news-preview
          overflow: hidden
          text-overflow: ellipsis
          line-height: 1.5rem
          height: 3rem
</style>
