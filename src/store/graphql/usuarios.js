import { apolloClient } from '../../plugins/graphql'
import gql from 'graphql-tag';


export const logarGQL = (input) => {
    return apolloClient.query({
        query: gql`query
        {
            logar(input: {email: "${input.email}" senha: "${input.senha}" } ){
                _id
                email
                tipo_conta
                ativo
                token
                erro
            }
        }`
    }).then((res) => (res.data.logar))
}