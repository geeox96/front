import { logarGQL } from '../graphql/usuarios'

export default {
    state: {
        usuario: {},
    },
    getters: {
        
    },
    actions: {
        async fazerLogin({commit}, input) {
            return logarGQL(input).then(sucesso => {
                switch (sucesso) {
                    case '1':
                        return sucesso
                    case '2':
                        return sucesso
                    case '3':
                        return sucesso
                    default:
                        commit('setToken', sucesso)
                        break;
                }
            })
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token) 
        }
    }
}