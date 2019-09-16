import { apolloClient } from '../../plugins/graphql'
import gql from 'graphql-tag';

export const novoLiquidoGQL = (input) => {
  return apolloClient.mutate({
    mutation: gql`mutation{
      novoLiquido(input:{
        nome: "${input.nome}"
        img: "${input.img}"
        descricao: "${input.descricao}"
        info: "${input.info}"
        fabricante_id: "${input.fabricante_id}"
        pg: ${input.pg}
        vg: ${input.vg}
        valor: ${input.valor}
    }){
        _id
        nome
        valor
        descricao
      }
      }`
  }).then((res) => res.data.novoLiquido)
}

export const consultarLiquidosGQL = () => {
  return apolloClient.query({
      query: gql`query
      {
        consultarLiquidos{_id nome ativo img descricao info fabricante_id{ _id nome cidade estado } pg vg valor nota visitas }
      }`
  }).then((res) => (res.data.consultarLiquidos))
}

export const consultarLiquidosAtivosGQL = () => {
  return apolloClient.query({
      query: gql`query
      {
        consultarLiquidosAtivos{_id nome img descricao info fabricante_id{ _id nome cidade estado } pg vg valor nota }
      }`
  }).then((res) => (res.data.consultarLiquidosAtivos))
}

export const deletarLiquidoAtivosGQL = (input) => {
  return apolloClient.mutate({
    mutation: gql`mutation
      {
        deletarLiquido(input: {_id: "${input._id}"  fabricante_id: "${input.fabricante_id}" } )
      }`
  }).then((res) => (res.data.deletarLiquido))
}