<template lang="pug">
  div.fiscal-committee
    div.container.container-responsive.main-container
      h2.title.is-2 Comissão Fiscal Regional
      h5.subtitle.is-5 A Comissão Fiscal Regional é o órgão de fiscalização e orientação da gestão patrimonial e financeira regional, composta por três membros titulares, sendo um eleito anualmente, por eles próprios, seu Presidente, e por até três suplentes, na ordem de votação, que substituem os titulares nas suas faltas ou vacâncias, com mandatos de três anos e eleitos simultaneamente com os membros da Diretoria Regional, por meio de votação unitária.
      br
      h3.title.is-3 Comissão Fiscal Corrente
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Regis Moreira Pinto
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:ch.regis7@yahoo.com.br") ch.regis7@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Alexandre Gabriel de Assumpção
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:chefecaiuas@gmail.com") chefecaiuas@gmail.com]
        div.column.is-4
          div.card
            div.card-image
              //- figure.image.is-3by2
              //-   img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Saulo Antônio dos Passos
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:contabilidade@passoscontabilidade.cnt.br") contabilidade@passoscontabilidade.cnt.br]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Comitê Fiscal'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Comitê Fiscal dos Escoteiros de Minas Gerais'
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
  @import '~assets/sass/config.sass'
  .fiscal-committee
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
