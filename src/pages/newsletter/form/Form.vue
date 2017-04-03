<template lang="pug">
  div.forms-home.content-block
    h3.title.is-3 Newsletter
    p Preencha o formulário para entrar na lista de emails
    div.box.form-box
      div#opt_2
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    mounted () {
      var el = document.createElement('script')
      el.setAttribute('charset', 'utf-8')
      el.setAttribute('type', 'text/javascript')
      el.setAttribute('src', 'https://optin.entregaemails.com.br/accounts/95919/forms/2')
      el.setAttribute('async', '')
      el.setAttribute('defer', '')
      document.getElementsByTagName('head')[0].appendChild(el)
      // window.render_form()
    },
    head: {
      title: getSeoTitle('Newsletter'),
      meta: () => {
        return getSeoMeta({
          title: 'Newsletter - Escoteiros de Minas',
          description: 'Formulário para inscrição no Newsletter dos Escoteiros de Minas Gerais'
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
    counter-reset: item
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    .title
      font-weight: 400
    .form-box
      display: flex
      justify-content: center
      margin-top: 2rem
      height: 35rem
      #opt_2
        align-self: center
        display: inline-flex
        width: 100%
        height: 30rem
</style>
