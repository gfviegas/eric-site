<template lang="pug">
  p.control.has-icon.has-icon-right
    input.input(type="text" placeholder="O que você procura?")
    span.icon
      i.fa.fa-search
</template>

<script>
  export default {
    name: 'searchField',
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
  @import '~assets/sass/common'
  .control
    // PROVISORIO
    visibility: hidden
    .input
      background: $primary
      color: white
      font-family: 'Roboto'
      font-style: italic
      +placeholder
        color: white
        text-transform: uppercase
        font-family: 'Roboto'
        font-style: italic
    .icon
      color: white !important
</style>
