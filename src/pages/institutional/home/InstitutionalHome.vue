<template lang="pug">
  div
    section.hero.is-light
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Diretoria Regional]
            h2.subtitle
              | A Diretoria Regional é o órgão executivo da Região, com mandato de três anos. É composta por cinco membros, eleitos pela Assembléia Regional, sendo um deles o Diretor Presidente, que coordena, dirige e representa a Região.
    section.hero.is-danger
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Comissão Fiscal]
            h2.subtitle
              | A Comissão Fiscal Regional é o órgão de fiscalização e orientação da gestão patrimonial e financeira regional, composta por três membros titulares, sendo um eleito anualmente, por eles próprios, seu Presidente, e por até três suplentes, na ordem de votação, que substituem os titulares nas suas faltas ou vacâncias, com mandatos de três anos e eleitos simultaneamente com os membros da Diretoria Regional, por meio de votação unitária.
    section.hero.is-warning
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Jovens Líderes]
            h2.subtitle
              | O Núcleo Regional de Jovens Líderes é a estrutura gestora da Rede de Jovens em nível regional, sendo composto por 4 jovens escolhidos por seus pares durante o Fórum Regional, esses jovens trabalham coordenando e, principalmente, animando as diversas iniciativas juvenis e também fazem a representação juvenil dentro das estruturas do nível regional.
    section.hero.is-info
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Formadores Eméritos]
            h2.subtitle
              | O adulto que tiver uma atuação ininterrupta por 20 anos ou descontínua por 30 anos, na área de Gestão de Adultos na função de Diretor de Curso, poderá receber o título de “Formador Emérito”.
    section.hero.is-success
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Ouvidoria]
            h2.subtitle
              | Sugestões, avaliações, críticas e reclamações sobre qualquer fornecimento de serviços e/ou produtos por parte desta Unidade Escoteira Regional por meio de seu Escritório Regional e Loja Escoteira
    section.hero.is-primary
      div.container
        div.hero-body
          div.container
            h1.title
              | #[router-link(exact)(:to="{name: 'regionalBoard'}")  Escritório Regional]
            h2.subtitle
              | O Serviço Profissional Escoteiro visa a dar apoio a tarefa junto a Diretoria Regional bem como aos Grupos Escoteiros da Região de Minas Gerais.
</template>

<script>
  export default {
    name: 'institutional-home'
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

</style>
