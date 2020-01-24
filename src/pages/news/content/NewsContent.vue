<template lang="pug">
  div.news-content
    div.container.container-responsive.main-container.columns
      div.column.is-7.content-container
        h1.title.is-2 {{news.title}}
        div.news-image-container
          img(:src="news.image | imgSrc")
        div.news-content-container
          div.news-content(v-html="news.content")
      div.column.is-5.more-container
        div.info-news-container
          div.info-row
            span.description Visualizações
            span.title.is-2 {{news.views}}

          //- SHARE
          div.info-row
            span.description Compartilhar
          social-sharing(:url="urlToShare" inline-template v-on:social_shares_click="test")
            div.social-share
                div.icons-section
                  network.image.is-32x32(network="facebook")
                    img(src="~assets/images/social-icons/facebook.png")
                  network.image.is-32x32(network="twitter")
                    img(src="~assets/images/social-icons/twitter.png")
                  network.image.is-32x32(network="googleplus")
                    img(src="~assets/images/social-icons/plus.png")
                  figure.image.is-32x32(@click="$parent.$options.methods.shareTumblr()")
                    img(src="~assets/images/social-icons/tumblr.png")
                div.icons-section.flex-end
                  network.image.is-32x32(network="whatsapp")
                    img(src="~assets/images/social-icons/whatsapp.png")
                  figure.image.is-32x32(@click="$parent.$options.methods.shareEmail()")
                    img(src="~assets/images/social-icons/mail.png")

          //- COMMENTS
          section(v-show="news.fb_post_id")
            div.info-row
              span.description Comentários
              //- span.title.is-2
            div.fb-comments(v-bind:data-href="urlToShare" data-width="100%" data-numposts="10")
    br
</template>

<script>
  import newsService from '../../../services/news'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title () {
        return getSeoTitle(this.news.title)
      },
      meta () {
        return getSeoMeta({
          title: this.news.title,
          description: this.news.content.replace(/(<([^>]+)>)/ig, '').substring(0, 147) + '...',
          image: `${process.env.IMG_URL}${this.news.image}`
        })
      },
      script () {
        return getSeoScript('news', this.news)
      }
    },
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
          fb_post_id: null,
          views: 0
        }
      }
    },
    methods: {
      test () {
        console.log('teste')
      },
      shareTumblr () {
        const urlToShare = window.location.href
        const tumblrShareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${urlToShare}`
        window.open(tumblrShareUrl, '_blank', 'left=50,top=50,width=500,height=500,toolbar=1,resizable=0')
      },
      shareEmail () {
        const urlToShare = window.location.href
        const emailUrl = `mailto:?subject=Notícia da REMG&body=Confira essa notícia da Região Escoteira de Minas Gerais: ${urlToShare}`
        window.open(emailUrl)
      }
    },
    computed: {
      urlToShare () {
        return window.location.href
      }
    },
    created () {
      let ran = 0
      this.$on('okHead', () => {
        ran++
        if (ran >= 1 && !window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    },
    beforeRouteEnter (to, from, next) {
      newsService.find(to.params.slug).then((response) => {
        next((vm) => {
          vm.news = response.body
          vm.$emit('updateHead')
          newsService.updateViews(vm.news._id, {views: (vm.news.views + 1)}).then((response) => {
            vm.news.views += 1
          })
        })
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  .news-content
    .content-container
      > .title
        text-transform: uppercase
        color: $verde-limao
      padding-top: 2rem
      padding-bottom: 1rem
      .news-content-container
        padding-top: 2rem
    .news-image-container
      width: 100%
      display: flex
      justify-content: center
    .info-news-container
      +desktop
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

</style>
