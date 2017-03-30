<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 APOSTILAS
      p Veja as apostilas de diversos conteúdos

      ul
        li
          a(v-bind:href="getFileSrc('modulo_programacao_reunioes.pdf')") Módulo de Programação de Reuniões
        li
          a(v-bind:href="getFileSrc('modulo_historias.pdf')") Módulo de Aperfeiçoamento de Contação de Histórias
        li
          a(v-bind:href="getFileSrc('modulo_ramo_escoteiro.pdf')") Módulo do Ramo Escoteiro
        li
          a(v-bind:href="getFileSrc('modulo_ramo_senior.pdf')") Módulo do Ramo Sênior
        li
          a(v-bind:href="getFileSrc('modulo_topografia.pdf')") Módulo de Aperfeiçoamento de Topografia e Orientação
        li
          a(v-bind:href="getFileSrc('modulo_cancoes.pdf')") Módulo Técnico de Canções Escoteiras
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Modulos'),
      meta: () => {
        return getSeoMeta({
          description: 'Acesse os módulos dos Escoteiros de Minas Gerais'
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
