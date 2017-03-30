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
                  h4.title.is-4 Manoel Benedito da Silva
              div.content
                p Sul de Minas
                p Email: #[a(href="mailto:manoelpedro.148@hotmail.com") manoelpedro.148@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Carlos Vinícius de Souza Coelho
              div.content
                p Alto Paranaíba e Noroeste de Minas
                p Email: #[a(href="mailto:carlos_coelho2005@hotmail.com") carlos_coelho2005@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Geraldo Celestino Filho
              div.content
                p Estrada Real
                p Email: #[a(href="mailto:g.celestino@veloxmail.com.br") g.celestino@veloxmail.com.br]
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
                  h4.title.is-4 Ricardo Machado
              div.content
                p Metropolitano
                p Email: #[a(href="mailto:ricardo.machado@escoteirosmg.org.br") ricardo.machado@escoteirosmg.org.br]
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
                  h4.title.is-4 Paulo Henrique Matos dos Anjos
              div.content
                p Vale do Aço
                p Email: #[a(href="mailto:phanjosgv@gmail.com") phanjosgv@gmail.com]
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
                  h4.title.is-4 Aluísio Márcio Marsolla
              div.content
                p Zona da Mata Leste
                p Email: #[a(href="mailto:marcio.marsolla70@gmail.com") marcio.marsolla70@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ana Paulina De Abreu
              div.content
                p Norte de Minas
                p Email: #[a(href="mailto:anaabreu@gmail.com") anaabreu@gmail.com]
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
                  h4.title.is-4 Haroldo Alves da Silva
              div.content
                p Serra da Canastra
                p Email: #[a(href="mailto:haroldoalvess@yahoo.com.br") haroldoalvess@yahoo.com.br]
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
