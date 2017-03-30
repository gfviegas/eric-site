<template lang="pug">
div.scout-caio
  div.content-block
    h3.title.is-3 CAIO VIANNA MARTINS
    p Caio Vianna Martins nasceu em Matosinho em 13 de julho de 1923, Minas Gerais, arraial que hoje virou cidade.
    p Aos seis anos seus pais o matricularam no Grupo Escolar Visconde do Rio das Velhas. Mais tarde mudou-se com a família para Belo Horizonte. Matriculou-se aos oito anos no Grupo Escolar Barão do Rio Branco onde estudou até o quarto ano primário. Estudou também no colégio Arnaldo e Afonso Arinos, onde entrou para o Escotismo. O Grupo era patrocinado pelo educandário. Isso aconteceu em 10 de setembro de 1937. Mais tarde Caio se tornaria Monitor da Patrulha Lobo.
    p Na noite de 19 de dezembro de 1938 o escoteiro Caio Vianna Martins, aos 15 anos de idade, estava com seu destino traçado, semelhante aos grandes heróis da história.
    p A Comissão Executiva do Grupo Escoteiro Afonso Arinos, do ginásio do mesmo nome, de Belo Horizonte, ambos hoje inexistentes, organizou uma excursão técnica-cultural a São Paulo. A delegação era formada por 25 membros.
    p A composição do trem noturno estava formada com 11 vagões, sendo o do meio, 1ª Classe, ocupado pelos escoteiros. A viagem se desenrolava normalmente, até que às 02:05 da madrugada do dia 19 de dezembro, entre as pequenas estações de Sítio e João Aires, aconteceu o terrível desastre, quando se chocaram o trem noturno que descia com o trem cargueiro que subia. Muitos vagões descarrilharam, outros engavetaram e alguns se levantaram.
    p O vagão da frente ao ocupado pelos escoteiros saltou dos trilhos, atravessando para a direita, engavetando-se, partindo-se e tombando sobre o barranco, comprimido para a frente pela pressão dos carro restaurante e leito.
    p Os escoteiros que resistiram ao impacto das composições reuniram-se em um ponto à direita da estrada. Nesse momento o grupo sentiu falta do Escoteiro Gerson Issa Satuf e do Lobinho Hélio Marcos. Na procura ambos foram encontrados mortos.
    p Do vagão leito foram retirados colchões e cobertores, usados para abrigarem os sobreviventes. Para uma cabine foram levados os feridos com maior gravidade. Alguns escoteiros trabalharam na confecção de macas com lençóis e paus enquanto os demais, com as tábuas que foram retiradas dos vagões, fizeram uma fogueira para iluminar o local, facilitando o trabalho de salvamento.
    p Os primeiros socorros chegaram somente às sete horas da manhã (cinco horas após o acidente). Os passageiros feridos, inclusive alguns escoteiros, foram transportados para Barbacena. No desastre morreram 40 pessoas.
    p O monitor Caio recebeu forte pancada na região lombar, sofrendo esmagamento das vísceras e hemorragia interna. Retirado do vagão pelos companheiros e recolhido ao vagão leito, Caio Martins parecia dar sinais de estar melhor. Pouco depois quando seria levado para Barbacena e notando que um enfermeiro se aproximava com a maca, ele olhou ao redor e viu que havia outros feridos mais necessitados. Encarando o enfermeiro disse: "Não. Há muitos feridos aí. Deixe-me que irei só. Um Escoteiro caminha com as próprias pernas". Acompanhado dos amigos, seguiu andando, para a cidade. O esforço que fez, porém, foi muito grande. Ao chegar ao hotel deu alguns passos para depois saírem golfadas de sangue de sua boca, em consequência da hemorragia interna que sofreu. Levado para a Santa Casa, veio a falecer às duas horas do dia 20, na presença de seus pais. Foi sepultado no cemitério de Bonfim, zona norte de Belo Horizonte, junto do Escoteiro Gerson e do Lobinho Hélio Marcos.
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Caio Vianna Martins'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça sobre Caio Vianna Martins, símbolo do escotismo mineiro - Escoteiros de Minas Gerais'
        })
      }
    },
    created () {
      this.$on('okHead', () => {
        if (!window.prerenderReady) {
          setTimeout(() => {
            window.prerenderReady = true
          }, 1500)
        }
      })
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'

  .content-block
    counter-reset: item
    padding: 2rem 0
    margin-bottom: 1rem
    border-bottom: 1px solid rgba(78, 78, 78, 0.3)
    p
      padding: 0.5rem 0
    .title
      font-weight: 400
    ul
      list-style: disc
      padding: 0 2rem
      li
        padding: 0.5rem 0
    ol
      list-style: none
      li
        padding: 1rem 0
        counter-increment: item
        &::before
          content: counter(item) "."
          padding-right: 1rem
          display: inline-block
          font-family: Roboto
          font-weight: 400
          font-size: 1.3rem
</style>
