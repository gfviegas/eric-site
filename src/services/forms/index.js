import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL

export default {
  createBadge (data) {
    return app.$http.post(`${API_URL}forms`, data)
  }
}
