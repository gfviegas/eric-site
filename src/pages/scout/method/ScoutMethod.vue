<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 MÉTODO ESCOTEIRO
      p O Método Escoteiro baseia-se em cinco pilares essenciais:
      ol
        li
          span.title.is-5 Aceitação da Promessa e da Lei Escoteira: todos os membros assumem, voluntariamente, um compromisso de vivência da Promessa e da Lei Escoteira.
          p Sistema de Valores e Princípios baseados na Promessa e na Lei Escoteira, todos membros assumem o compromisso voluntariamente.
        li
          span.title.is-5 Aprender fazendo - educando pela ação, o Escotismo valoriza:
          ul
            li O aprendizado pela prática;
            li O desenvolvimento da autonomia, baseado na autoconfiança e iniciativa;
            li Os hábitos de observação, indução e dedução..
        li
          span.title.is-5 Vida em equipe - denominada nas Tropas Escoteiras e Seniores de “Sistema de Patrulhas”, incluindo:
          ul
            li A descoberta e a aceitação progressiva de responsabilidade;
            li A disciplina assumida voluntariamente;
            li A capacidade tanto para cooperar como para liderar.
        li
          span.title.is-5 Atividades progressivas, atraentes e variadas compreendendo:
          ul
            li Jogos;
            li Habilidades e técnicas úteis, estimuladas por um sistema de distintivos;
            li Vida ao ar livre e em contato com a natureza;
            li Interação com a comunidade;
            li Mística e ambiente fraterno.
        li
          span.title.is-5 Desenvolvimento pessoal com orientação individual, considerando:
          ul
            li A realidade e o ponto de vista de cada criança, adolescente ou jovem;
            li A confiança nas potencialidades dos educandos;
            li O exemplo pessoal do adulto;
            li Seções com número limitado de jovens e faixa etária própria.
        li
          span.title.is-5 Os cinco elementos atuam como uma rede, e podem ser visto singularmente como:
          ul
            li Cada um tem uma função específica;
            li Interação de cada um reforça o mesmo;
            li Contribuí para toda proposta a ser atingida.
      p Uma importante característica do sistema é a sinergia criada, o efeito do sistema é muito maior do que um elemento sozinho. Cada elemento do Método tem função educacional; cada elemento completa o impacto do outro. Se algum elemento se perde ou não é utilizado propositadamente, o sistema não pode servir para a proposta inicial - o progressivo e holístico desenvolvimento do jovem.
      p O Método Escoteiro foi desenvolvido para estimular o desenvolvimento do jovem para além dos anos de escotismo. Isso significa que funciona para todos os jovens mesmo que ele tenha oitenta anos.
      p Pode parecer que há um erro, uma pessoa não pode estar fisicamente em contato com o mundo natural e dando suporte a um hospital, mas ela pode sim conter elementos da natureza como um plano de fundo, ou mesmo presente utilizando métodos que não deteriorem a natureza, por exemplo.
    div.content-block
      h3.title.is-3 O SISTEMA NATURAL DE PROGRESSÃO DE AUTO-EDUCAÇÃO
      p O Método Escoteiro é um sistema de progressão, a intenção é estimular que cada jovem desenvolva suas capacidades e seus interesses. Ele faz isso colocando desafios a serem superados, aventuras, incentivando a explorar, a descobrir, a experimentar, a inventar e a criar a capacidade de achar soluções; mas sempre respeitando-os individualmente, suas barreiras.
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Método Escoteiro'),
      meta: () => {
        return getSeoMeta({
          title: 'Método Escoteiro - Escoteiros de Minas',
          description: 'Conheça o que é o Escotismo e o que fazemos - Escoteiros de Minas Gerais'
        })
      }
    },
    created () {
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common.sass'

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
      > li
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
