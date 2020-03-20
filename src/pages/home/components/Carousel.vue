<template lang="pug">
  article.carousel-container
    carousel.carousel(
      :perPage="1"
      :autoplay="true"
      :loop="true"
      :centerMode="true"
      :autoplayTimeout="7000"
      paginationActiveColor="#f7941e"
      paginationColor="#666"
    )
      slide.slide(v-for="b in computedBanners")
        img(:src="b.image")
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide
    },
    props: {
      banners: {
        required: false,
        default: () => []
      }
    },
    computed: {
      computedBanners () {
        return this.banners.map(b => {
          const image = this.$options.filters.responsiveImgSrcV2(b.image)
          return {...b, image}
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .carousel-container
    background: transparent
    .carousel
      height: 100%
      width: 100%
      .slide
        height: 100%
        width: 100%
        img
          width: 100%
</style>

<style lang="sass">
  .VueCarousel-pagination
    margin-top: -5rem
    z-index: 1
</style>
