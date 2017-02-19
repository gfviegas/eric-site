<template lang="pug">
div.level.lime
  nav.level-left
    div.level-item
      h4.subtitle.is-4 {{text}}
  nav.level-right
    //- div.level-item
    //-   span.icon: i.fa.fa-circle.is-active
    //-   - for (var x = 0; x < 3; x++)
    //-     span.icon: i.fa.fa-circle
</template>

<script>
  export default {
    props: {
      text: String
    }
  }
</script>

<style lang="sass" scoped>
  @import '~assets/sass/config.sass'
  .level
    min-height: 3rem
    background: rgba(176, 211, 83, 0.6)
    .level-left
      +mobile
        margin-top: 0.75rem
      +desktop
        padding-left: 6%
      .subtitle
        font-weight: 300
        color: white
    .level-right
      +mobile
        margin-top: 0.75rem
      +desktop
        padding-right: 5%
      .icon
        margin-left: 0.25rem
      .fa-circle
        color: rgba(255, 255, 255, 0.7)
        &.is-active
          color: darken($verde-limao, 30%)
</style>
