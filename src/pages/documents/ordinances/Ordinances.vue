<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 PORTARIAS
      ul
        li(v-for="file in filesSorted")
          a(target="BLANK" v-bind:href="getFileSrc(file.path)") {{file.name}}
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Portarias'),
      meta: () => {
        return getSeoMeta({
          title: 'Portarias - Escoteiros de Minas',
          description: 'Acesse as portarias dos Escoteiros de Minas Gerais'
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
        return `${process.env.IMG_URL}files/portarias/${name}`
      }
    },
    computed: {
      filesSorted () {
        return this.files.sort((a, b) => {
          let nameA = a.name.toUpperCase()
          let nameB = b.name.toUpperCase()
          if (nameA < nameB) {
            return 1
          }
          if (nameA > nameB) {
            return -1
          }
          return 0
        })
      }
    },
    data () {
      return {
        files: [
          {name: 'Portaria 014 2016 - Nomeação Coordenador Crescimento', path: 'portaria-014-2016.pdf'},
          {name: 'Portaria 015 2016 - Nomeação Coordenador', path: 'portaria-015-2016.pdf'},
          {name: 'Portaria 016 2016 - Nomeação Coordenador Regional de Publicidade e Propaganda', path: 'portaria-016-2016.pdf'},
          {name: 'Portaria 017 2016 - Nomeação Coordenador Regional Condecorações e Recompensas', path: 'portaria-017-2016.pdf'},
          {name: 'Portaria 018 2016 - Nomeação Coordenador Regional Adjunto Condecorações e Recompensas', path: 'portaria-018-2016.pdf'},
          {name: 'Portaria 019 2016 - Nomeação Coordenador Regional para Espiritualidade', path: 'portaria-019-2016.pdf'},
          {name: 'Portaria 020 2016 - Nomeação Coordenador Regional  Adjunto para Espiritualidade', path: 'portaria-020-2016.pdf'},
          {name: 'Portaria 021 2016 - Nomeação Coordenador Regional  para Radio Escotismo', path: 'portaria-021-2016.pdf'},
          {name: 'Portaria 022 2016 - Nomeação Coordenador Regional  Adjunto para Radio Escotismo -', path: 'portaria-022-2016.pdf'},
          {name: 'Portaria 023 2016 - Nomeação Coordenador Regional para o JOTI', path: 'portaria-023-2016.pdf'},
          {name: 'Portaria 024 2016 - Nomeação Coordenador Regional para o Mensageiro da Paz', path: 'portaria-024-2016.pdf'},
          {name: 'Portaria 025 2016 - Nomeação Coordenador Regional para o Ramo Lobinho', path: 'portaria-025-2016.pdf'},
          {name: 'Portaria 026 2016 - Nomeação Coordenador Regional para o Ramo Escoteiro', path: 'portaria-026-2016.pdf'},
          {name: 'Portaria 027 2016 - Nomeação Coordenador Regional para o Ramo  Senior', path: 'portaria-027-2016.pdf'},
          {name: 'Portaria 028 2016 - Nomeação Coordenador Regional para o Ramo Pioneiro', path: 'portaria-028-2016.pdf'},
          {name: 'Portaria 029 2016 - Nomeação Coordenador Regional para a Modalidade do Ar', path: 'portaria-029-2016.pdf'},
          {name: 'Portaria 030 2016 - Nomeação Coordenador Regional Adjunto para a Modalidade do Ar', path: 'portaria-030-2016.pdf'},
          {name: 'Portaria 031 2016 - Nomeação Coordenador Regional  para a Gestão de Adultos', path: 'portaria-031-2016.pdf'},
          {name: 'Portaria 032 2016 - Nomeação Coordenador Regional Adjunto para a Gestão de Adultos', path: 'portaria-032-2016.pdf'},
          {name: 'Portaria 033 2016 - Nomeação Coordenador Regional Adjunto para a Gestão de Adultos', path: 'portaria-033-2016.pdf'},
          {name: 'Portaria 034 2016 - Nomeação Coordenador Regional Adjunto para a Gestão de Adultos', path: 'portaria-034-2016.pdf'},
          {name: 'Portaria 035 2016 - Nomeação Coordenador Regional Adjunto para a Gestão de Adultos', path: 'portaria-035-2016.pdf'},
          {name: 'Portaria 036 2016 - Nomeação Coordenador Regional Adjunto para a Gestão de Adultos', path: 'portaria-036-2016.pdf'}
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
