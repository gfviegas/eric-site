import path from 'path'

const SCRIPT_URL = path.join(__dirname, '../../../OneSignalSDKWorker.js')

const register = () => {
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    navigator.serviceWorker.register(SCRIPT_URL)
    .then((registration) => {
      console.log('%c [SW] Service Worker Registred!', 'color:#ff0000')
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default {
  register
}
