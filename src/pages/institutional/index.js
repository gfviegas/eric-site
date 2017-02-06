import Institutional from './Institutional.vue'
import InstitutionalHome from './home/InstitutionalHome.vue'
import RegionalBoard from './regional-board/RegionalBoard.vue'

const routes = {
  path: '/institucional',
  component: Institutional,
  children: [
    {
      path: '',
      name: 'institutionalHome',
      component: InstitutionalHome
    },
    {
      path: '/diretoria-regional',
      name: 'regionalBoard',
      component: RegionalBoard
    },
    {
      path: '/comissao-fiscal',
      component: InstitutionalHome
    },
    {
      path: '/jovens-lideres',
      component: InstitutionalHome
    },
    {
      path: '/formadores-emeritos',
      component: InstitutionalHome
    },
    {
      path: '/ouvidoria',
      component: InstitutionalHome
    },
    {
      path: '/escritorio-regional',
      component: InstitutionalHome
    }
  ]
}

export { routes }
