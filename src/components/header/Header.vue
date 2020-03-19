<template lang="pug">
  header.my-nav.is-fullwidth
    nav.nav
      div.nav-left
        router-link.nav-item.logo-item(:to="{name: 'home'}")
          img(src="~assets/images/logo.png" alt="Logo Escoteiros MG")

      span.nav-toggle(v-on:click="toggleMenuVisibility()")
        span
        span
        span

      div.nav-right.nav-menu(v-bind:class="{ 'is-active': menuShown }")
        div.row
          div.menu-custom
            router-link.is-tab.nav-item(exact v-bind:to="{name: 'institutionalHome'}") Quem Somos
            router-link.is-tab.nav-item(:to="{name: 'newsList'}") Informativos
            a.is-tab.nav-item(href="http://paxtu.escoteiros.org.br/meupaxtu/" target="BLANK") Paxtu
            router-link.is-tab.nav-item(:to="{name: 'formsHome'}") Solicitações
            router-link.is-tab.nav-item(:to="{name: 'documentsHome'}") Documentos
            router-link.is-tab.nav-item(:to="{name: 'contactHome'}") Contato
            a.is-tab.nav-item(href="http://webmail.escoteirosmg.org.br/" target="BLANK") Webmail
          a.is-hidden-desktop.close-menu
            span.icon(@click="toggleMenuVisibility()")
              i.fa.fa-times
</template>

<script>
export default {
  name: 'header',
  data: () => {
    return {
      menuShown: false
    }
  },
  methods: {
    toggleMenuVisibility () {
      this.menuShown = !this.menuShown
      document.querySelector('html').classList.toggle('noscroll')
    }
  },
  watch: {
    $route (route) {
      if (this.menuShown) {
        this.toggleMenuVisibility()
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/common'
  .my-nav
    width: 100%
    background: transparent
    nav
      background: $primary
      align-items: center
      .nav-left
        .logo-item
          width: 65%
          +desktop
            margin-left: 10%
            width: 25%
          img
            width: 100%
            max-height: 4rem
      .nav-toggle
        background: transparent
        +tablet-only
          display: block
        span
          background-color: $secondary
      .nav-right
        .close-menu
          display: flex
          width: 100%
          justify-content: flex-end
          padding: 1rem 3rem

        +tablet-only
          display: none
        +desktop
          padding-right: 5%
          .row
            padding-top: 1%
        &.is-active
          .row
            display: flex
            width: 100%
            flex-direction: column-reverse
          +mobile
            background-color: rgba(0, 0, 0, 0.93)
            height: 100vh
            position: absolute
            top: 0
          +tablet-only
            padding-right: 0
            background-color: rgba(0, 0, 0, 0.93)
            box-shadow: 0 4px 7px rgba($black, 0.1)
            left: 0
            display: none
            right: 0
            top: 100%
            position: absolute
            display: block
            .nav-item
              border-top: 1px solid rgba($border, 0.5)
              padding: 0.75rem
        .menu-custom
          display: flex
          flex-direction: column
          justify-content: flex-end
          padding: 0 10%
          +desktop
            padding: 0 0.5rem
            flex-direction: row
          .nav-item
            margin-bottom: 4px
            border-top: none
            font-family: 'Capsuula'
            color: $secondary
            font-weight: 600
            transform: none
            font-size: 1.1rem

            text-transform: uppercase
            margin: 0.5rem 0

            +desktop
              text-transform: capitalize
            &.is-tab
              +desktop
                padding: 0 0.5rem
                margin-right: 0.25rem
                margin-left: 0.35rem
              text-transform: uppercase
              &:hover
                border-bottom: none
                color: lighten($secondary, 15%)
              &.is-active
                border-top-color: transparent
                border-bottom: 1px solid lighten($secondary, 15%)
                color: lighten($secondary, 15%)
</style>
