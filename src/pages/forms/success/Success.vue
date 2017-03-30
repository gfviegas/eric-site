<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 SOLICITAÇÃO CONCLUÍDA
      p Solicitação feita com sucesso.

      div
        div.notification.is-primary.code-notification
          p
            strong Sucesso!
          p Seu pedido foi feito com sucesso. Para acompanhar o status do seu pedido guarde o código a seguir para usar na consulta. Note que este código não pode ser gerado novamente, então guarde-o bem!
          p Seu código é: #[strong.code {{id}}]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    head: {
      title: getSeoTitle('Solicitação Concluída'),
      meta: () => {
        return getSeoMeta({
          description: 'Solicitações de Distintivos Especiais - Escoteiros de Minas Gerais'
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
  @import '~assets/sass/config.sass'

  .content-block
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    .code-notification
      margin-top: 2rem
      strong
        color: white
        &.code
          font-size: 1.5rem
          color: #005c35
</style>
