<template lang="pug">
  div.event-content
    div.container.container-responsive.main-container.columns
      div.column.is-7.content-container
        h1.title.is-2 {{event.title}}
        div.event-image-container
          img(:src="event.image | imgSrc")
        div.event-content-container
          h2.title.is-3 Dados do Evento
          p #[strong Local:] {{event.place}}
          p #[strong Data de Início:] {{event.start_date | moment('DD/MM/YYYY')}}
          p(v-if="event.end_date") #[strong Data de Encerramento:] {{event.end_date | moment('DD/MM/YYYY')}}
          p(v-if="event.section") #[strong Seções Participantes:] {{event.section.join(', ')}}
          p(v-if="event.hosts") #[strong Organização:] {{event.hosts.join(', ')}}
          hr

          h2.title.is-3 Descrição:
          div.event-content(v-html="event.description")
          hr
          h2.title.is-3#arquivos Arquivos Disponíveis:
          ul
            li(v-for="file in event.files" v-bind:key="file._id")
              a(target="BLANK" @click="trackFileClick(file.title)" v-bind:href="file.path") {{file.title}}
              p.help #[strong Atualizado:] {{file.updated_at | moment("LLLL")}}
      div.column.is-5.more-container
        div.info-event-container
          //- SHARE
          div.info-row
            span.description {{event.start_date | moment('from', 'now')}}
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
          section(v-show="event.fb_post_id")
            div.info-row
              span.description Comentários
              //- span.title.is-2
            div.fb-comments(v-bind:data-href="urlToShare" data-width="100%" data-numposts="10")
    br
</template>

<script>
  import eventsService from '../../../services/events'
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title () {
        return getSeoTitle(this.event.title)
      },
      meta () {
        return getSeoMeta({
          title: this.event.title,
          description: this.event.description.replace(/(<([^>]+)>)/ig, '').substring(0, 147) + '...',
          image: `${process.env.IMG_URL}${this.event.image}`
        })
      }
    },
    data () {
      return {
        event: {
          title: '',
          slug: '',
          description: '',
          place: '',
          hosts: [],
          image: '',
          start_date: '',
          end_date: '',
          sections: [],
          files: [{path: '', title: ''}]
        }
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
      eventsService.find(to.params.slug).then((response) => {
        next((vm) => {
          vm.event = response.body
          vm.$emit('updateHead')
        })
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .event-content
    .content-container
      > .title
        text-transform: uppercase
        color: $verde-limao
      padding-top: 2rem
      padding-bottom: 1rem
      .title.is-3
        text-transform: uppercase
      .event-content-container
        padding-top: 2rem
    .event-image-container
      width: 100%
      display: flex
      justify-content: center
    .info-event-container
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
