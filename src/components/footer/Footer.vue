<template lang="pug">
  footer.footer
    div.columns.container.container-responsive.first-row
      div.column.adress.justify-content-center.common-content.is-narrow
        p Rua Mariano Procópio, 90 - mariano procópio
        p Juiz de Fora - Minas Gerais
        p Cep: 36.035-780
        p (32) 3215-7674
      div.column.is-narrow.logo-column
        a.nav-item.logo-item
          img(src="~assets/images/logo-ueb.png" alt="Logo")
    div.columns.footer-foot
      div.content.has-text-centered.container.column
        p
          span Copyright {{ thisYear }} © ESCOTEIROS DE MINAS - Todos os direitos reservados
          br
          small.
            Desenvolvimento: #[a(@click="trackClick('Developer Link')" href="https://gfviegas.com" target="BLANK") Gustavo Viegas]
            | ERIC - Equipe Regional de Imagem e Comunicação de Minas Gerais
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
    trackClick (name) {
      this.$ga.trackEvent(name, 'Click')
    },
    toggleMenuVisibility () {
      this.menuShown = !this.menuShown
    }
  },
  computed: {
    thisYear () {
      return this.$moment().format('YYYY')
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/common'
  footer
    padding: 0!important
    background: $primary !important

    *
      +mobile
        text-align: center

    +desktop
      .columns
        margin-bottom: 0 !important
        .column
          padding-bottom: 0

    .columns.first-row
      justify-content: flex-end

    // &::before
    //   position: relative
    //   top: -1rem
    //   display: block
    //   height: 2rem
    //   width: 100%
    //   content: ''
    //   background: url(~assets/images/footer-border.png)
    //   background-repeat: repeat-x
    //   background-size: cover
    //   background-position: 30% 0
    .logo-column
      +desktop
        width: auto
      .logo-item
        display: flex
        background: white
        border-radius: 1rem 1rem 0 0
        padding: 1rem
        +desktop
          height: 10rem
          justify-content: center
        img
          max-height: 8rem
    .common-content
      text-transform: uppercase
      padding-top: 2rem
      align-self: flex-start
      text-align: right
      font-weight: bold
    .adress
      color: white
    .email, .social
      color: white
    .social
      display: inline-block
      .icon.padded-left
        // padding-left: 1.3rem
    .footer-foot
      background: darken($primary, 10%)
      +desktop
        margin-top: 0
      p
        color: white
        padding: 0.5rem
    a
      color: $secondary
      &:hover
        color: lighten($secondary, 15%)
</style>
