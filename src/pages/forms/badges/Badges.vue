<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 DISTINTIVOS ESPECIAIS
      p Solicite os distintivos especiais de cada seção

      form(name="badgeForm" novalidate)
        lp Dados do Solicitador
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 012345-6")
        div.field.control.is-horizontal
          div.control-label
            label.label Email
          div.control
            input.input(type="text" placeholder="Ex: joao@gmail.com")
        div.field.control.is-horizontal
          div.control-label
            label.label Telefone (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 3399-9933")
        div.field.control.is-horizontal
          div.control-label
            label.label Celular (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 99933-9933")
        div.field.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 0º Grupo Escoteiro Imaginário")
        div.field.control.is-horizontal
          div.control-label
            label.label Função no Escotismo
          div.control
            input.input(type="text" placeholder="Ex: Diretor Técnico")

        p Dados do Agraciado
        div.field.control.is-horizontal
          div.control-label
            label.label Nome
          div.control
            input.input(type="text" placeholder="Ex: Maria da Silva")
        //- div.field.control.is-horizontal
        //-   div.control-label
        //-     label.label Nome
        //-     div.control
        //-       input.input(type="text" placeholder="Ex: Maria da Silva")
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 654321-0")
        div.field.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 0º Grupo Escoteiro Imaginário")
        //- div.field.control.is-horizontal
        //-   div.control-label
        //-     label.label Função no Escotismo
        //-   div.control
        //-     input.input(type="text" placeholder="Ex: Membro Juvenil")
        div.field.control.is-horizontal
          div.control-label
            label.label Distintivo Especial Solicitado
          div.control
            div.select.is-fullwidth
              select
                option Cruzeiro do Sul
                option Lis de Ouro
                option Escoteiro da Pátria
                option Ínsignia de BP
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Distintivos Especiais'),
      meta: () => {
        return getSeoMeta({
          description: 'Preencha o formulário de distintivos especiais - Escoteiros de Minas Gerais'
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

  .content-block
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    form
      margin-top: 2rem
</style>
