<template lang="pug">
  .card.is-shady
    .card-image.has-text-centered
      figure.is-rounded.image.is-256x256
        img(v-bind:src="imgPath")
    .card-content
      .content
        h4 {{name}}
        p {{description}}
</template>

<script>
  export default {
    props: ['name', 'description', 'index'],
    computed: {
      imgPath () {
        return require(`../../../assets/images/seminar/${this.$props.index}.jpeg`)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/config.sass'
  .card
    width: 100%
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18)
    margin-bottom: 2rem
    .is-shady
      animation: flyintoright .4s backwards
      background: #fff
      box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0
      border-radius: 4px
      display: inline-block
      position: relative
      transition: all .2s ease-in-out
      &:hover
        box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19)

    .card-image
      padding: 1rem
      display: flex
      justify-content: center

    .card-content .content
      font-size: 14px
      margin: 1rem 1rem
      h4
        font-family: 'MoonFlowerBold'
        font-size: 2.5rem
        color: rgb(51, 19, 2)
</style>
