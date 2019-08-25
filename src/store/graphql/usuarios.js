import { apolloClient } from '../../plugins/graphql'
import gql from 'graphql-tag';


export const logarGQL = (input) => {
    return apolloClient.query({
        query: gql`query
        {
            logar(input: {email: "${input.email}" senha: "${input.senha}" } )
        }`
    }).then((res) => (res.data.logar))
}