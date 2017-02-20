<template lang="pug">
  router-link(:to="{ name: 'newsContent', params: { slug: data.slug }}")
    div.columns
      div.column.is-3
        figure.image.is-2by1
          img(:src="data.image | imgSrc")
      div.column.is-9
        h6.subtitle.content.is-6 {{data.title}}
</template>

<script>
  export default {
    name: 'new-highlight',
    props: ['text', 'cClass', 'data'],
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
    text-align: justify
    margin-bottom: 1.5rem
</style>
