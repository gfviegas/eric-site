<template lang="pug">
  router-link(:to="{ name: routeName, params: { slug: data.slug }}")
    div.columns
      div.column.is-4
        figure.image.is-4by1
          img(:src="data.image | imgSrcV2")
      div.column.is-8.title-side
        h6.subtitle.content.is-5.is-family-secondary {{data.title}}
</template>

<script>
  export default {
    name: 'new-highlight',
    props: ['text', 'cClass', 'data', 'isEvent'],
    data: () => {
      return {
        slug: '',
        image: '',
        title: ''
      }
    },
    computed: {
      routeName () {
        if (!this.isEvent) return 'newsContent'
        return 'eventContent'
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/common'
  .columns
    margin-bottom: 0!important

  .subtitle
    text-transform: uppercase
    font-weight: 600
    text-align: justify
    margin-bottom: 1.5rem

  .title-side
    display: flex
    flex-direction: column
    justify-content: center
    *
      margin: 0
</style>
