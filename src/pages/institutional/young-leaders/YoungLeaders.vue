<template lang="pug">
  div.young-leaders
    div.container.container-responsive.main-container
      h2.title.is-2 Núcleo Regional de Jovens Líderes
      h5.subtitle.is-5 O Núcleo Regional de Jovens Líderes é a estrutura gestora da Rede de Jovens em nível regional, sendo composto por 4 jovens escolhidos por seus pares durante o Fórum Regional, esses jovens trabalham coordenando e, principalmente, animando as diversas iniciativas juvenis e também fazem a representação juvenil dentro das estruturas do nível regional.
      br
      h3.title.is-3 O que é a Rede Nacional de Jovens Líderes?
      div.content
        p A Rede Nacional de Jovens Líderes é a estrutura gestora de toda a política de participação juvenil da UEB, seja ela dentro ou fora do movimento escoteiro, a rede é formada por três pilares: núcleos, fóruns e sistema de regras, tem como principal foco a mobilização e comunicação, sendo esta uma excelente definição da rede, a rede têm como objetivos:
        ol
          li no âmbito da seção escoteira, apoiar a correta aplicação do método escoteiro, em especial as práticas democráticas previstas pelo Programa de Jovens.
          li no âmbito da organização escoteira, com a inserção participativa nos processos de tomadas de decisão.
          li no âmbito da sociedade, com a promoção de iniciativas de ação e desenvolvimento comunitário.
        p Sendo esta uma ferramenta de caráter temporário para através dela e outras iniciativas alcançar o objetivo de inserção qualitativa do jovem no processo de tomada de decisão em qualquer ambiente.
      br
      h3.title.is-3 Quem são os Jovens Líderes?
      div.content
        p Membros da UEB, que possuem de 18 a 25 anos de idade, sendo pioneiros, escotistas ou dirigentes, com participação efetiva nos processos de tomada de decisão da Organização Escoteira, de modo a contribuir para os objetivos da “política de envolvimento dos jovens”, atuantes em qualquer seção ou função nos diversos níveis da organização e no contexto social no qual estão inseridos
      br
      h3.title.is-3 Membros do Núcleo Regional de Jovens Líderes
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Lucas Oliveira Godinho
              div.content
                p Coordenador 2014-2015
                p Email: #[a(href="mailto:godinho@souescoteiro.org.br") godinho@souescoteiro.org.br]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Bruna Caroline Dias de Andrade
              div.content
                p Coordenadora 2015-2016
                p Email: #[a(href="mailto:b.runadeandrade@hotmail.com") b.runadeandrade@hotmail.com]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Paulo Henrique do Anjos
              div.content
                p Comunicador 2014-2015
                p Email: #[a(href="mailto:phanjosgv@hotmail.com") phanjosgv@hotmail.com]
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Wesley Assis
              div.content
                p Comunicador 2015-2016
                p Email: #[a(href="mailto:wesleyassis9@souescoteiro.org.br") wesleyassis9@souescoteiro.org.br]
      br
      h3.title.is-3 Site da Rede Regional de Jovens Líderes
      div.content
        p Acesse o #[a(href="http://jovenslideresmg.wordpress.com/") site da Rede Regional de Jovens Líderes].
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Jovens Líderes'),
      meta: () => {
        return getSeoMeta({
          description: 'Saiba mais sobre os Jovens Líderes dos Escoteiros de Minas Gerais'
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .young-leaders
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
      padding-top: 2rem
      padding-bottom: 2rem
      .columns
        justify-content: center
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
