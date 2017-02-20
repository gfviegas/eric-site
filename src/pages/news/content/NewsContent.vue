<template lang="pug">
  div.news-content
    div.container.container-responsive.main-container.columns
      div.column.is-half.content-container
        h2.title.is-2 {{news.title}}
        img(:src="news.image | imgSrc")
        div.news-content-container
          div.news-content(v-html="news.content")
      div.column.is-half
    br
</template>

<script>
  import newsService from '../../../services/news'

  export default {
    name: 'news-content',
    data () {
      return {
        news: {
          id: '',
          content: '',
          created_at: '',
          image: '',
          last_updated_by: '',
          slug: '',
          title: '',
          updated_at: '',
          views: 0
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      newsService.find(to.params.slug).then((response) => {
        next(vm => {
          vm.news = response.body
        })
      }, (response) => {
        next()
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .news-content
    .content-container
      > .title
        text-transform: uppercase
        color: $verde-limao
      padding-top: 2rem
      padding-bottom: 1rem
      .news-content-container
        padding-top: 2rem
</style>
