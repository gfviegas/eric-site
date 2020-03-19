import Vue from 'vue'

const isoFormat = (date) => {
  if (date) {
    return Vue.moment(date).format()
  }
}

const stripTags = (text) => {
  if (!text) return ''
  return text.trim().replace(/(<([^>]+)>)/ig, '').replace(/&(.*);/gi, '')
}

const imageUrl = (url) => {
  return `${process.env.IMG_URL}${url}`
}

const getStructuredData = (type, data) => {
  let strucData = {
    '@context': 'http://schema.org'
  }

  let additionalData = {}

  switch (type) {
    case 'event':
      additionalData = {
        '@type': 'Event',
        name: data.title,
        location: {
          '@type': 'Place',
          name: data.place,
          address: data.place
        },
        image: imageUrl(data.image),
        description: stripTags(data.description),
        startDate: isoFormat(data.start_date)
      }
      if (data.end_date) additionalData['end_date'] = isoFormat(data.end_date)
      break
    case 'list-events':
      let eventItems = data.map((news, index) => {
        return {
          '@type': 'ListItem',
          position: (index + 1),
          url: `https://www.escoteirosmg.org.br/eventos/${news.slug}`
        }
      })
      additionalData = {
        '@type': 'ItemList',
        ItemListElement: eventItems
      }
      break
    case 'news':
      additionalData = {
        '@type': 'NewsArticle',
        headline: data.title,
        image: {
          '@type': 'ImageObject',
          url: imageUrl(data.image)
        }
      }
      break
    case 'list-news':
      let newsItems = data.map((news, index) => {
        return {
          '@type': 'ListItem',
          position: (index + 1),
          url: `https://www.escoteirosmg.org.br/noticias/${news.slug}`
        }
      })
      additionalData = {
        '@type': 'ItemList',
        ItemListElement: newsItems
      }
      break
    case 'person':
    default:
      additionalData = {
        '@type': 'Organization',
        name: 'Escoteiros de Minas Gerais',
        url: 'https://www.escoteirosmg.org.br',
        sameAs: [
          'https://www.facebook.com/EscoteirosDeMinasGerais',
          'https://www.youtube.com/channel/UC33RgemC7Zb0594HbfnTSqA',
          'https://twitter.com/EscoteirosMG'
        ],
        alternateName: 'UEB Minas Gerais',
        logo: 'https://www.escoteirosmg.org.br/static/icons/icon-512x512.png',
        description: 'Escoteiros do Brasil - Região de Minas Gerais',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55-31-3215-7674',
          contactType: 'customer support',
          availableLanguage: 'Portuguese'
        }
      }
      break
  }

  Object.assign(strucData, additionalData)

  return JSON.stringify(strucData)
}

const getSeoScript = (type, data) => {
  return [
    {
      t: 'application/ld+json',
      i: getStructuredData(type, data)
    }
  ]
}

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

export { getSeoScript, getSeoTitle, getSeoMeta }
