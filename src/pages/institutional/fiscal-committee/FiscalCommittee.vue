<template lang="pug">
  div.fiscal-committee
    div.container.container-responsive.main-container
      h2.title.is-2 Comissão Fiscal Regional
      h5.subtitle.is-5 A Comissão Fiscal Regional é o órgão de fiscalização e orientação da gestão patrimonial e financeira regional, composta por três membros titulares, sendo um eleito anualmente, por eles próprios, seu Presidente, e por até três suplentes, na ordem de votação, que substituem os titulares nas suas faltas ou vacâncias, com mandatos de três anos e eleitos simultaneamente com os membros da Diretoria Regional, por meio de votação unitária.
      br
      h3.title.is-3 Comissão Fiscal Corrente
      div.columns.is-multiline
        div.column.is-4(v-for="(d,i) in data" v-bind:key="i")
          div.card
            div.card-image
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 {{d.name.toUpperCase()}}
              div.content
                p(v-if="d.role") {{d.role}}
                p(v-if="d.email") Email: #[a(v-bind:href="`mailto:${d.email}`") {{d.email}}]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import data from './data.json'

  export default {
    data () {
      return {
        data: data.data
      }
    },
    head: {
      title: getSeoTitle('Comitê Fiscal'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o Comitê Fiscal dos Escoteiros de Minas Gerais'
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
  @import '~assets/sass/common.sass'
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
