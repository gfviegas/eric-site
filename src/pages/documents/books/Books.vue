<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 APOSTILAS
      ul
        li(v-for="file in filesSorted")
          a(target="BLANK" @click="trackFileClick(file.name)" v-bind:href="getFileSrc(file.path)") {{file.name}}
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Apostilas'),
      meta: () => {
        return getSeoMeta({
          title: 'Apostilas - Escoteiros de Minas',
          description: 'Acesse as apostilas dos Escoteiros de Minas Gerais'
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
    },
    methods: {
      getFileSrc (name) {
        return `${process.env.IMG_URL}files/apostilas/${name}`
      },
      trackFileClick (fileName) {
        return this.$ga.trackEvent('File', 'Click', fileName)
      }
    },
    computed: {
      filesSorted () {
        return this.files.sort((a, b) => {
          let nameA = a.name.toUpperCase()
          let nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
      }
    },
    data () {
      return {
        files: [
          {name: 'Módulo de Programação de Reuniões', path: 'modulo_programacao_reunioes.pdf'},
          {name: 'Módulo de Aperfeiçoamento de Contação de Histórias', path: 'modulo_historias.pdf'},
          {name: 'Módulo do Ramo Escoteiro', path: 'modulo_ramo_escoteiro.pdf'},
          {name: 'Módulo do Ramo Sênior', path: 'modulo_ramo_senior.pdf'},
          {name: 'Módulo de Aperfeiçoamento de Topografia e Orientação', path: 'modulo_topografia.pdf'},
          {name: 'Módulo Técnico de Canções Escoteiras', path: 'modulo_cancoes.pdf'}
        ]
      }
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
