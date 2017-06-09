import Documents from './Documents.vue'
import Home from './home/Home.vue'

import Balances from './balances/Balances.vue'
import Minutes from './minutes/Minutes.vue'
import Resolutions from './resolutions/Resolutions.vue'
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
      path: 'resolucoes',
      name: 'documentsResolutions',
      meta: {
        breadcrumb: 'Documentos / Resoluções'
      },
      component: Resolutions
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
      path: 'balancos',
      name: 'documentsBalances',
      meta: {
        breadcrumb: 'Documentos / Balanços'
      },
      component: Balances
    },
    {
      path: 'atas',
      name: 'documentsMinutes',
      meta: {
        breadcrumb: 'Documentos / Atas'
      },
      component: Minutes
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
