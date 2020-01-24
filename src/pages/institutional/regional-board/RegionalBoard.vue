<template lang="pug">
  div.regional-board
    div.container.container-responsive.main-container
      h2.title.is-2 Diretoria Regional
      h5.subtitle.is-5 A Diretoria Regional é o órgão executivo da Região, com mandato de três anos. É composta por cinco membros, eleitos pela Assembléia Regional, sendo um deles o Diretor Presidente, que coordena, dirige e representa a Região. #[br] A Diretoria Regional pode ser composta por outros membros, nomeados por ela e com funções predefinidas. As Comissões Regionais, nomeadas pela UEB-MG, tem como principal função a cooperação junto a Diretoria Regional para o desenvolvimento do Escotismo.
      br
      h3.title.is-3 Diretores Eleitos - Gestão 2019/2022
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
  @import '~assets/sass/common.sass'
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
