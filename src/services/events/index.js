import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL

export default {
  get (params) {
    return app.$http.get(API_URL + 'events', {params: params})
  },
  find (id) {
    return app.$http.get(API_URL + `events/${id}`)
  },
  create (data) {
    return app.$http.post(API_URL + 'events', data)
  },
  delete (id) {
    return app.$http.delete(API_URL + `events/${id}`)
  },
  update (id, data) {
    return app.$http.patch(API_URL + `events/${id}`, data)
  },
  getSections () {
    return [
      'Ramo Lobinho',
      'Ramo Escoteiro',
      'Ramo Sênior',
      'Ramo Pioneiro',
      'Adultos'
    ]
  },
  getHosts () {
    return [
      'Regional',
      'Distrital',
      'Nacional',
      'Internacional',
      'Outro'
    ]
  },
  getQueryBySlug (slug) {
    if (this.getSections().includes(slug)) return {key: 'section', value: slug}
    if (this.getHosts().includes(slug)) return {key: 'hosts', value: slug}

    return false
  }
}
