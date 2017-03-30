<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 EDITAIS
      p Veja os editais de diversos eventos
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Editais'),
      meta: () => {
        return getSeoMeta({
          description: 'Acesse os Editais de Eventos dos Escoteiros de Minas Gerais'
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

  .content-block
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    ul
      list-style: disc
      padding: 0 2rem
      li
        padding: 0.5rem 0
        a
          color: darken($primary, 10%)
    ol
      list-style: none
      > li
        padding: 1rem 0
        counter-increment: item
        &::before
          content: counter(item) "."
          padding-right: 1rem
          display: inline-block
          font-family: Roboto
          font-weight: 400
          font-size: 1.3rem
</style>
