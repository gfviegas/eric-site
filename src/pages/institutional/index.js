import Institutional from './Institutional.vue'
import InstitutionalHome from './home/InstitutionalHome.vue'

import RegionalBoard from './regional-board/RegionalBoard.vue'
import FiscalCommittee from './fiscal-committee/FiscalCommittee.vue'
import YoungLeaders from './young-leaders/YoungLeaders.vue'
import EmeritusTrainers from './emeritus-trainers/EmeritusTrainers.vue'
import Ombudsman from './ombudsman/Ombudsman.vue'
import RegionalOffice from './regional-office/RegionalOffice.vue'

const routes = {
  path: '/institucional',
  component: Institutional,
  children: [
    {
      path: '',
      name: 'institutionalHome',
      meta: {
        breadcrumb: 'Institucional / Home'
      },
      component: InstitutionalHome
    },
    {
      path: 'diretoria-regional',
      name: 'regionalBoard',
      meta: {
        breadcrumb: 'Institucional / Diretoria Regional'
      },
      component: RegionalBoard
    },
    {
      path: 'comissao-fiscal',
      name: 'fiscalCommittee',
      meta: {
        breadcrumb: 'Institucional / Comissão Fiscal'
      },
      component: FiscalCommittee
    },
    {
      path: 'jovens-lideres',
      name: 'youngLeaders',
      meta: {
        breadcrumb: 'Institucional / Jovens Líderes'
      },
      component: YoungLeaders
    },
    {
      path: 'formadores-emeritos',
      name: 'emeritusTrainers',
      meta: {
        breadcrumb: 'Institucional / Formadores Eméritos'
      },
      component: EmeritusTrainers
    },
    {
      path: 'ouvidoria',
      name: 'ombudsman',
      meta: {
        breadcrumb: 'Institucional / Ouvidoria'
      },
      component: Ombudsman
    },
    {
      path: 'escritorio-regional',
      name: 'regionalOffice',
      meta: {
        breadcrumb: 'Institucional / Escritório Regional'
      },
      component: RegionalOffice
    }
  ]
}

export { routes }
