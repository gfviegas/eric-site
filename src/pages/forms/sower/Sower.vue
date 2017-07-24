<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 DISTINTIVOS DE SEMEADOR
      p Solicite o distintivo de semeador

      form(name="sowerForm" v-on:submit.prevent="submitForm()" novalidate)
        p.subtitle.is-5.has-text-centered Dados do Solicitante
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 012345-6" name="author.register" v-model="author.register" v-validate="validations.register" data-vv-as="Registro do Solicitante" v-bind:class="{'is-danger': errors.has('author.register')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Nome
          div.control
            input.input(type="text" placeholder="Ex: Robert Smith" name="author.name" v-model="author.name" v-validate="validations.name" data-vv-as="Nome do Solicitante" v-bind:class="{'is-danger': errors.has('author.name')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Email
          div.control
            input.input(type="text" placeholder="Ex: joao@gmail.com" name="author.email" v-model="author.email" v-validate="validations.email" data-vv-as="Email do Solicitante" v-bind:class="{'is-danger': errors.has('author.email')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Telefone (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 3399-9933" name="author.phone" v-model="author.phone" v-validate="validations.phone" data-vv-as="Telefone do Solicitante" v-bind:class="{'is-danger': errors.has('author.phone')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Celular (com DDD)
          div.control
            input.input(type="text" placeholder="Ex: 31 3399-9933" name="author.cellphone" v-model="author.cellphone" v-validate="validations.cellphone" data-vv-as="Celular do Solicitante" v-bind:class="{'is-danger': errors.has('author.cellphone')}")
        div.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Número do GE" name="author.group.number" v-model="author.group.number" v-validate="validations.group.number" data-vv-as="Número do Grupo do Solicitante" v-bind:class="{'is-danger': errors.has('author.group.number')}")
            input.input(type="text" placeholder="Nome do Grupo Escoteiro" name="author.group.name" v-model="author.group.name" v-validate="validations.group.name" data-vv-as="Nome do Grupo do Solicitante" v-bind:class="{'is-danger': errors.has('author.group.name')}")
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
            label.label Distintivo Solicitado
          div.control
            div.select.is-fullwidth
              select(name="form.badge" v-model="form.reward" v-validate="validations.reward" data-vv-as="Distintivo Solicitado" v-bind:class="{'is-danger': errors.has('form.reward')}")
                option(default value="") Selecione...
                option(value="Distintivo de Semeador +1") Distintivo de Semeador +1
                option(value="Distintivo de Semeador +3") Distintivo de Semeador +3
                option(value="Distintivo de Semeador +5") Distintivo de Semeador +5
                option(value="Distintivo de Semeador +10") Distintivo de Semeador +10
                option(value="Distintivo de Semeador +15") Distintivo de Semeador +15
        div.field.control.is-horizontal
          div.control-label
            label.label Justificativa*
          div.control
            textarea.textarea(placeholder="Justificativa" name="form.resume" v-model="form.resume" v-validate="validations.resume" data-vv-as="Justificativa da Solicitação" v-bind:class="{'is-danger': errors.has('form.resume')}")
        p.help * Favor citar se o agraciado já recebeu o Distintivo de Semeador antes e em qual nível.
        br
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
      const resumeValidations = {rules: {max: 2000, min: 50, required: true}}
      const nameValidations = {rules: {max: 80, required: true}}
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
          name: nameValidations,
          resume: resumeValidations,
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
        this.$ga.trackEvent('Requests Form', 'Submit', 'Sower')
        this.submitted = true
        this.submitting = true

        this.$validator.validateAll()
        .then(() => {
          let data = {
            type: 'sower',
            resume: this.form.resume,
            reward: this.form.reward,
            author: this.author,
            gifted: this.gifted
          }

          rewardsService.create(data)
          .then((response) => {
            this.showCreateSuccessNotification()
            router.push({name: 'formsSuccess', params: {id: response.body._id}})
          })
          .catch((response) => {
            this.showCreateErrorNotification()
          })
          .finally(() => {
            this.submitting = false
          })
        })
        .catch(() => {
          this.showInvalidFormNotification()
          this.submitting = false
        })
      }
    },
    head: {
      title: getSeoTitle('Distintivo de Semeador'),
      meta: () => {
        return getSeoMeta({
          title: 'Formulário de Distintivo de Semeador - Escoteiros de Minas',
          description: 'Preencha o formulário de distintivos de semeador - Escoteiros de Minas Gerais'
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
