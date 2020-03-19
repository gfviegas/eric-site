var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://localhost:3000/api/v1/"',
  API_URL_V2: '"http://localhost:3030/api/v1/"',
  IMG_URL: '"http://localhost:3000/"',
  IMG_URL_V2: '"http://localhost:3030/"',
  ONE_SIGNAL_APP_ID: '"79eda500-d5ec-4c92-8517-b9ae6625072c"'
})
