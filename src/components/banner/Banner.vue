<template lang="pug">
  section.banner-section
    article.fixed-post
      div.columns.container.container-responsive
        div.column.is-9.columns
          div.column
            a(href="http://jamboree.org.br/" target="_BLANK")
              h2.title.is-2 7º Jamboree Nacional Escoteiro
            br
            p.content Imagine um grande acampamento, com pessoas de todos os lugares do país, uma diversidade de culturas e crenças e muitas atividades animadoras... O Jamboree é a oportunidade de conhecer outros escoteiros e outras realidades, promovendo a paz por meio do crescimento, da integração e da compreensão.
            p.content Com o tema “Explorando novos caminhos”, o evento colocará a exploração em evidência, e oferecerá atividades que reforcem o gosto por explorar as várias dimensões do mundo. A palavra “escoteiro” significa “explorador”, o que vai na frente, o que dá a notícia do que está para acontecer, como fizeram muitos pioneiros que escreveram nossa história.
            p.content O Parque do Peão - Os Independentes, na cidade de Barretos, em São Paulo será o cenário ideal para que os jovens de 11 a 17 anos “explorem novos caminhos”, pois ali se viveu plenamente a tradição das comitivas, os hábitos da vida dos tropeiros e os caminhos dos sertanejos.
        div.column.is-3.right-column
          a(href="http://jamboree.org.br/" target="_BLANK")
            figure.image.is-square
              img(src="http://jamboree.org.br/wp-content/themes/jamboree/imagens/logo_jamboree_2018.png")
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
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .fixed-post
    border-top: 3px solid lighten($orange, 20%)
    padding-bottom: 7rem
    text-align: left
    +desktop
      text-align: justify
      padding-bottom: 2rem
    padding-top: 2rem
    background: darken($orange, 10%)
    .title, .content
      color: lighten($orange, 55%)
    .right-column
      +desktop
        padding-left: 2rem
      button
        margin-top: 2rem
        margin-bottom: 1rem
</style>
