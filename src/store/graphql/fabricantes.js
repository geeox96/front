import { apolloClient } from "../../plugins/graphql";
import gql from "graphql-tag";

export const consultarFabricantesAtivosGQL = () => {
  return apolloClient
    .query({
      query: gql`
        query {
          consultarFabricantesAtivos {
            _id
            nome
            ativo
            descricao
            img
            ratio
            whatsapp
            telefone
            email_contato
            premium
            liquido_id {
              _id
              nome
              img
              descricao
              info
              link
              pg
              vg
              valor
            }
            cidade
            estado
            url_insta
            url_site
            url_face
          }
        }
      `
    })
    .then(res => res.data.consultarFabricantesAtivos);
};

export const consultarFabricantesGQL = () => {
  return apolloClient
    .query({
      query: gql`
        query {
          consultarFabricantes {
            _id
            nome
            ativo
            descricao
            img
            ratio
            whatsapp
            telefone
            email_contato
            premium
            liquido_id {
              _id
              nome
              img
              descricao
              info
              link
              pg
              vg
              valor
            }
            cidade
            estado
            url_insta
            url_site
            url_face
          }
        }
      `
    })
    .then(res => res.data.consultarFabricantes);
};

export const novoFabricanteGQL = input => {
  return apolloClient
    .mutate({
      mutation: gql`mutation{
            novoFabricante(input:{
                nome:  "${input.nome}"
                descricao:  "${input.descricao}"
                cidade:  "${input.cidade}"
                telefone:  "${input.telefone}"
                whatsapp:  "${input.whatsapp}"
                email_contato:  "${input.email_contato}"
                url_site:  "${input.url_site}"
                url_insta: "${input.url_insta}"
                url_face: "${input.url_face}"
                estado:  "${input.estado}"
            }){
                _id
                nome
                descricao
                telefone
                whatsapp
                email_contato
                cidade
                estado
                url_site
                url_insta
                url_face
                ativo
            }
        }`
    })
    .then(res => res.data.novoFabricante);
};

export const editarFabricanteAdminGQL = input => {
  return apolloClient
    .mutate({
      mutation: gql`mutation{
            editarFabricanteAdmin(input:{
                _id: "${input._id}"
                nome:  "${input.nome}"
                descricao:  "${input.descricao}"
                img:  "${input.img}"
                cidade:  "${input.cidade}"
                telefone:  "${input.telefone}"
                whatsapp:  "${input.whatsapp}"
                email_contato:  "${input.email_contato}"
                liquido_id: "${input.liquido_id}"
                url_site:  "${input.url_site}"
                url_insta: "${input.url_insta}"
                url_face: "${input.url_face}"
                estado:  "${input.estado}"
                ativo: ${input.ativo}
                premium: ${input.premium}
            }){
                _id
                nome
                descricao
                img
                cidade
                email_contato
                estado
                url_site
                url_insta
                url_face
                ativo
            }
        }`
    })
    .then(res => res.data.editarFabricanteAdmin);
};
