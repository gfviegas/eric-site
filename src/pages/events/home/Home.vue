<template lang="pug">
  article.events
    div.events-banner.hero
      article.hero-body.columns
        section.container.has-text-centered.column.is-7-desktop.is-offset-3-desktop.is-9-tablet.is-12-mobile
          h1.is-1.subtitle Eventos
      div.hero-foot
        breadcrumb
    div.events-home
      div.container.container-responsive.main-container
        h1.title.is-2 Eventos
        h2.subtitle.is-4 Fique por dentro dos próximos eventos

        div.columns.is-multiline
          div.column.is-2.menu-column
            aside.menu.menu-selected
              div(v-if="selected.section.length || selected.hosts.length")
                p.menu-label Filtros selecionados
                ul.menu-list
                  li(v-for="(item, index) in selected.section")
                    a(@click="unselectFilter('section', index)")
                      span {{item}}
                      span.delete.pull-right
                  li(v-for="(item, index) in selected.hosts")
                    a(@click="unselectFilter('hosts', index)")
                      span {{item}}
                      span.delete.pull-right
            aside.menu
              p.menu-label Por Seção
              ul.menu-list
                li(v-for="section in sections")
                  a(@click="selectFilter(section, 'section')") {{section}}
              p.menu-label Por Tipo
              ul.menu-list
                li(v-for="host in hosts")
                  a(@click="selectFilter(host, 'hosts')") {{host}}
            aside.menu.switch-menu
              p.menu-label Mostrar eventos passados
              vb-switch.switch-input(type="success" size="medium" v-model="showPastEvents")
          div.column.is-9.content-column

            form.search-container(v-on:submit.prevent="applySearch()")
              p.control.has-addons
                input.input(type="search" placeholder="Pesquisar" v-model="filter")
                button.button.is-primary(type="submit")
                  span.icon
                    i.fa.fa-search
            //- div.pagination-container
            //-   pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
            article.media(v-for="eventContent in events")
              div.media-left
                router-link(:to="{ name: 'eventContent', params: { slug: eventContent.slug }}").image.is-square
                  img(:src="eventContent.image | imgSrc")
              div.media-content
                div.content
                  router-link(:to="{ name: 'eventContent', params: { slug: eventContent.slug }}")
                    h4.title.is-4 {{eventContent.title}}
                  div.events-date
                  div.events-place
                    p
                      span.icon
                        i.fa.fa-calendar
                      span &nbsp; {{eventContent.start_date | moment('DD/MM/YYYY')}}&nbsp;
                      span(v-if="eventContent.end_date") - {{eventContent.end_date | moment('DD/MM/YYYY')}}
                    p
                      span.icon
                        i.fa.fa-map-marker
                      span &nbsp; {{eventContent.place}}
                    p
                      span.icon
                        i.fa.fa-users
                      span &nbsp; {{eventContent.hosts.join(', ')}}
                    p(v-if="eventContent.files.length")
                      span.icon
                        i.fa.fa-files-o
                      span &nbsp; Arquivos disponíveis: {{eventContent.files.length}}.
            article.media(v-if="!events.length")
              div.media-left
                img(:src="'news/not_found.png' | imgSrc")
              div.media-content
                div.content
                  h4.title.is-4 Nenhum evento encontrado.
            div.pagination-container
              pagination(modifiers="is-centered" v-bind:currentPage="currentPage" v-bind:lastPage="totalPages" v-bind:routeName="routeName")
      br
</template>

<script>
  import Vue from 'vue'
  import Breadcrumb from '../../../components/breadcrumb/Breadcrumb.vue'
  import Pagination from '../../../components/pagination/Pagination'
  import eventsService from '../../../services/events'
  import { getSeoScript, getSeoTitle, getSeoMeta } from '../../../services/seo'
  import VbSwitch from 'vue-bulma-switch'

  const EVENTS_PER_PAGE = 10

  export default {
    components: {
      Pagination,
      Breadcrumb,
      VbSwitch
    },
    head: {
      title () {
        return getSeoTitle('Eventos')
      },
      meta () {
        return getSeoMeta({
          title: 'Eventos - Escoteiros de Minas',
          description: 'Confira os eventos da Região Escoteira de Minas Gerais.'
        })
      },
      script () {
        return getSeoScript('list-events', this.events)
      }
    },
    data () {
      return {
        showPastEvents: false,
        selected: {section: [], hosts: []},
        sections: eventsService.getSections(),
        hosts: eventsService.getHosts(),
        filter: '',
        events: [],
        currentPage: 1,
        limit: 4,
        totalPages: 1,
        routeName: this.$route.name
      }
    },
    created () {
      const vm = this
      let count = 0
      this.$on('okHead', () => {
        count++
        if (!window.prerenderReady && count === 2) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })

      const page = this.$route.query.page || 1
      const filter = this.$route.query.filter || ''

      eventsService.get({page: page, limit: EVENTS_PER_PAGE, start_date: Vue.moment().format('DD/MM/YYYY'), filter: filter}).then((response) => {
        vm.events = response.body.resources
        vm.currentPage = response.body.meta.currentPage
        vm.limit = response.body.meta.limit
        vm.totalPages = response.body.meta.totalPages
        vm.filter = filter
        vm.$emit('updateHead')
      })
    },
    methods: {
      applySearch () {
        this.page = 1
        let query = {page: this.page, limit: EVENTS_PER_PAGE}

        if (!this.showPastEvents) query['start_date'] = Vue.moment().format('DD/MM/YYYY')
        if (this.filter.length) query['filter'] = this.filter
        if (this.selected.section.length) query['section'] = this.selected.section
        if (this.selected.hosts.length) query['hosts'] = this.selected.hosts

        eventsService.get(query).then((response) => {
          this.events = response.body.resources
          this.currentPage = response.body.meta.currentPage
          this.limit = response.body.meta.limit
          this.totalPages = response.body.meta.totalPages
        })
      },
      selectFilter (element, type) {
        let selected = this.selected[type]
        if (!selected.includes(element)) {
          selected.push(element)
          this.applySearch()
        }
      },
      unselectFilter (type, index) {
        this.selected[type].splice(index, 1)
        this.applySearch()
      }
    },
    watch: {
      showPastEvents () {
        this.applySearch()
      },
      '$route' (to, from) {
        const page = to.query.page
        let query = {page: page, limit: EVENTS_PER_PAGE}

        if (!this.showPastEvents) query['start_date'] = Vue.moment().format('DD/MM/YYYY')
        if (this.filter.length) query['filter'] = this.filter
        if (this.selected.section.length) query['section'] = this.selected.section
        if (this.selected.hosts.length) query['hosts'] = this.selected.hosts

        eventsService.get(query).then((response) => {
          this.events = response.body.resources
          this.currentPage = response.body.meta.currentPage
          this.limit = response.body.meta.limit
          this.totalPages = response.body.meta.totalPages
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'
  // EVENTS BANNER
  .events-banner
    background-blend-mode: multiply
    background-color: rgba(41, 0, 0, 0.68)
    background-image: url('~assets/images/events-banner.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: 0 20%
    .hero-body
      padding-top: 12rem
      min-height: 25rem
      section.container
        text-align: left
      .subtitle
        margin-bottom: 0px
        color: white
        text-transform: uppercase
        font-family: 'Roboto'
        font-weight: 300

  .events-home
    .main-container
      .menu-selected
        padding-bottom: 5rem
      .switch-menu
        padding-top: 1rem
      .search-container
        padding: 2rem 0
        input
          width: 100%
      .pagination-container
        padding: 2rem
      > .title
        text-transform: uppercase
      > .subtitle
        text-transform: lowercase
      padding-top: 2rem
      padding-bottom: 1rem
      article
        flex-direction: column
        +desktop
          flex-direction: row
      .media-left
        align-self: center
        justify-content: center
        width: 100%
        +desktop
          width: 20%
          padding-right: 1rem
      .media-content
        display: flex
        align-self: center
        padding-top: 1rem
        +desktop
          padding-top: 0
        .title
          margin-bottom: 0
        .events-date
          margin-bottom: 1.5rem
        .events-preview
          overflow: hidden
          text-overflow: ellipsis
          line-height: 1.5rem
          height: 3rem
</style>
