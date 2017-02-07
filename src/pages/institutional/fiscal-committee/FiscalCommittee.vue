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
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Davidson Campos Soares Barbosa
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:dcsbarbosa@gmail.com") dcsbarbosa@gmail.com]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Paulo Henrique Maciel Barbosa
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:paulohenriquemb@gmail.com") paulohenriquemb@gmail.com]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Saulo Antônio dos Passos
              div.content
                p Comissão Fiscal Regional - Titular
                p Email: #[a(href="mailto:passoscontabilidade@crcmg.org.br") passoscontabilidade@crcmg.org.br]
</template>

<script>
  export default {
    name: 'fiscal-committee'
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
