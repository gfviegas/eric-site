<template lang="pug">
  .news-route-section
    transition(name="fade")
      router-view
</template>

<script>
  export default {
    name: 'news'
  }
</script>

<style scoped lang="sass">
</style>
