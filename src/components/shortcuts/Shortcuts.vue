<template lang="pug">
div.shortcuts
  div.columns.container.container-responsive
    div.column.columns
      div.column
        h1.title.is-2.is-family-secondary Acesso Rápido
        div.column.columns.justify-center.shortcuts-column.is-multiline
          shortcut(c-class="is-orange" icon="bookshelf" v-bind:route="{name: 'documentsHome'}")
            p Documentos
            p Ofícios, Resoluções e outros
          shortcut(c-class="is-green" icon="knot" v-bind:url="coursesCalendarUrl")
            p Calendário de Cursos de Formação para Adultos - 2020
          shortcut(c-class="is-dark-orange" icon="calendar" v-bind:url="calendarUrl")
            p Calendário de Eventos 2020
          shortcut(c-class="is-brown" icon="letter" v-bind:route="{name: 'newsletterForm'}")
            p Newsletter Regional
            p Informativo da Região Escoteira de Minas Gerais
          shortcut(c-class="is-dark-green" icon="people" url="http://www.escoteirocomorgulho.com.br/#six")
            p Conheça os Grupos Escoteiros de Minas Gerais
          shortcut(c-class="is-purple" icon="bureau" url="http://www.escoteiros.org.br/")
            p Site Oficial dos Escoteiros do brasil
</template>

<script>
  import Shortcut from '../shortcut/Shortcut.vue'

  export default {
    components: {
      'shortcut': Shortcut
    },
    data () {
      return {
        calendarUrl: `https://drive.google.com/open?id=1NSb7h1EDrmZENhRQVNSdtPEYBdzEHtO2`,
        coursesCalendarUrl: `https://drive.google.com/file/d/1dKAqZzLhlLBnXx1vdCWY-3onUcBLXMYJ/view`
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/common'
  // SHORTCUTS SECTION
  .shortcuts
    background: transparent
    border-top: 3px solid $dark
    padding-top: 2rem
    padding-bottom: 5rem
    text-align: left
    .columns:last-child
      margin-bottom: auto
    +desktop
      text-align: justify
      padding-bottom: 2rem
    .title
      font-weight: 800
      color: darken($dark, 10%)
      margin-bottom: 1.5rem
    .justify-center
      +desktop
        justify-content: space-between
    .shortcuts-column
      margin-top: 2rem
      p
        font-family: $family-secondary
        font-weight: 600
</style>
