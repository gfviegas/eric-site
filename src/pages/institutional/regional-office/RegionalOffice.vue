<template lang="pug">
  div.regional-office
    div.container.container-responsive.main-container
      h2.title.is-2 Serviço Profissional Escoteiro
      h5.subtitle.is-5 O Serviço Profissional Escoteiro visa a dar apoio a tarefa junto a Diretoria Regional bem como aos Grupos Escoteiros da Região de Minas Gerais.
      br
      h3.title.is-3 Horário de Funcionamento e Contato
      div.content
        p De Segunda à Sexta-feira
        ul
          li 08:00h às 18:00h
          li Telefones: #[a(href="tel:3232157674") (32) 3215 7674] / #[a(href="tel:3232150615") (32) 3215 0615]
          li Email: #[a(href="mailto:escritorio@escoteirosmg.org.br") escritorio@escoteirosmg.org.br]
      br
      h3.title.is-3 Funcionários e Prestadores de Serviço
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Michelle Silverio de Castro
              div.content
                p Assistente Administrativo - Escritório Regional e Loja Escoteira Regional
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Mayara Soldati
              div.content
                p Assistente Administrativo - Escritório Regional e Loja Escoteira Regional
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Escritório Regional'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Escritório Regionaal dos Escoteiros de Minas Gerais'
        })
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
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .regional-office
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
