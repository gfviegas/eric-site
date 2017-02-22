<template lang="pug">
  div.ombudsman
    div.container.container-responsive.main-container
      h2.title.is-2 Ouvidoria dos Escoteiros de Minas Gerais
      div.content
        p Compete à Ouvidoria Escoteira Regional:
        ol
          li
            | Receber, examinar e encaminhar a Diretoria Regional na pessoa de seu Diretor Presidente e aos Departamentos competentes as reclamações ou representações de pessoas associados, pessoas físicas, jurídicas e Unidades Escoteiras Locais sobre:
            ul
              li Sugestões, avaliações, críticas e reclamações sobre qualquer fornecimento de serviços e/ou produtos por parte desta Unidade Escoteira Regional por meio de seu Escritório Regional e Loja Escoteira;
              li Sugestões, avaliações, críticas e reclamações sobre qualquer mau funcionamento dos serviços e infraestrutura organizados e produzidos por esta Unidade Escoteira Regional por meio de seu Escritório Regional, Coordenadorias e Comissões Regionais.
          li Propor medidas para sanar as violações, as ilegalidades e os abusos constatados;
          li Propor medidas necessárias à boa prestação dos serviços no intuito de atender demandas dos associados, bem como ao aperfeiçoamento da organização dos diversos departamentos, coordenadorias, comissões e setores da administração regional.
          li Propor, quando cabível, a abertura de sindicância ou inquérito destinado a apurar irregularidades de que tenha conhecimento;
          li ail: ouvidoria@escoteirosmg.org.br;
          li Responder aos associados e/ou às Unidades Escoteiras Locais sobre as demandas por eles encaminhados;
          li Realizar audiências e reuniões de avaliações quando julgar necessário, mediante ajuste com a Diretoria Regional, por meio de seu Diretor Presidente.
      br
      h3.title.is-3 Sistema de Funcionamento
      div.content
        ol
          li Todas as demandas exclusivamente pelo e-mail ouvidoria@escoteirosmg.org.br.
          li Todos os demandantes deverão ser identificados com nome, endereço e telefone de contato, n.º do registro se for associado ou responsável legal por associados, cargo se for representante de UEL, e RG ou CPF caso não seja associado da UEB.
          li As demandas provenientes de associados ou responsáveis de associados poderão ser encaminhadas copias das mesmas para o Diretor Presidente da UEL para que o mesmo acompanhe seu tramite e solução.
          li Todas as demandas receberão numero de protocolo, encaminhada assim que recebidas, e serão classificadas em Tramite Normal com resposta prevista em até 5 (cinco) dias úteis, ou Tramite Urgente com resposta na medida do possível em 48 (quarenta e oito) horas.
          li Uma vez não recebida o numero de protocolo como confirmação do recebimento caberá o demandante entrar em contato urgente com o Escritório Regional, e informar-se se esta ocorrendo alguma falha de comunicação, nesta hipótese poderá protocolar lá por escrito sua demanda devendo o Escritório Regional entra em contato imediato com o Ouvidor.
        p Por demanda se entende toda e qualquer sugestão, avaliação, crítica ou reclamação de qualquer serviço ou produto da União dos Escoteiros do Brasil da Região de Minas Gerais.
      br
      h3.title.is-3 Membros da Ouvidoria
      div.columns.is-multiline
        div.column.is-4
          div.card
            div.card-image
              figure.image.is-3by2
                img(src="http://bulma.io/images/placeholders/480x320.png")
            div.card-content
              div.media
                div.media-content
                  h4.title.is-4 Israel dos Reis
              div.content
                p Ouvidor Regional
                p Email: #[a(href="mailto:ouvidoria@escoteirosmg.org.br") ouvidoria@escoteirosmg.org.br]
</template>

<script>
  import { getSeoTitle, getSeoMeta } from '../../../services/seo'

  export default {
    head: {
      title: getSeoTitle('Ouvidoria'),
      meta: () => {
        return getSeoMeta({
          description: 'Conheça a Ouvidoria dos Escoteiros de Minas Gerais'
        })
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '~assets/sass/config.sass'
  .ombudsman
    background: rgba(233, 233, 233, 0.8)
    .main-container
      > .title
        text-transform: uppercase
      > .subtitle
      padding-top: 2rem
      padding-bottom: 2rem
      .columns
        justify-content: center
      .card-content
        a
          color: rgb(0, 35, 112)
          font-weight: bold
</style>
