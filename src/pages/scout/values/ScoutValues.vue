<template lang="pug">
div.scout-values
  div.content-block
    h3.title.is-3 MISSÃO
    p Contribuir para a educação de jovens, por meio de um sistema de valores baseado na Promessa e na Lei Escoteira, para ajudar a construir um mundo melhor onde as pessoas se realizem como indivíduos e desempenhem um papel construtivo na sociedade.
  div.content-block
    h3.title.is-3 VISÃO
    p Até 2023, o Escotismo no Brasil será o mais relevante movimento de educação juvenil, possibilitando que 200 mil jovens sejam cidadãos e cidadãs ativos, que inspirem mudanças positivas em suas comunidades e no mundo.
  div.content-block
    h3.title.is-3 VISÃO DO ESCOTISMO MUNDIAL
    p Até 2023, o Movimento Escoteiro será o mais importante movimento educacional juvenil do mundo, possibilitando que 100 milhões de jovens sejam cidadãos ativos que inspirem mudanças positivas em suas comunidades e no mundo, baseados em valores comuns.
  div.content-block
    h3.title.is-3 PRINCÍPIOS DO ESCOTISMO
    p A Organização Mundial do Movimento Escoteiro define como Princípios do Escotismo:
      ul
        li Deveres para com Deus (adesão a princípios espirituais e vivência ou busca de uma religião que os expresse);
        li Deveres para com o próximo (participação no desenvolvimento da sociedade com reconhecimento e respeito à dignidade do ser humano e ao equilíbrio do meio ambiente);
        li Dever para consigo próprio (responsabilidade pelo autodesenvolvimento)
  div.content-block
    h3.title.is-3 POSIÇÃO DO ESCOTISMO
    p O Escotismo como força educativa, se propõe a complementar a formação que cada criança, adolescente ou jovem recebe de sua família, de sua escola e de sua orientação religiosa, e de nenhum modo substituirá essas instituições.
    p A União dos Escoteiros do Brasil #[strong não] está ligada a qualquer organização político-partidária. Seus membros, quando usando o vestuário ou o uniforme escoteiro, ou quando representando o Movimento Escoteiro, devem abster-se de tomar parte em reuniões ou atividades político-partidárias.
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
