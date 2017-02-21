<template lang="pug">
  header.my-nav.is-fullwidth
    nav.nav
      div.nav-left
        a.nav-item.logo-item
          img(src="~assets/images/logo.png" alt="Logo Escoteiros MG")

      span.nav-toggle(v-on:click="toggleMenuVisibility()")
        span
        span
        span

      div.nav-right.nav-menu(v-bind:class="{ 'is-active': menuShown }")
        div.row
          div.menu-custom
            a.nav-item Meu Sigue
            a.nav-item Sigue Administrativo
            a.nav-item Login &nbsp;&nbsp;
              span.icon: i.fa.fa-user-circle-o
          div.menu-custom
            router-link.is-tab.nav-item(exact)(:to="{name: 'home'}") Home
            router-link.is-tab.nav-item(:to="{name: 'institutionalHome'}") Institucional
            router-link.is-tab.nav-item(:to="{name: 'newsList'}") Notícias
            a.nav-item.is-tab Escotismo
            a.nav-item.is-tab Eventos
            a.nav-item.is-tab Pra Você
            a.nav-item.is-tab Contato
            a.nav-item.is-tab Seja Escoteiro
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
  @import '~assets/sass/config.sass'
  .my-nav
    position: absolute
    width: 100%
    background: transparent
    nav
      background: rgba(36, 34, 34, 0.5)
      align-items: center
      .nav-left
        .logo-item
          background: white
          border-radius: 0 0 1rem 1rem
          position: absolute
          top: 0
          left: 10%
          padding: 1rem
          width: 65%
          +desktop
            width: 25%
          img
            width: 100%
            max-height: 8rem
      .nav-toggle
        background: transparent
        +tablet-only
          display: block
        span
          background-color: $verde-limao
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
            background-color: rgba(0, 0, 0, 0.85)
            height: 100vh
            position: absolute
            top: 0
          +tablet-only
            padding-right: 0
            background-color: rgba(0, 0, 0, 0.85)
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
          +mobile, +tablet
            padding: 0 10%
          +desktop
            padding: 0
            flex-direction: row
          .nav-item
            margin-bottom: 4px
            border-top: none
            font-family: 'Roboto'
            font-weight: 300
            color: white

            text-transform: uppercase
            margin: 0.5rem 0

            +desktop
              text-transform: capitalize
            &.is-tab
              +desktop
                padding: 0
                margin-right: 0.5rem
                margin-left: 0.5rem
              text-transform: uppercase
              &:hover
                border-bottom: none
                color: $verde-limao
              &.is-active
                border-top-color: transparent
                border-bottom: 2px solid $verde-limao
                color: $verde-limao
</style>
