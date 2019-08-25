import { 
    logarGQL,
    consultarUsuariosGQL
} from '../graphql/usuarios'

export default {
    state: {
        usuario: {},
        usuarios: []
    },

    getters: {
        getTodosUsuarios: state => state.usuarios
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
        },

        async consultarUsuarios({commit}) {
            await consultarUsuariosGQL().then(usuarios => {
                commit('setUsuarios', usuarios)
            })
        }
    },

    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token) 
        },

        setUsuarios(state, usuarios) {
            state.usuarios = usuarios
        }
    }
}