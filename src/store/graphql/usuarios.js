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

export const consultarUsuariosGQL = () => {
    return apolloClient.query({
        query: gql`query
        {
            consultarUsuarios{_id nome ativo data_nascimento tipo_conta email}
        }`
    }).then((res) => (res.data.consultarUsuarios))
}