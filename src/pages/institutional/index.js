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
      component: InstitutionalHome
    },
    {
      path: 'diretoria-regional',
      name: 'regionalBoard',
      component: RegionalBoard
    },
    {
      path: 'comissao-fiscal',
      name: 'fiscalCommittee',
      component: FiscalCommittee
    },
    {
      path: 'jovens-lideres',
      name: 'youngLeaders',
      component: YoungLeaders
    },
    {
      path: 'formadores-emeritos',
      name: 'emeritusTrainers',
      component: EmeritusTrainers
    },
    {
      path: 'ouvidoria',
      name: 'ombudsman',
      component: Ombudsman
    },
    {
      path: 'escritorio-regional',
      name: 'regionalOffice',
      component: RegionalOffice
    }
  ]
}

export { routes }
