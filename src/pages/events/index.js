import Events from './Events.vue'
import EventsHome from './home/Home.vue'

import EventsContent from './content/Content.vue'

const routes = {
  path: '/eventos',
  component: Events,
  children: [
    {
      path: '',
      name: 'eventsList',
      meta: {
        breadcrumb: 'Eventos / Lista'
      },
      component: EventsHome
    },
    {
      path: ':slug',
      name: 'eventsContent',
      meta: {
        breadcrumb: 'Eventos / Evento'
      },
      component: EventsContent
    }
  ]
}

export { routes }
