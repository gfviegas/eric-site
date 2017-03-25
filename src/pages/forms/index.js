import Forms from './Forms.vue'
import FormsHome from './home/FormsHome.vue'

import Badges from './badges/Badges.vue'
import Rewards from './rewards/Rewards.vue'

const routes = {
  path: '/formularios',
  component: Forms,
  children: [
    {
      path: '',
      name: 'formsHome',
      meta: {
        breadcrumb: 'Formulários / Home'
      },
      component: FormsHome
    },
    {
      path: 'distintivos-especiais',
      name: 'formsBadges',
      meta: {
        breadcrumb: 'Formulários / Distintivos Especiais'
      },
      component: Badges
    },
    {
      path: 'condecoracoes-e-recompensas',
      name: 'formsRewards',
      meta: {
        breadcrumb: 'Formulários / Condecorações e Recompensas'
      },
      component: Rewards
    }
  ]
}

export { routes }
