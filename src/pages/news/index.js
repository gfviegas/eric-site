import News from './News.vue'
import NewsHome from './home/NewsHome.vue'

// import NewsContent from './news-content/NewsContent.vue'

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
    }
    // {
    //   path: '',
    //   name: 'newsContent',
    //   meta: {
    //     breadcrumb: 'Notícias / Notícia'
    //   },
    //   component: NewsContent
    // }
  ]
}

export { routes }
