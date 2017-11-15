import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const API_URL = process.env.API_URL

export default {
  data: {},

  query () {
    return new Promise((resolve, reject) => {
      if (this.data && this.data.length) resolve(this.data)

      Vue.http.get(`${API_URL}setup`)
      .then(response => {
        this.data = response.body
        resolve(this.data)
      }, response => {
        console.error(`Error fetching setup data`, response)
      })
    })
  }
}
