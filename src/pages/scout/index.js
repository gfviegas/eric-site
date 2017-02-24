import Scout from './Scout.vue'
import ScoutHome from './home/ScoutHome.vue'

import ScoutValues from './values/ScoutValues.vue'
import ScoutMethod from './method/ScoutMethod.vue'
import ScoutModality from './modality/ScoutModality.vue'

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
    },
    {
      path: 'metodo',
      name: 'scoutMethod',
      meta: {
        breadcrumb: 'Escotismo / Sobre / Método'
      },
      component: ScoutMethod
    },
    {
      path: 'modalidades',
      name: 'scoutModality',
      meta: {
        breadcrumb: 'Escotismo / Sobre / Modalidades'
      },
      component: ScoutModality
    }
  ]
}

export { routes }
