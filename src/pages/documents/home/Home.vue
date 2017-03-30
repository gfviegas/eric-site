<template lang="pug">
  div.forms-home.content-block
    h3.title.is-3 Documentos
    p Selecione uma das páginas no menu para listar os documentos
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Documentos'),
      meta: () => {
        return getSeoMeta({
          description: 'Documentos - Escoteiros de Minas Gerais'
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
    counter-reset: item
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    ol
      list-style: none
    li
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
