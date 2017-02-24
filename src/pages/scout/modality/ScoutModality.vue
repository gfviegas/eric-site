<template lang="pug">
div.scout-modality
  div.content-block
    h3.title.is-3 MODALIDADES
    p Existem três vertentes do Escotismo, diferenciando somente no foco de suas atividades, mas preservando os valores
  div.content-block
    h3.title.is-3 MODALIDADE BÁSICA
    p A Modalidade Básica, caracterizada pelo escoteiro típico, sendo a modalidade com o maior número de integrantes, apresenta grande flexibilidade de atividades e com formação geralmente mais voltada para a atividade excursionista, campismo e montanhismo.
    p Os acampamentos exigem inúmeras técnicas escoteiras, dentre elas a que se destaca é a pioneiria, uma forma de suprir a necessidade de móveis e como um modo de proteção, normalmente constituídas por troncos de madeira e unidas através de amarras.
  div.content-block
    h3.title.is-3 MODALIDADE DO AR
    p O Escotismo Modalidade do Ar procura desenvolver nos jovens, além dos valores da Modalidade Básica, o gosto pelo aeromodelismo, aeroplanos, pelos problemas de aeroportos, aeronavegação, aeropropulsão, pelo pára-quedismo e pelos esportes aéreos, pelo estudo da meteorologia e da cosmografia, pelo mundo aeroespacial e pela cosmonáutica, incentivando o culto das tradições da aeronáutica do país.
    p As ênfases educativas das Modalidades do Mar e do Ar são sugeridas aos Ramos Escoteiro e Sênior. No Ramo Lobinho o desenvolvimento nas Modalidades do Mar e do Ar ocorrem sob forma de atividades especiais, especialidades, etc. No Ramo Pioneiro se reflete em Projetos de Equipes de Interesse.
  div.content-block
    h3.title.is-3 MODALIDADE DO MAR
    p O que caracteriza o Escotismo Modalidade do Mar é que eles realizam suas atividades preferencialmente na água, onde quer que exista água em quantidade e profundidade suficientes para que uma embarcação possa navegar, seja ela de que tipo for. Sendo assim podem existir Escoteiros do Mar, seja esta água de mar, de rio, lago, lagoa ou pantanal. Procurando desenvolver nos jovens o gosto pela vida no mar, pelas artes e técnicas marinheiras, pela navegação à vela e a motor, pelas viagens e transportes marítimos, pela pesca, pelo estudo da oceanografia, pela exploração e pelos esportes náuticos, incentivando o culto das tradições da marinha. A gama de atividades que podem ser realizadas é enorme, indo da tradicional navegação a remo até mergulho ou windsurf.
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Escotismo'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o que é o Escotismo e o que fazemos - Escoteiros de Minas Gerais'
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

  .content-block
    counter-reset: item
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    ul
      list-style: disc
      padding: 0 2rem
      li
        padding: 0.5rem 0
    ol
      list-style: none
      li
        padding: 1rem 0
        counter-increment: item
        &::before
          content: counter(item) "."
          padding-right: 1rem
          display: inline-block
          font-family: Roboto
          font-weight: 400
          font-size: 1.3rem
</style>
