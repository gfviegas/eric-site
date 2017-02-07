<template lang="pug">
  div.institutional-home
    div.container.container-responsive.main-container
      h2.title.is-2 Institucional
      h4.subtitle.is-4 Conheça a instituição e seus orgãos
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'regionalBoard'}")
                figure.image.is-4by3
                  img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'regionalBoard'}") Diretoria Regional
              div.content
                | A Diretoria Regional é o órgão executivo da Região, com mandato de três anos. É composta por cinco membros, eleitos pela Assembléia Regional, sendo um deles o Diretor Presidente, que coordena, dirige e representa a Região.
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'fiscalCommittee'}")
                figure.image.is-4by3
                  img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'fiscalCommittee'}") Comissão Fiscal
              div.content
                | A Comissão Fiscal Regional é o órgão de fiscalização e orientação da gestão patrimonial e financeira regional, composta por três membros titulares, sendo um eleito anualmente, por eles próprios, seu Presidente, e por até três suplente.
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'youngLeaders'}")
                figure.image.is-4by3
                  img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'youngLeaders'}") Jovens Líderes
              div.content
                | O Núcleo Regional de Jovens Líderes é a estrutura gestora da Rede de Jovens em nível regional, sendo composto por 4 jovens escolhidos por seus pares durante o Fórum Regional, esses jovens trabalham coordenando e, principalmente, animando as diversas iniciativas juvenis e também fazem a representação juvenil dentro das estruturas do nível regional.
        div.column.is-4
          div.card
            div.card-image
              router-link(:to="{name: 'emeritusTrainers'}")
                figure.image.is-4by3
                  img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4
                    router-link(:to="{name: 'emeritusTrainers'}") Formadores Eméritos
              div.content
                | O adulto que tiver uma atuação ininterrupta por 20 anos ou descontínua por 30 anos, na área de Gestão de Adultos na função de Diretor de Curso, poderá receber o título de “Formador Emérito”.
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-4by3
                img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ouvidoria
              div.content
                | Sugestões, avaliações, críticas e reclamações sobre qualquer fornecimento de serviços e/ou produtos por parte desta Unidade Escoteira Regional por meio de seu Escritório Regional e Loja Escoteira
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-4by3
                img(src="http://bulma.io/images/placeholders/1280x960.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Escritorio Regional
              div.content
                | O Serviço Profissional Escoteiro visa a dar apoio a tarefa junto a Diretoria Regional bem como aos Grupos Escoteiros da Região de Minas Gerais.

    //- #[router-link(exact)(:to="{name: 'regionalBoard'}")  Diretoria Regional]
    br
</template>

<script>
  export default {
    name: 'institutional-home'
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .institutional-home
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
        text-transform: lowercase
      padding-top: 2rem
      padding-bottom: 1rem
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
