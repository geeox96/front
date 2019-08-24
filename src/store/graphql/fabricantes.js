import { apolloClient } from '../../plugins/graphql'
import gql from 'graphql-tag';


export const consultarFabricantesAtivosGQL = () => {
    return apolloClient.query({
        query: gql`query{
            consultarFabricantesAtivos { 
                _id nome ativo descricao cidade estado url_insta url_site url_face
            }
        }`
    }).then((res) => (res.data.consultarFabricantesAtivos))
}