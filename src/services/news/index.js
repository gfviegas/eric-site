import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL_V2

export default {
  get (params) {
    return app.$http.get(API_URL + 'news', {params: params})
  },
  find (id) {
    return app.$http.get(API_URL + `news/${id}`)
  },
  create (data) {
    return app.$http.post(API_URL + 'news', data)
  },
  delete (id) {
    return app.$http.delete(API_URL + `news/${id}`)
  },
  update (id, data) {
    return app.$http.patch(API_URL + `news/${id}`, data)
  },
  updateViews (id, data) {
    return app.$http.patch(API_URL + `news/${id}/views`, data)
  }
}
