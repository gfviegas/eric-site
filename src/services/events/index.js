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
  }
}
