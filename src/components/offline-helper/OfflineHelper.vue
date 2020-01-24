<template lang="pug">
  div.notification.is-info(v-show="isOffline")
    p Você está offline, alguns dados podem não ser carregados.
</template>

<script>
export default {
  name: 'offline-helper',
  mounted () {
    window.addEventListener('offline', (e) => this.updateStatus())
    window.addEventListener('online', (e) => this.updateStatus())
  },
  methods: {
    updateStatus () {
      this.isOffline = !(window.navigator.onLine)
    }
  },
  data () {
    return {
      isOffline: (!window.navigator.onLine)
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~assets/sass/common'
  div.notification
    position: fixed
    width: 100%
    bottom: 0
    margin-bottom: 0!important
    z-index: 99
</style>
