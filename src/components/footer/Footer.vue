<template lang="pug">
  footer.footer
    div.columns.container.container-responsive
      div.column.is-narrow.logo-column
        a.nav-item.logo-item
          img(src="~assets/images/logo.png" alt="Logo")
      div.column.adress.justify-content-center.common-content.is-narrow
        p Rua Mariano Procópio, 90 - mariano procópio
        p Juiz de Fora - Minas Gerais
        p Cep: 32.035-780
        p (32) 3215-7674
      div.column.email.justify-content-center.common-content
        p escritorio@escoteirodeminas.org.br
      div.column.social.justify-content-center.common-content
        p
          a.icon.social.padded-left(href="https://twitter.com/EscoteirosMG" target="BLANK")
            i.fa.fa-twitter
          a.icon.social(href="https://www.facebook.com/EscoteirosDeMinasGerais" target="BLANK")
              i.fa.fa-facebook
    div.columns.footer-foot
      div.content.has-text-centered.container.column
        p.
          Copyright 2017 © ESCOTEIROS DE MINAS - Todos os direitos reservados #[br]
          #[small Desenvolvido por #[a(href="http://gfviegas.com" target="BLANK") Gustavo Viegas]]
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
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  footer
    padding: 0!important
    background: #1b6c96 !important

    *
      +mobile
        text-align: center

    +desktop
      .columns
        margin-bottom: 0 !important
        .column
          padding-bottom: 0

    &::before
      position: relative
      top: -1rem
      display: block
      height: 2rem
      width: 100%
      content: ''
      background: url(~assets/images/footer-border.png)
      background-repeat: repeat-x
      background-size: cover
      background-position: 30% 0
    .logo-column
      +desktop
        width: 25%
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
    .adress
      color: #83dae0
    .email, .social
      color: white
    .social
      .icon.padded-left
        padding-left: 1.3rem
    .footer-foot
      background: #0d3a52
      +desktop
        margin-top: 0
      p
        color: #46aade
        padding: 0.5rem
</style>
