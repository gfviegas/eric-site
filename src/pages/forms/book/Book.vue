<template lang="pug">
  div.scout-method
    div.content-block
      h3.title.is-3 CADERNO / PROJETO
      p Envie o seu Caderno  / Projeto para Insígnia da Madeira

      form(name="badgeForm" v-on:submit.prevent="submitForm()" novalidate)
        p.subtitle.is-5.has-text-centered Dados do Assesor Pessoal
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
            label.label Linhas de Formação
          div.control
            input.input(type="text" placeholder="" v-model="author.formation.lines")
        div.field.control.is-horizontal
          div.control-label
            label.label Níveis de Formação
          div.control
            input.input(type="text" placeholder="" v-model="author.formation.levels")
        br
        p.subtitle.is-5.has-text-centered Dados do Assessorado
        div.field.control.is-horizontal
          div.control-label
            label.label Nome
          div.control
            input.input(type="text" placeholder="Ex: Maria da Silva" name="gifted.name" v-model="gifted.name" v-validate="validations.name" data-vv-as="Nome do Assessorado" v-bind:class="{'is-danger': errors.has('gifted.name')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Email
          div.control
            input.input(type="text" placeholder="Ex: joao@gmail.com" name="gifted.email" v-model="gifted.email" v-validate="validations.email" data-vv-as="Email do Assessorado" v-bind:class="{'is-danger': errors.has('gifted.email')}")
        div.field.control.is-horizontal
          div.control-label
            label.label Registro Escoteiro
          div.control
            input.input(type="text" placeholder="Ex: 654321-0" name="gifted.register" v-model="gifted.register" v-validate="validations.register" data-vv-as="Registro do Assessorado" v-bind:class="{'is-danger': errors.has('gifted.register')}")
        div.control.is-horizontal
          div.control-label
            label.label Grupo Escoteiro
          div.control
            input.input(type="text" placeholder="Número do GE" name="gifted.group.number" v-model="gifted.group.number" v-validate="validations.group.number" data-vv-as="Número do Grupo do Assessorado" v-bind:class="{'is-danger': errors.has('gifted.group.number')}")
            input.input(type="text" placeholder="Nome do Grupo Escoteiro" name="gifted.group.name" v-model="gifted.group.name" v-validate="validations.group.name" data-vv-as="Nome do Grupo do Assessorado" v-bind:class="{'is-danger': errors.has('gifted.group.name')}")
        br
        p.subtitle.is-5.has-text-centered Dados da Solicitação
        div.field.control.is-horizontal
          div.control-label
            label.label Anexar Arquivo*
          div.control
            input(type="file" placeholder="Selecionar Arquivo" name="form.file" v-on:change="getFile" v-validate="validations.file" data-vv-as="Arquivo Anexado" v-bind:class="{'is-danger': errors.has('form.file')}")
        p.help Serão aceitos arquivos de até 30MB.
        p.help.padded * Se precisar enviar mais de um arquivo, envie-os em um arquivo único compactado .zip ou .rar.
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

  // const objectToFormData = (formData, obj, label) => {
  //   let formKey
  //
  //   for (let property in obj) {
  //     if (obj.hasOwnProperty(property)) {
  //       if (label) {
  //         formKey = `${label}[${property}]`
  //       } else {
  //         formKey = property
  //       }
  //
  //       if (typeof obj[property] === 'object') {
  //         objectToFormData(obj[property], formData, property)
  //       } else {
  //         formData.append(formKey, obj[property])
  //       }
  //     }
  //   }
  // }

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
      const nameValidations = {rules: {max: 80, required: true}}
      const rewardValidations = {rules: {required: true}}
      const fileValidations = {rules: {required: true, size: 30000}}

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
          reward: rewardValidations,
          file: fileValidations,
          group: {
            number: groupNumberValidations,
            name: groupNameValidations
          }
        },
        form: {},
        author: {group: {}, formation: {}},
        gifted: {group: {}}
      }
    },
    methods: {
      getFile (e) {
        let target = (e.target.files || e.dataTransfer.files)
        if (!target.length) return false
        this.form.file = target[0]
      },
      submitForm () {
        this.$ga.trackEvent('Requests Form', 'Submit', 'Book')
        this.submitted = true
        this.submitting = true

        this.$validator.validateAll()
        .then(() => {
          const formData = new window.FormData()

          formData.append('type', 'book')
          formData.append('reward', 'Envio de Caderno/Projeto')
          formData.append('author', JSON.stringify(this.author))
          formData.append('gifted', JSON.stringify(this.gifted))
          formData.append('file', this.form.file, this.form.file.name)

          rewardsService.create(formData)
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
      title: getSeoTitle('Caderno / Projeto'),
      meta: () => {
        return getSeoMeta({
          title: 'Formulário de envio de Caderno / Projeto para Insígnia da Madeira - Escoteiros de Minas',
          description: 'Preencha o formulário de Caderno / Projeto para Insígnia da Madeira - Escoteiros de Minas Gerais'
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
      .help.padded
        padding-bottom: 1rem
</style>
