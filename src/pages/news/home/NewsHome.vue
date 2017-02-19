<template lang="pug">
  div.news-home
    div.container.container-responsive.main-container
      h2.title.is-2 Título
      h4.subtitle.is-4 Fique por dentro das novidades
      article.media(v-if="news && news.length")
        div.media-left
          figure.image.is-2by1
            img(:src="news[0].image | imgSrc")
        div.media-content
          div.content
            p
              h4.title.is-4 {{news[0].title}}
            p {{ news[0].content | stripped }}
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
      .media-left
        justify-content: center
        width: 20%
</style>
