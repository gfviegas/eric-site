import Institutional from './Institutional.vue'
import InstitutionalHome from './home/InstitutionalHome.vue'

import RegionalBoard from './regional-board/RegionalBoard.vue'

const routes = {
  path: '/noticias',
  component: Institutional,
  children: [
    {
      path: '',
      name: 'newsList',
      component: InstitutionalHome
    },
    {
      path: '',
      name: 'newsContent',
      component: RegionalBoard
    }
  ]
}

export { routes }
