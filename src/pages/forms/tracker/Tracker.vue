<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 ACOMPANHAR SOLICITAÇÃO
      p Verifique o status de sua solicitação preenchendo o formulário abaixo

      form(novalidate v-on:submit.prevent="submitForm()")
        div.control.is-horizontal
          div.control-label
            label.label Código de Referência
          div.control
            input.input(type="text" placeholder="Ex: ABC0192D324" name="query" v-model="query")
            button.button.is-info(type="submit") Pesquisar
      div(v-if="rewardData")
        div.notification.is-info.code-notification
          p
            strong Acompanhamento
          hr
          p Solicitação de #[strong {{rewardData.reward}}] para #[strong {{rewardData.gifted.name}}]
          p Solicitado por #[strong {{rewardData.author.email}}] em {{rewardData.created_at | moment("LLLL")}}
          p Status Atualizado em {{rewardData.updated_at | moment("LLLL")}}
          br
          p
            | O status de sua solicitação é: #[strong.code {{message}}] #[br]
            b
              small {{description}}
          br
          p(v-if="rewardData.reply && rewardData.reply.length") Parecer: #[strong {{rewardData.reply}}]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import rewardsService from '../../../services/rewards'

  export default {
    notifications: {
      showInvalidCodeNotification: {
        title: 'Código Inválido',
        message: 'O código digitado é invalido. Confira o código digitado e tente novamente!',
        type: 'error'
      },
      showNotFoundRewardNotification: {
        title: 'Não Encontrado',
        message: 'Solicitação não encontrada. Confira o código digitado e tente novamente!',
        type: 'error'
      },
      showFindErrorNotification: {
        title: 'Erro de Servidor',
        message: 'Houve um erro inesperado. Tente mais tarde!',
        type: 'error'
      }
    },
    data () {
      return {
        rewardData: false,
        query: '',
        message: '',
        description: ''
      }
    },
    methods: {
      submitForm () {
        this.$ga.trackEvent('Requests Form', 'Search')
        this.rewardData = false
        this.message = ''
        this.description = ''

        rewardsService.find(this.query)
        .then((response) => {
          this.rewardData = response.body
          let status = this.getStatusMessage()
          this.message = status.message
          this.description = status.description
        })
        .catch((response) => {
          if (response.status === 404) {
            this.showNotFoundRewardNotification()
          } else if (response.status === 422) {
            this.showInvalidCodeNotification()
          } else {
            this.showFindErrorNotification()
          }
        })
      },
      getStatusMessage () {
        if (!this.rewardData || !this.rewardData.status) return false
        switch (this.rewardData.status) {
          case 'waiting':
            return {message: 'Aguardando', description: 'Sua solicitação foi recebida e está aguardando análise.'}
          case 'analyzing':
            return {message: 'Analisando', description: 'A Região Escoteira está analisando a sua solicitação.'}
          case 'issued':
            return {message: 'Emitido', description: 'A solicitação foi aprovada e a sua recompensa já foi emitida.'}
          case 'rejected':
            return {message: 'Indeferido', description: 'Sua solicitação foi negada.'}
          case 'approved':
            return {message: 'Deferido', description: 'Sua solicitação foi aprovada e aguarda emissão.'}
        }
      }
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    head: {
      title: getSeoTitle('Acompanhar Solicitação'),
      meta: () => {
        return getSeoMeta({
          title: 'Acompanhar Solicitação - Escoteiros de Minas',
          description: 'Acompanhamento de Solicitações de Recompensas - Escoteiros de Minas Gerais'
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
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    form
      margin-top: 1rem
    .code-notification
      margin-top: 2rem
      strong
        color: white
        &.code
          font-size: 1.5rem
          text-transform: uppercase
          color: rgb(35, 255, 0)
</style>
