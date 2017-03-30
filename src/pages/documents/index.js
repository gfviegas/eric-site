import Documents from './Documents.vue'
import Home from './home/Home.vue'

import Notices from './notices/Notices.vue'
import Modules from './modules/Modules.vue'

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
      path: 'modulos',
      name: 'documentsModules',
      meta: {
        breadcrumb: 'Documentos / Módulos'
      },
      component: Modules
    }
  ]
}

export { routes }
