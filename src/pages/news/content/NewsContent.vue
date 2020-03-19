<template lang="pug">
  div.news-content(v-if="news && news.title")
    .banner
      figure.image.is4by1
        img(:src="news.image | responsiveImgSrcV2")
    .bread
      breadcrumb(:sufix="news.title")
    div.main-container
      .content-container.container.container-responsive
        header
          h1.title.is-1 {{news.title}}
          p publicado em {{news.createdAt | moment('LLL')}}h
        div.news-content-container
          div.news-description(v-html="news.content")

      div.share-section.columns.container.container-responsive
        .column.is-half
          h5.description.subtitle.is-5 E aí, curtiu? Então compartilha!
          social-sharing(:url="urlToShare" inline-template v-on:social_shares_click="test")
            div.social-share
                div.icons-section
                  network.image.is-32x32(network="whatsapp")
                    img(src="~assets/images/social-icons/whatsapp.png")
                  network.image.is-32x32(network="facebook")
                    img(src="~assets/images/social-icons/facebook.png")
                  network.image.is-32x32(network="twitter")
                    img(src="~assets/images/social-icons/twitter.png")
        .column.is-half
    br
</template>

<script>
  import newsService from '../../../services/news'
  import Breadcrumb from '../../../components/breadcrumb/Breadcrumb.vue'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../../services/seo'
  import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'

  export default {
    components: {
      Breadcrumb
    },
    head: {
      title () {
        return getSeoTitle(this.news.title)
      },
      meta () {
        return getSeoMeta({
          title: this.news.title,
          description: this.news.content.length ? this.news.content.substring(0, 147) + '...' : '...',
          image: `${process.env.IMG_URL}${this.news.image}`
        })
      },
      script () {
        return getSeoScript('news', this.news)
      }
    },
    data () {
      return {
        news: {title: '', content: '', image: ''}
      }
    },
    methods: {
      test () {
        return this.$ga.trackEvent('Event', 'Click', 'Share', this.news._id)
      },
      shareTumblr () {
        const urlToShare = window.location.href
        const tumblrShareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${urlToShare}`
        window.open(tumblrShareUrl, '_blank', 'left=50,top=50,width=500,height=500,toolbar=1,resizable=0')
      },
      shareEmail () {
        const urlToShare = window.location.href
        const emailUrl = `mailto:?subject=Evento no site da REMG&body=Confira esse newso no site da Região Escoteira de Minas Gerais: ${urlToShare}`
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
    async beforeRouteEnter (to, from, next) {
      const response = await newsService.find(to.params.slug)
      const converter = new QuillDeltaToHtmlConverter(response.body.content['ops'], {inlineStyles: true})

      next((vm) => {
        vm.news = response.body
        vm.news.content = converter.convert()
        vm.$emit('updateHead')
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  .news-content
    .banner
      width: 100%
    .inscription-section
      padding-top: 2rem
      padding-bottom: 1rem
      .title
        text-transform: uppercase
        color: $orange
        font-weight: 400
      .level
        margin-top: 1rem
        background: lighten($secondary, 10%)
        padding: 2rem
        display: flex
        justify-content: space-around
        align-items: center
        p
          color: $dark
          font-size: 1.2rem
        .button
          border-radius: 1rem
          padding: 2rem
    .content-container
      padding-top: 2rem
      padding-bottom: 1rem
      header
        padding-bottom: 1rem
        border-bottom: 1px solid #8f8f8f
        .title
          margin: 0
          text-transform: uppercase
          color: $orange
          font-weight: 400
        p
          text-transform: lowercase
          color: black
          font-weight: 200
      .news-content-container
        strong
          text-transform: uppercase
          font-weight: 800
          color: $orange
          padding-right: 0.5rem
        a
          color: $black
          font-weight: 600
    .news-description
      padding: 2rem 0
    .news-image-container
      width: 100%
      display: flex
      justify-content: center
    .share-section
      padding: 2rem 0
      .description
        color: $dark
        display: flex
        justify-content: flex-end
        flex-direction: column
        text-transform: uppercase
        font-weight: 400
        font-size: 1.3rem
        padding-bottom: 0.25rem
        border-bottom: 1px solid #8f8f8f

</style>
