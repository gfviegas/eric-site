<template lang="pug">
  div.emeritus-trainers
    div.container.container-responsive.main-container
      h2.title.is-2 Formadores Eméritos
      h5.subtitle.is-5 O adulto que tiver uma atuação ininterrupta por 20 anos ou descontínua por 30 anos, na área de Gestão de Adultos na função de Diretor de Curso, poderá receber o título de “Formador Emérito” concedido pela Diretoria Regional UEB/MG, mediante proposta expressa da Diretoria do Distrito no qual esteja registrado, ou por iniciativa da ERGA, ou da própria Diretoria Regional UEB/MG que deverá vir obrigatoriamente acompanhada de relatório fundamentado com base no histórico de suas ações e/ou iniciativas de formação de adultos, que será apreciado por comissão de membros da ERGA designada especificamente para este fim e que emitirá parecer favorável ou não à titulação. #[br] O Titulado “Formador Emérito”, o adulto comporá quadro próprio, sendo mantida a sua última nomeação, e estará, a seu próprio critério, dispensado das obrigações em colaborar com a ERGA em eventos e iniciativas de formação, a partir da data da homologação da distinção.
      br
      h3.title.is-3 Formadores
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Adolfo Coimbra Alves
              div.content
                p #[strong Nomeação DCB:]
                p #[strong Nomeação DCIM:]
                p #[strong Título Formador Emérito:] Junho de 2015
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Blair de Miranda Mendes
              div.content
                p #[strong Nomeação DCB:] Setembro de 1975
                p #[strong Nomeação DCIM:] Maio de 1978
                p #[strong Título Formador Emérito:] Maio de 2007
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Iara Leonel Lopes
              div.content
                p #[strong Nomeação DCB:] Junho de 1995
                p #[strong Nomeação DCIM:] Março de 2006
                p #[strong Título Formador Emérito:] Maio de 2007
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Juarez Polisseni Braga
              div.content
                p #[strong Nomeação DCB:]
                p #[strong Nomeação DCIM:]
                p #[strong Título Formador Emérito:] Junho de 2015
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Wuppschlander Ataliba Lage
              div.content
                p #[strong Nomeação DCB:]
                p #[strong Nomeação DCIM:]
                p #[strong Título Formador Emérito:] Maio de 2007
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Formadores Eméritos'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça os Formadores Eméritos dos Escoteiros de Minas Gerais'
        })
      }
    },
    created () {
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  .emeritus-trainers
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
      padding-top: 2rem
      padding-bottom: 2rem
      .columns
        justify-content: center
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
