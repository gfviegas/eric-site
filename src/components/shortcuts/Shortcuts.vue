<template lang="pug">
div.shortcuts
  div.columns.container.container-responsive
    div.column.columns
      div.column
        h1.title.is-2 Acesso Rápido
        div.column.columns.justify-center.shortcuts-column.is-multiline
          shortcut(c-class="is-light-blue" icon="bookshelf" v-bind:route="{name: 'home'}")
            p Documentos
            p Ofícios, resoluções e outros
          shortcut(c-class="is-verde-limao" icon="knot" v-bind:route="{name: 'home'}")
            p Calendário de Cursos de Formação pra Adultos - 2017
          shortcut(c-class="is-pink" icon="calendar" v-bind:route="{name: 'home'}")
            p Calendário de Eventos 2017
          shortcut(c-class="is-red" icon="letter" v-bind:route="{name: 'newsletterForm'}")
            p Newsletter Regional
            p Informativo da Região Escoteira de Minas Gerais
          shortcut(c-class="is-dark-green" icon="people" url="http://www.escoteirocomorgulho.com.br/#six")
            p Conheça os Grupos Escoteiros de Minas Gerais
          shortcut(c-class="is-purple" icon="bureau" v-bind:route="{name: 'home'}")
            p Documentos
            p Ofícios, Resoluções e Outros
</template>

<script>
  import Shortcut from '../shortcut/Shortcut.vue'

  export default {
    components: {
      'shortcut': Shortcut
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/config.sass'
  // SHORTCUTS SECTION
  .shortcuts
    background: #ecf9ff
    border-top: 3px solid #1b6c96
    padding-top: 2rem
    padding-bottom: 5rem
    text-align: left
    .columns:last-child
      margin-bottom: auto
    +desktop
      text-align: justify
      padding-bottom: 2rem
    .title
      color: #1c9ad5
      margin-bottom: 1.5rem
    .justify-center
      +desktop
        justify-content: space-between
    .shortcuts-column
      margin-top: 2rem
</style>
