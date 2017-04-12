import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL

export default {
  get (params) {
    return app.$http.get(API_URL + 'documents', {params: params})
  },
  find (id) {
    return app.$http.get(API_URL + `documents/${id}`)
  }
}
