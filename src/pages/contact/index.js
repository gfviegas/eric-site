import Contact from './Contact.vue'
import ContactForm from './form/Form.vue'

import Success from './success/Success.vue'

const routes = {
  path: '/contato',
  component: Contact,
  children: [
    {
      path: '',
      name: 'contactHome',
      meta: {
        breadcrumb: 'Contato'
      },
      component: ContactForm
    },
    {
      path: 'sucesso/:id',
      name: 'contactSuccess',
      meta: {
        breadcrumb: 'Contato'
      },
      component: Success
    }
  ]
}

export { routes }
