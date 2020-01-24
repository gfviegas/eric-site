<template lang="pug">
  .events-route-section
    transition(name="fade")
      router-view
</template>

<script>
  export default {
    name: 'events'
  }
</script>

<style scoped lang="sass">
  .events-route-section
</style>
