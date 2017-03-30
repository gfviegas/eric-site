
const getSeoTitle = (title) => {
  return {
    inner: title
  }
}

const getSeoMeta = (params) => {
  return [
    {
      n: 'description',
      c: params.description || 'Site Oficial da Região Escoteira de Minas Gerais - Escoteiros do Brasil'
    },
    {
      p: 'og:type',
      c: 'website'
    },
    {
      p: 'twitter:card',
      c: 'summary'
    },
    {
      p: 'og:site_name',
      c: 'Escoteiros de Minas'
    },
    {
      p: 'twitter:site',
      c: 'Escoteiros de Minas'
    },
    {
      p: 'twitter:url',
      c: params.url || window.location.href
    },
    {
      p: 'og:url',
      c: params.url || window.location.href
    },
    {
      p: 'twitter:title',
      c: params.title || 'Escoteiros de Minas'
    },
    {
      p: 'og:title',
      c: params.title || 'Escoteiros de Minas'
    },
    {
      p: 'twitter:description',
      c: params.description || 'Site Oficial da Região Escoteira de Minas Gerais - Escoteiros do Brasil'
    },
    {
      p: 'og:description',
      c: params.description || 'Site Oficial da Região Escoteira de Minas Gerais - Escoteiros do Brasil'
    },
    {
      p: 'twitter:image',
      c: params.image || require('../../assets/images/logo.png')
    },
    {
      p: 'og:image',
      c: params.image || require('../../assets/images/logo.png')
    }
  ]
}

export { getSeoTitle, getSeoMeta }
