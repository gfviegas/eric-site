import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL

export default {
  get (params) {
    return app.$http.get(API_URL + 'documents', {params: params})
  },
  find (id) {
    return app.$http.get(API_URL + `documents/${id}`)
  },
  typeFormated (doc) {
    if (!doc || !doc.type) return false
    switch (doc.type) {
      case 'book':
        return 'Apostila'
      case 'notice':
        return 'Edital'
      case 'ordinance':
        return 'Portaria'
      case 'balance':
        return 'Balanço Financeiro'
      case 'minute':
        return 'Ata'
      case 'other':
        return 'Outro'
    }
  }
}
