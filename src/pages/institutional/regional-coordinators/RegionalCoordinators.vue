<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Coordenadores Regionais
      h5.subtitle.is-5 Os coordenadores regionais são nomeados pela Diretoria Regional, atuando em diversas áreas da administração.
      br
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Luis Gustavo Fogaroli
              div.content
                p Gestão de Adultos
                p Email: #[a(href="mailto:gestao.adultos@escoteirosmg.org.br") gestao.adultos@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Lucas Colen Dias
              div.content
                p Modalidade do Ar
                p Email: #[a(href="mailto:lucascolen@gmail.com") lucascolen@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Débora Saraiva Guimarães Rocha
              div.content
                p Ramo Pioneiro
                p Email: #[a(href="mailto:debora.sgrocha@yahoo.com.br") debora.sgrocha@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Alisson João da Silva
              div.content
                p Ramo Sênior
                p Email: #[a(href="mailto:alissonphotos@yahoo.com.br") alissonphotos@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Lorena Alves de Souza
              div.content
                p Ramo Escoteiro
                p Email: #[a(href="mailto:lorenascout@hotmail.com") lorenascout@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Márcia Regina dos Santos Iorio
              div.content
                p Ramo Lobinho
                p Email: #[a(href="mailto:marciaiorio@gmail.com") marciaiorio@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Wesley de Assis Costa
              div.content
                p Mensageiros da Paz
                p Email: #[a(href="mailto:wesleyassis9@gmail.com") wesleyassis9@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Lucas Oliveira Godinho
              div.content
                p JOTI
                p Email: #[a(href="mailto:godinho@souescoteiro.org.br") godinho@souescoteiro.org.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ignácio Vilomar Castañón de Mattos
              div.content
                p Rádio Escotismo
                p Email: #[a(href="mailto:ignaciocastanonmg@gmail.com") ignaciocastanonmg@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Carlos Magno Torres
              div.content
                p Espiritualidade
                p Email: #[a(href="mailto:catrumano@yahoo.com.br") catrumano@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Cristiano Luiz Gomide Cabral
              div.content
                p Condecorações e Recompensas
                p Email: #[a(href="mailto:condecorações@escoteirosmg.org.br") condecorações@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Geraldo Celestino Filho
              div.content
                p Crescimento e Expansão
                p Email: #[a(href="mailto:g.celestino@veloxmail.com.br") g.celestino@veloxmail.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ricardo Machado
              div.content
                p Imagem e Comunicação
                p Email: #[a(href="mailto:ricardo.machado@escoteirosmg.org.br") ricardo.machado@escoteirosmg.org.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Nadine Marta Marques Frateschi
              div.content
                p Assessoria Financeira
                p Email: #[a(href="mailto:nadine.marta@hotmail.com") nadine.marta@hotmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Kirk Pereira
              div.content
                p Assessor Jurídico
                p Email: #[a(href="mailto:kirkpereira@hotmail.com") kirkpereira@hotmail.com]
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
