<template lang="pug">
  div.event-content(v-if="event && event.title")
    .banner
      figure.image.is4by1
        img(v-bind:src="imageBanner")
        //- image(:src="event.image | imgSrc")
    .bread
      breadcrumb(:sufix="event.title")
    div.main-container
      .content-container.container.container-responsive
        h1.title.is-3 {{event.title}}
        div.event-content-container
          p #[strong.has-text-secondary Onde:] {{event.where}}
          p #[strong.has-text-secondary Quando:] {{event.start_date | moment('DD/MM/YYYY')}} #[span(v-if="event.end_date") - {{event.end_date | moment('DD/MM/YYYY')}}]
          p #[strong.has-text-secondary Ramo:] {{event.section.join(', ')}}
          p #[strong.has-text-secondary Organização:] {{event.organizer}}
          p #[strong.has-text-secondary Inscrições:] A definir
          p #[strong.has-text-secondary Valor:] {{event.fee}}
          p #[strong.has-text-secondary Responsável:] {{event.responsible}}
          div.event-description(v-html="event.content")
          h2.title.is-3#arquivos Baixe os arquivos do evento:
          ul(v-if="event.files && event.files.length")
            li(v-for="file in event.files" v-bind:key="file.path")
              a(target="BLANK" @click="trackFileClick(file.title)" v-bind:href="`//`+file.path") {{file.title}}
              p.help #[strong Atualizado:] {{file.updatedAt | moment("LLLL")}}
          p(v-else) Nenhum arquivo registrado.

      .inscription-section
        .container
          h2.title.is-3#inscricao Faça a sua Inscrição
        .level.columns
          .column.is-6
            p.
              Preparado para o desafio? Então vamos nessa! #[br]
              Acesse o sistema de inscrição, preencha corretamente e participe dessa super aventura! #[br]
              Desejamos que possa desfrutar ao máximo. Boa sorte e Sempre Alerta!
          .column.is-4
            a.button.is-primary.is-rounded.is-medium(v-bind:href="'//'+event.link" v-if="event.link") Fazer minha Inscrição
            a.button.is-primary.is-rounded.is-medium(href="#" v-else disabled) Link Indisponível

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
  import eventsService from '../../../services/events'
  import Breadcrumb from '../../../components/breadcrumb/Breadcrumb.vue'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../../services/seo'
  import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'

  export default {
    components: {
      Breadcrumb
    },
    head: {
      title () {
        return getSeoTitle(this.event.title)
      },
      meta () {
        return getSeoMeta({
          title: this.event.title,
          description: this.event.content.length ? this.event.content.substring(0, 147) + '...' : '...',
          image: `${process.env.IMG_URL}${this.event.image}`
        })
      },
      script () {
        return getSeoScript('event', this.event)
      }
    },
    data () {
      return {
        event: {title: '', content: '', image: ''}
      }
    },
    methods: {
      trackFileClick (fileName) {
        return this.$ga.trackEvent('EventFile', 'Click', 'Title', fileName)
      },
      test () {
        return this.$ga.trackEvent('Event', 'Click', 'Share', this.event._id)
      },
      shareTumblr () {
        const urlToShare = window.location.href
        const tumblrShareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${urlToShare}`
        window.open(tumblrShareUrl, '_blank', 'left=50,top=50,width=500,height=500,toolbar=1,resizable=0')
      },
      shareEmail () {
        const urlToShare = window.location.href
        const emailUrl = `mailto:?subject=Evento no site da REMG&body=Confira esse evento no site da Região Escoteira de Minas Gerais: ${urlToShare}`
        window.open(emailUrl)
      }
    },
    computed: {
      imageBanner () {
        if (!this.event || !this.event.image) return ''
        const path = this.event.image.split('.jpg')[0] + '@2x.jpg'
        return `${process.env.IMG_URL}${path}`
      },
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
      const response = await eventsService.find(to.params.slug)
      const converter = new QuillDeltaToHtmlConverter(response.body.content['ops'], {inlineStyles: true})

      next((vm) => {
        vm.event = response.body
        vm.event.content = converter.convert()
        vm.$emit('updateHead')
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  .event-content
    .banner
      width: 100%
    .inscription-section
      padding-top: 2rem
      padding-bottom: 1rem
      .title
        margin-left: 1rem
        +desktop
          margin-left: 0
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
        flex-direction: column
        +desktop
          flex-direction: row
        .column
          display: flex
          justify-content: center
        p
          color: $dark
          font-size: 1.2rem
        .button
          border-radius: 1rem
          padding: 2rem
    .content-container
      .title
        text-transform: uppercase
        color: $orange
        font-weight: 400
      padding-top: 2rem
      padding-bottom: 1rem
      .title.is-3
        text-transform: uppercase
        padding-bottom: 1rem
        border-bottom: 1px solid #8f8f8f
      .event-content-container
        strong
          text-transform: uppercase
          font-weight: 800
          color: $orange
          padding-right: 0.5rem
        a
          color: $black
          font-weight: 600
    .event-description
      padding: 2rem 0
    .event-image-container
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
