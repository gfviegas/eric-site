<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Diretores Distritais
      br
      h5.title.is-5 Conheça os diretores de cada Distrito Escoteiro de Minas Gerais
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Luís Gustavo Fogaroli
              div.content
                p Sul de Minas
                p Email: #[a(href="mailto:fogaroli@pocos-net.com.br") fogaroli@pocos-net.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Marilza Camargos Sousa
              div.content
                p Alto Paranaíba e Noroeste de Minas
                p Email: #[a(href="mailto:marilza_camargos@yahoo.com.br") marilza_camargos@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Rodrigo Fernando Bianchi
              div.content
                p Estrada Real
                p Email: #[a(href="mailto:rfbufop@gmail.com") rfbufop@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Geraldo Mendes de Souza
              div.content
                p Lobo Guará
                p Email: #[a(href="mailto:geraldomendesdesouza@yahoo.com.br") geraldomendesdesouza@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Cleyton Luciano Campos
              div.content
                p Metropolitano
                p Email: #[a(href="mailto:jabutimil@hotmail.com") jabutimil@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Fábio Costa Lasmar
              div.content
                p Rio Grande
                p Email: #[a(href="mailto:fabiocostalasmar@hotmail.com") fabiocostalasmar@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Wagner Alves Leal
              div.content
                p Triângulo Mineiro
                p Email: #[a(href="mailto:wagner00leal@gmail.com") wagner00leal@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Gustavo Ribas de Aguiar
              div.content
                p Vale do Aço
                p Email: #[a(href="mailto:gustavoribas.br@gmail.com") gustavoribas.br@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Cláucio da Silva Mendes
              div.content
                p Zona da Mata
                p Email: #[a(href="mailto:clauciomendes@gmail.com") clauciomendes@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Frederico César Napoleão
              div.content
                p Zona da Mata Leste
                p Email: #[a(href="mailto:frednapoleao@gmail.com") frednapoleao@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Thiago Neves Silva
              div.content
                p Norte de Minas
                p Email: #[a(href="mailto:thiagoturismo@gmail.com") thiagoturismo@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Maria Aparecida Santos Silva
              div.content
                p Centro-oeste
                p Email: #[a(href="mailto:cidasantos-30@hotmail.com") cidasantos-30@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Jeovane Cascais Santos
              div.content
                p Serra da Canastra
                p Email: #[a(href="mailto:mkasov@hotmail.com") mkasov@hotmail.com]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Diretores Distritais'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça os diretores dos Distritos Escoteiros de Minas Gerais'
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
