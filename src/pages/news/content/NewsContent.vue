<template lang="pug">
  div.news-content
    div.container.container-responsive.main-container.columns
      div.column.is-7.content-container
        h2.title.is-2 {{news.title}}
        img(:src="news.image | imgSrc")
        div.news-content-container
          div.news-content(v-html="news.content")
      div.column.is-5.more-container

        div.info-news-container
          div.info-row
            span.description Visualizações
            span.title.is-2 {{news.views}}
          div.info-row
            span.description Compartilhar
          div.social-share
            div.icons-section
              figure.image.is-32x32
                img(src="~assets/images/social-icons/facebook.png")
              figure.image.is-32x32
                img(src="~assets/images/social-icons/twitter.png")
              figure.image.is-32x32
                img(src="~assets/images/social-icons/plus.png")
              figure.image.is-32x32
                img(src="~assets/images/social-icons/tumblr.png")
            div.icons-section.flex-end
              figure.image.is-32x32
                img(src="~assets/images/social-icons/whatsapp.png")
              figure.image.is-32x32
                img(src="~assets/images/social-icons/mail.png")
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
    created () {
      const vm = this
      newsService.find(this.$route.params.slug).then((response) => {
        vm.news = response.body
        newsService.updateViews(vm.news._id, {views: (vm.news.views + 1)}).then((response) => {
          vm.news.views += 1
        })
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
    .info-news-container
      padding: 0 2rem
      .info-row
        margin-top: 2rem
        margin-bottom: 1rem
        border-bottom: 1px solid #8f8f8f
        display: flex
        justify-content: space-between
        flex-direction: row
        .title
          color: #8f8f8f
          font-weight: 400
        .description
          color: #8f8f8f
          display: flex
          justify-content: flex-end
          flex-direction: column
          text-transform: uppercase
          font-weight: 300
          font-size: 1.5rem
      .social-share
        display: flex
        flex-direction: row
        width: 100%
        justify-content: space-between
        .icons-section
          display: flex
          flex-direction: row
          width: 100%
          &.flex-end
            justify-content: flex-end
          figure
            margin: 0 0.3rem

</style>
