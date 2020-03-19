<template lang="pug">
  article.news
    div.news-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Notícias
      div.hero-foot
        breadcrumb
    div.news-home
      div.container.container-responsive.main-container
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
        article.media(v-for="newsContent in news" v-bind:key="newsContent._id")
          div.media-left
            router-link(:to="{ name: 'newsContent', params: { slug: newsContent.slug }}").image.is-4by1
              img(:src="newsContent.image | imgSrcV2")
          div.media-content
            div.content
              router-link(:to="{ name: 'newsContent', params: { slug: newsContent.slug }}")
                h4.title.is-4 {{newsContent.title}}
              div.news-date
                small {{newsContent.createdAt | moment("LLLL")}}
              p.news-preview {{ htmlContent(newsContent.content) | stripped }}
        article.media(v-if="!news.length")
          div.media-left
            img(:src="'news/default.jpg' | imgSrcV2")
          div.media-content
            div.content
              h4.title.is-4 Nenhuma notícia encontrada.
        div.pagination-container
          pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
      br
</template>

<script>
  import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
  import newsService from '../../../services/news'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../../services/seo'
  import Pagination from '../../../components/pagination/Pagination'
  import Breadcrumb from '../../../components/breadcrumb/Breadcrumb'

  const NEWS_PER_PAGE = 20

  export default {
    components: {
      Breadcrumb,
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
      },
      script () {
        return getSeoScript('list-news', this.news)
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
    async created () {
      const vm = this
      let count = 0

      this.$on('okHead', () => {
        count++
        if (!window.prerenderReady && count === 2) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })

      const page = this.$route.query.page || 1
      const filter = this.$route.query.filter || ''

      vm.filter = filter
      vm.page = page

      await this.fetchNews()
      vm.$emit('updateHead')
    },
    methods: {
      async fetchNews () {
        const response = await newsService.get({page: this.page, filter: this.filter, limit: NEWS_PER_PAGE, sort: '-createdAt'})
        const { resources, meta } = response.body
        const { currentPage, limit, totalPages } = meta

        this.news = resources
        this.currentPage = currentPage
        this.limit = limit
        this.totalPages = totalPages
      },
      htmlContent (data) {
        const converter = new QuillDeltaToHtmlConverter(data['ops'], {inlineStyles: true})
        return converter.convert()
      },
      applySearch () {
        this.$router.replace({ name: 'newsList', query: {page: 1, filter: this.filter} })
      }
    },
    watch: {
      '$route' (to, from) {
        this.page = to.query.page
        this.filter = to.query.filter
        this.fetchNews()
      }
    }
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
          width: 35%
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
