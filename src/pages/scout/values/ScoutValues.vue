<template lang="pug">
  p conteúdo VALORES
    //- #[router-link(exact)(:to="{name: 'regionalBoard'}")  Diretoria Regional]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Escotismo'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça o que é o Escotismo e o que fazemos - Escoteiros de Minas Gerais'
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

</style>
