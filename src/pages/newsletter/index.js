import Newsletter from './Newsletter.vue'
import Form from './form/Form.vue'
import Success from './success/Success.vue'

const routes = {
  path: '/newsletter',
  component: Newsletter,
  children: [
    {
      path: '',
      name: 'newsletterForm',
      meta: {
        breadcrumb: 'Newsletter / Formulário'
      },
      component: Form
    },
    {
      path: 'sucesso',
      name: 'newsletterSuccess',
      meta: {
        breadcrumb: 'Newsletter / Sucesso'
      },
      component: Success
    }
  ]
}

export { routes }
