<template lang="pug">
div.shortcuts
  div.columns.container.container-responsive
    div.column.columns
      div.column
        h1.title.is-2 Acesso Rápido
        div.column.columns.justify-center.shortcuts-column.is-multiline
          shortcut(c-class="is-light-blue" icon="bookshelf" v-bind:route="{name: 'documentsHome'}")
            p Documentos
            p Editais, apostilas e outros
          shortcut(c-class="is-verde-limao" icon="knot" v-bind:url="coursesCalendarUrl")
            p Calendário de Formação de Adultos - 2017
          shortcut(c-class="is-pink" icon="calendar" v-bind:url="calendarUrl")
            p Calendário de Eventos 2017
          shortcut(c-class="is-red" icon="letter" v-bind:route="{name: 'newsletterForm'}")
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
        calendarUrl: `${process.env.IMG_URL}files/calendario_2017.pdf`,
        coursesCalendarUrl: `${process.env.IMG_URL}files/calendario_cursos_2017.pdf`
      }
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
