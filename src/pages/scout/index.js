import Scout from './Scout.vue'
import ScoutHome from './home/ScoutHome.vue'

import ScoutValues from './values/ScoutValues.vue'

const routes = {
  path: '/escotismo',
  component: Scout,
  children: [
    {
      path: '',
      name: 'scoutHome',
      meta: {
        breadcrumb: 'Escotismo / Home'
      },
      component: ScoutHome
    },
    {
      path: 'valores',
      name: 'scoutValues',
      meta: {
        breadcrumb: 'Escotismo / Sobre / Valores'
      },
      component: ScoutValues
    }
  ]
}

export { routes }
