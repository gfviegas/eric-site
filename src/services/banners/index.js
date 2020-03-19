import Vue from 'vue'
const app = new Vue()

const API_URL = process.env.API_URL_V2

export default {
  query () {
    const params = { sort: '-createdAt' }
    return app.$http.get(`${API_URL}banners`, {params})
  }
}
