<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Diretoria Regional
      h5.subtitle.is-5 A Diretoria Regional é o órgão executivo da Região, com mandato de três anos. É composta por cinco membros, eleitos pela Assembléia Regional, sendo um deles o Diretor Presidente, que coordena, dirige e representa a Região. #[br] A Diretoria Regional pode ser composta por outros membros, nomeados por ela e com funções predefinidas. As Comissões Regionais, nomeadas pela UEB-MG, tem como principal função a cooperação junto a Diretoria Regional para o desenvolvimento do Escotismo.
      br
      h3.title.is-3 Diretores Eleitos - Gestão 2016/2019
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 André Luiz Correa Gomes
              div.content
                p Diretor Presidente
                p Email: #[a(href="mailto:andre.gomes@escoteirosmg.org.br") andre.gomes@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Neilton Bernardo
              div.content
                p Diretor Vice-Presidente
                p Email: #[a(href="mailto:neilton.bernardo@escoteirosmg.org.br") neilton.bernardo@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Marcos Magno Gomide Vieira
              div.content
                p Diretor de Gestão Institucional
                p Email: #[a(href="mailto:marcos.vieira@escoteirosmg.org.br") marcos.vieira@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Giovani Rodrigues Ramos
              div.content
                p Diretor Financeiro
                p Email: #[a(href="mailto:giovani.ramos@escoteirosmg.org.br") giovani.ramos@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Rodrigo Luís da Silva Duarte
              div.content
                p Diretor de Métodos Educativos
                p Email: #[a(href="mailto:rodrigo.martins@escoteirosmg.org.br") rodrigo.martins@escoteirosmg.org.br]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Diretoria Regional'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça a Diretoria Regional dos Escoteiros de Minas Gerais'
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
  .regional-board
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
