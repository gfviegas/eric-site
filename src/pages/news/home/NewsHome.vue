<template lang="pug">
  div.news-home
    div.container.container-responsive.main-container(v-if="news && news.length")
      h2.title.is-2 Título
      h4.subtitle.is-4 Fique por dentro das novidades
      article.media(v-for="newsContent in news")
        div.media-left
          figure.image.is-2by1
            img(:src="newsContent.image | imgSrc")
        div.media-content
          div.content
            router-link(:to="{ name: 'newsContent', params: { slug: newsContent.slug }}")
              h4.title.is-4 {{newsContent.title}}
            div.news-date
              small {{newsContent.created_at | moment("L")}}
            p.news-preview {{ newsContent.content | stripped }}
    br
</template>

<script>
  import newsService from '../../../services/news'

  export default {
    name: 'news-home',
    data () {
      return {
        news: []
      }
    },
    beforeRouteEnter (to, from, next) {
      newsService.get({page: 1, limit: 4}).then((response) => {
        next(vm => {
          vm.news = response.body.news
        })
      }, (response) => {
        next(vm => {
          vm.news = []
        })
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .news-home
    .main-container
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
          width: 20%
      .media-content
        padding-top: 1rem
        +desktop
          padding-top: 0
        .title
          margin-bottom: 0
        .news-date
          margin-bottom: 1.5rem
        .news-preview
          overflow: hidden
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          text-overflow: ellipsis
</style>
