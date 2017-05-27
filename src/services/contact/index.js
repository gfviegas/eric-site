import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL

export default {
  create (data) {
    return app.$http.post(`${API_URL}contact`, data)
  },
  find (id) {
    return app.$http.get(`${API_URL}contact/${id}`)
  }
}
