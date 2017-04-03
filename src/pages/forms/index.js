import Forms from './Forms.vue'
import FormsHome from './home/FormsHome.vue'

import Badges from './badges/Badges.vue'
import Sower from './sower/Sower.vue'
import Rewards from './rewards/Rewards.vue'
import Success from './success/Success.vue'
import Tracker from './tracker/Tracker.vue'

const routes = {
  path: '/formularios',
  component: Forms,
  children: [
    {
      path: '',
      name: 'formsHome',
      meta: {
        breadcrumb: 'Solicitações / Home'
      },
      component: FormsHome
    },
    {
      path: 'distintivos-especiais',
      name: 'formsBadges',
      meta: {
        breadcrumb: 'Solicitações / Distintivos Especiais'
      },
      component: Badges
    },
    {
      path: 'distintivo-semeador',
      name: 'formsSower',
      meta: {
        breadcrumb: 'Solicitações / Distintivo de Semeador'
      },
      component: Sower
    },
    {
      path: 'condecoracoes-e-recompensas',
      name: 'formsRewards',
      meta: {
        breadcrumb: 'Solicitações / Condecorações e Recompensas'
      },
      component: Rewards
    },
    {
      path: 'sucesso/:id',
      name: 'formsSuccess',
      meta: {
        breadcrumb: 'Solicitações / Resultado'
      },
      component: Success
    },
    {
      path: 'acompanhamento',
      name: 'formsTracker',
      meta: {
        breadcrumb: 'Solicitações / Acompanhamento'
      },
      component: Tracker
    }
  ]
}

export { routes }
