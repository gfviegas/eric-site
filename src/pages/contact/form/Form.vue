<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 FORMULÁRIO DE CONTATO
      p Entre em contato conosco! Envie sua mensagem, dúvida, crítica ou outro assunto!

      form(name="badgeForm" v-on:submit.prevent="submitForm()" novalidate)
        p.subtitle.is-5.has-text-centered Dados do Solicitante
        div.field.control.is-horizontal
          div.control-label
            label.label Nome Completo
          div.control
            input.input(type="text" placeholder="Ex: Robert Smith" name="author.name" v-model="author.name" v-validate="validations.name" data-vv-as="Nome do Solicitante" v-bind:class="{'is-danger': errors.has('author.name')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Email
          div.control
            input.input(type="text" placeholder="Ex: joao@gmail.com" name="author.email" v-model="author.email" v-validate="validations.email" data-vv-as="Email do Solicitante" v-bind:class="{'is-danger': errors.has('author.email')}")
        div.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Número do GE" name="author.group.number" v-model="author.group.number" v-validate="validations.group.number" data-vv-as="Número do Grupo do Solicitante" v-bind:class="{'is-danger': errors.has('author.group.number')}")
            input.input(type="text" placeholder="Nome do Grupo Escoteiro" name="author.group.name" v-model="author.group.name" v-validate="validations.group.name" data-vv-as="Nome do Grupo do Solicitante" v-bind:class="{'is-danger': errors.has('author.group.name')}")
        br
        p.subtitle.is-5.has-text-centered Dados da Solicitação
        div.field.control.is-horizontal
          div.control-label
            label.label Assunto
          div.control
            div.select.is-fullwidth
              select(name="form.type" v-model="form.type" v-validate="validations.type" data-vv-as="Assunto" v-bind:class="{'is-danger': errors.has('form.type')}")
                option(default value="") Selecione...
                option(value="question") Dúvida
                option(value="compliment") Elogio
                option(value="complaint") Reclamação
                option(value="suggestion") Sugestão
                option(value="other") Outro
        div.field.control.is-horizontal
          div.control-label
            label.label Deseja falar com
          div.control
            div.select.is-fullwidth
              select(name="form.target" v-model="form.target" v-validate="validations.target" data-vv-as="Com Quem Deseja Falar" v-bind:class="{'is-danger': errors.has('form.target')}")
                option(default value="") Selecione...
                option(value="communication") Comunicação
                option(value="reward") Condecorações
                option(value="growth") Crescimento
                option(value="office") Escritório
                option(value="financial") Financeiro
                option(value="adults") Gestão de Adultos
                option(value="institutional") Gestão Institucional
                option(value="youngs") Jovens Líderes
                option(value="legal") Jurídico
                option(value="ombudsman") Ouvidoria
                option(value="educative") Programa Educativo
        div.field.control.is-horizontal
          div.control-label
            label.label Mensagem
          div.control
            textarea.textarea(placeholder="Sua Mensagem" name="form.message" v-model="form.message" v-validate="validations.message" data-vv-as="Mensagem" v-bind:class="{'is-danger': errors.has('form.message')}")
        div.field
          p.control.submit-button
            button.button.is-success.is-large(type="submit" v-if="!submitting") Enviar
            button.button.is-success.is-disabled.is-loading.is-large(type="button" v-if="submitting") Enviando...

        div.error-messages(v-show="errors.any() || submitted")
          p.help.is-danger(v-for="error in errors.all()") {{ error }}
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'
  import contactService from '../../../services/contact'
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
      const nameValidations = {rules: {max: 80, required: true}}
      const messageValidations = {rules: {required: true, max: 2000, min: 10}}

      const groupNumberValidations = {rules: {max: 3, numeric: true, required: true}}
      const groupNameValidations = {rules: {max: 100, required: true}}

      return {
        submitting: false,
        submitted: false,
        validations: {
          type: {rules: {required: true}},
          target: {rules: {required: true}},
          email: emailValidations,
          name: nameValidations,
          message: messageValidations,
          group: {
            number: groupNumberValidations,
            name: groupNameValidations
          }
        },
        form: {
          type: '',
          target: ''
        },
        author: {group: {}}
      }
    },
    methods: {
      submitForm () {
        this.$ga.trackEvent('Contact Form', 'Submit', this.form.type)
        this.submitted = true
        this.submitting = true

        this.$validator.validateAll()
        .then(() => {
          let data = {
            type: this.form.type,
            target: this.form.target,
            message: this.form.message,
            author: this.author
          }

          contactService.create(data)
          .then((response) => {
            this.showCreateSuccessNotification()
            router.push({name: 'contactSuccess', params: {id: response.body._id}})
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
      title: getSeoTitle('Contato'),
      meta: () => {
        return getSeoMeta({
          title: 'Contato - Escoteiros de Minas',
          description: 'Entre em contato! - Escoteiros de Minas Gerais'
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
