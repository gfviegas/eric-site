import News from './News.vue'
import NewsHome from './home/NewsHome.vue'

import NewsContent from './content/NewsContent.vue'

const routes = {
  path: '/noticias',
  component: News,
  children: [
    {
      path: '',
      name: 'newsList',
      meta: {
        breadcrumb: 'Notícias / Lista'
      },
      component: NewsHome
    },
    {
      path: ':slug',
      name: 'newsContent',
      meta: {
        breadcrumb: 'Notícias /'
      },
      component: NewsContent
    }
  ]
}

export { routes }
