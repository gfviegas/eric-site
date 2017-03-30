<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 DISTINTIVOS ESPECIAIS
      p Solicite os distintivos especiais de cada seção

      form(name="rewardForm" v-on:submit.prevent="submitForm()" novalidate)
        p.subtitle.is-5.has-text-centered Dados do Solicitador
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 012345-6" name="author.register" v-model="author.register" v-validate="validations.register" data-vv-as="Registro do Solicitador" v-bind:class="{'is-danger': errors.has('author.register')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Email
          div.control
            input.input(type="text" placeholder="Ex: joao@gmail.com" name="author.email" v-model="author.email" v-validate="validations.email" data-vv-as="Email do Solicitador" v-bind:class="{'is-danger': errors.has('author.email')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Telefone (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 3399-9933" name="author.phone" v-model="author.phone" v-validate="validations.phone" data-vv-as="Telefone do Solicitador" v-bind:class="{'is-danger': errors.has('author.phone')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Celular (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 3399-9933" name="author.cellphone" v-model="author.cellphone" v-validate="validations.cellphone" data-vv-as="Celular do Solicitador" v-bind:class="{'is-danger': errors.has('author.cellphone')}")
        div.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Número do GE" name="author.group.number" v-model="author.group.number" v-validate="validations.group.number" data-vv-as="Número do Grupo do Solicitador" v-bind:class="{'is-danger': errors.has('author.group.number')}")
            input.input(type="text" placeholder="Nome do Grupo Escoteiro" name="author.group.name" v-model="author.group.name" v-validate="validations.group.name" data-vv-as="Nome do Grupo do Solicitador" v-bind:class="{'is-danger': errors.has('author.group.name')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Função no Escotismo
          div.control
            input.input(type="text" placeholder="Ex: Diretor Técnico" v-model="author.role")
        br
        p.subtitle.is-5.has-text-centered Dados do Agraciado
        div.field.control.is-horizontal
          div.control-label
            label.label Nome
          div.control
            input.input(type="text" placeholder="Ex: Maria da Silva" name="gifted.name" v-model="gifted.name" v-validate="validations.name" data-vv-as="Nome do Agraciado" v-bind:class="{'is-danger': errors.has('gifted.name')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 654321-0" name="gifted.register" v-model="gifted.register" v-validate="validations.register" data-vv-as="Registro do Agraciado" v-bind:class="{'is-danger': errors.has('gifted.register')}")
        div.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Número do GE" name="gifted.group.number" v-model="gifted.group.number" v-validate="validations.group.number" data-vv-as="Número do Grupo do Agraciado" v-bind:class="{'is-danger': errors.has('gifted.group.number')}")
            input.input(type="text" placeholder="Nome do Grupo Escoteiro" name="gifted.group.name" v-model="gifted.group.name" v-validate="validations.group.name" data-vv-as="Nome do Grupo do Agraciado" v-bind:class="{'is-danger': errors.has('gifted.group.name')}")
        br
        p.subtitle.is-5.has-text-centered Dados da Solicitação
        div.field.control.is-horizontal
          div.control-label
            label.label Condecoração Solicitada
          div.control
            div.select.is-fullwidth
              select(name="form.reward" v-model="form.reward" v-validate="validations.reward" data-vv-as="Distintivo Solicitado" v-bind:class="{'is-danger': errors.has('form.reward')}")
                option(default value="") Selecione...
                option(value="Diploma de Mérito Regional") Diploma de Mérito Regional
                option(value="Pin de Cônjuge") Pin de Cônjuge
                option(value="Bons Serviços 5 anos") Bons Serviços 5 anos
                option(value="Bons Serviços 10 anos") Bons Serviços 10 anos
                option(value="Bons Serviços 15 anos") Bons Serviços 15 anos
                option(value="Bons Serviços 20 anos") Bons Serviços 20 anos
                option(value="Bons Serviços 30 anos") Bons Serviços 30 anos
                option(value="Bons Serviços 40 anos") Bons Serviços 40 anos
                option(value="Velho Lobo") Velho Lobo
                option(value="Gratidão Bronze") Gratidão Bronze
                option(value="Gratidão Prata") Gratidão Prata
                option(value="Gratidão Ouro") Gratidão Ouro
                option(value="Gratidão Ouro") Gratidão Ouro
                option(value="Cruz de São Jorge") Cruz de São Jorge
                option(value="Cruz de Valor Caio Viana Martins Bronze") Cruz de Valor Caio Viana Martins Bronze
                option(value="Cruz de Valor Caio Viana Martins Prata") Cruz de Valor Caio Viana Martins Prata
                option(value="Cruz de Valor Caio Viana Martins Ouro") Cruz de Valor Caio Viana Martins Ouro
                option(value="Tucano de Prata") Tucano de Prata
                option(value="Lobo Guará") Lobo Guará
                option(value="Tiradentes") Tiradentes
                option(value="Tapir de Prata") Tapir de Prata
                option(value="Trofeu Araucáia: 25 anos de fundação GE") Trofeu Araucáia: 25 anos de fundação GE
                option(value="Trofeu Jatobá: 50 anos de fundação GE") Trofeu Jatobá: 50 anos de fundação GE
                option(value="Trofeu Jacarandá: 75 anos de fundação GE") Trofeu Jacarandá: 75 anos de fundação GE
                option(value="Trofeu Jequitibá: 100 anos de fundação GE") Trofeu Jequitibá: 100 anos de fundação GE
        div.field.control.is-horizontal
          div.control-label
            label.label Justificativa
          div.control
            textarea.textarea(placeholder="Justificativa" name="form.resume" v-model="form.resume" v-validate="validations.resume" data-vv-as="Justificativa da Solicitação" v-bind:class="{'is-danger': errors.has('form.resume')}")

        div.field
          p.control.submit-button
            button.button.is-success.is-large(type="submit" v-if="!submitting") Enviar
            button.button.is-success.is-disabled.is-loading.is-large(type="button" v-if="submitting") Enviando...

        div.error-messages(v-show="errors.any() || submitted")
          p.help.is-danger(v-for="error in errors.all()") {{ error }}
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import rewardsService from '../../../services/rewards'
  import { router } from '../../../app'

  export default {
    notifications: {
      showInvalidFormNotification: {
        title: 'Formulário Inválido',
        message: 'Existem campos inválidos ou obrigatórios não preenchidos no formulário!',
        type: 'error'
      },
      showCreateErrorNotification: {
        title: 'Erro de Servidor',
        message: 'Houve um erro inesperado. Tente mais tarde!',
        type: 'error'
      },
      showCreateSuccessNotification: {
        title: 'Sucesso!',
        message: 'Seu pedido foi realizado com sucesso!',
        type: 'success'
      }
    },
    data () {
      const emailValidations = {rules: {required: true, email: true}}
      const registerValidations = {rules: {required: true, regex: /[0-9]*-([0-9])/}}
      const phoneValidations = {rules: {required: true}}
      const resumeValidations = {rules: {max: 350, min: 50, required: true}}
      const nameValidations = {rules: {max: 50, required: true}}
      const rewardValidations = {rules: {required: true}}

      const groupNumberValidations = {rules: {max: 3, numeric: true, required: true}}
      const groupNameValidations = {rules: {max: 100, required: true}}

      return {
        submitting: false,
        submitted: false,
        validations: {
          email: emailValidations,
          register: registerValidations,
          phone: phoneValidations,
          cellphone: phoneValidations,
          resume: resumeValidations,
          name: nameValidations,
          reward: rewardValidations,
          group: {
            number: groupNumberValidations,
            name: groupNameValidations
          }
        },
        form: {},
        author: {group: {}},
        gifted: {group: {}}
      }
    },
    methods: {
      submitForm () {
        this.submitted = true
        this.submitting = true

        this.$validator.validateAll()
        .then(() => {
          let data = {
            type: 'reward',
            reward: this.form.reward,
            resume: this.form.resume,
            author: this.author,
            gifted: this.gifted
          }

          rewardsService.create(data)
          .then((response) => {
            this.showCreateSuccessNotification({show: true})
            router.push({name: 'formsSuccess', params: {id: response.body._id}})
          })
          .catch((response) => {
            this.showCreateErrorNotification({show: true})
          })
          .finally(() => {
            this.submitting = false
          })
        })
        .catch(() => {
          this.showInvalidFormNotification({show: true})
          this.submitting = false
        })
      }
    },
    head: {
      title: getSeoTitle('Condecorações e Recompensas'),
      meta: () => {
        return getSeoMeta({
          description: 'Preencha o formulário de condecorações e recompensas - Escoteiros de Minas Gerais'
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
    form
      margin-top: 2rem
      .submit-button
        text-align: center
</style>
