<template lang="pug">
  button.button.is-pulled-right(v-bind:class="cClass"): slot
</template>

<script>
  export default {
    name: 'moreButton',
    props: ['text', 'cClass'],
    data: () => {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  button
    text-transform: uppercase
    text-align: right
    border-radius: 0 !important
    font-weight: bold
    padding-left: 3rem !important
    font-family: 'Roboto'
</style>
