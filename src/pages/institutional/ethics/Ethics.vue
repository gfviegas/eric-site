<template lang="pug">
  div.ombudsman
    div.container.container-responsive.main-container
      h2.title.is-2 Comissão de Ética e Disciplina
      h3.title.is-3 Membros da Comissão
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Isabela Thais Silva de Andrade
              div.content
                p Email: #[a(href="mailto:belinha.andrade@gmail.com") belinha.andrade@gmail.com]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Carlos Magno Torres
              div.content
                p Email: #[a(href="mailto:catrumano@yahoo.com.br") catrumano@yahoo.com.br]
        div.column.is-4
          div.card
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Ricardo Calderário Iorio
              div.content
                p Email: #[a(href="mailto:ricardo672@gmail.com") ricardo672@gmail.com]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Comissão de Ética e Disciplina'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça a Comissão de Ética e Disciplina dos Escoteiros de Minas Gerais'
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
  .ombudsman
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
