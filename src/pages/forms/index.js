import Forms from './Forms.vue'
import FormsHome from './home/FormsHome.vue'

import Badges from './badges/Badges.vue'
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
    },
    {
      path: 'sucesso/:id',
      name: 'formsSuccess',
      meta: {
        breadcrumb: 'Formulários / Resultado'
      },
      component: Success
    },
    {
      path: 'acompanhamento',
      name: 'formsTracker',
      meta: {
        breadcrumb: 'Formulários / Acompanhamento'
      },
      component: Tracker
    }
  ]
}

export { routes }
