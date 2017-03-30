import Documents from './Documents.vue'
import Home from './home/Home.vue'

import Ordinances from './ordinances/Ordinances.vue'
import Notices from './notices/Notices.vue'
import Books from './books/Books.vue'

const routes = {
  path: '/documentos',
  component: Documents,
  children: [
    {
      path: '',
      name: 'documentsHome',
      meta: {
        breadcrumb: 'Documentos / Home'
      },
      component: Home
    },
    {
      path: 'editais',
      name: 'documentsNotices',
      meta: {
        breadcrumb: 'Documentos / Editais'
      },
      component: Notices
    },
    {
      path: 'portarias',
      name: 'documentsOrdinances',
      meta: {
        breadcrumb: 'Documentos / Portarias'
      },
      component: Ordinances
    },
    {
      path: 'apostilas',
      name: 'documentsBooks',
      meta: {
        breadcrumb: 'Documentos / Apostilas'
      },
      component: Books
    }
  ]
}

export { routes }
