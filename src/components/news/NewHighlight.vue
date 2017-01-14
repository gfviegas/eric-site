<template lang="pug">
  div.columns
    div.column.is-3
      figure.image.is-2by1
        img(src="http://bulma.io/images/placeholders/640x320.png")
    div.column.is-9
      h6.subtitle.is-6 Titulo da matéria em destaque
</template>

<script>
  export default {
    name: 'new-highlight',
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
  .columns
    margin-bottom: 0!important

  .subtitle
    text-transform: uppercase
    font-weight: bold
    font-family: 'Roboto'
</style>
