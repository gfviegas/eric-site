<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 BALANÇOS FINANCEIROS
      div.list-documents
        p.control
          input.input(placeholder="Pesquisar" v-model="filterQuery")
          transition-group(name="fade" tag="ul")
            li(v-for="doc in filteredDocs" v-bind:key="doc._id")
              a(target="BLANK" @click="trackFileClick(doc.title)" v-bind:href="doc.file") {{doc.title}}
              p.help #[strong Descrição:] {{doc.description}}
              p.help #[strong Atualizado:] {{doc.updated_at | moment("LLLL")}}
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import documentsService from '../../../services/documents'

  export default {
    head: {
      title: getSeoTitle('Balanços Financeiros'),
      meta: () => {
        return getSeoMeta({
          title: 'Balanços Financeiros - Escoteiros de Minas',
          description: 'Acesse os balanços financeiros dos Escoteiros de Minas Gerais'
        })
      }
    },
    beforeRouteEnter (to, from, next) {
      documentsService.get({type: 'balance'}).then((response) => {
        next((vm) => {
          vm.files = response.body.documents
          vm.$emit('updateHead')
        })
      })
    },
    computed: {
      filteredDocs () {
        if (!this.filterQuery || !this.filterQuery.length) return this.files
        return this.files.filter((item) => {
          let regex = new RegExp(this.filterQuery, 'ig')
          return (item.title.search(regex) > -1 || item.description.search(regex) > -1)
        })
      }
    },
    created () {
      let ran = 0
      this.$on('okHead', () => {
        ran++
        if (ran >= 1 && !window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    },
    methods: {
      trackFileClick (fileName) {
        return this.$ga.trackEvent('File', 'Click', fileName)
      }
    },
    data () {
      return {
        filterQuery: '',
        files: []
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
    .list-documents
      padding: 0 2rem
    ul
      list-style: none
      li
        padding: 0.8rem 0
        border-bottom: 1px solid rgba(78, 78, 78, 0.3)
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
