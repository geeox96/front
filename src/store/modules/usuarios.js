import { logarGQL } from '../graphql/usuarios'

export default {
    state: {
        usuario: {}
    },
    getters: {
        
    },
    actions: {
        async fazerLogin({commit}, input) {
            return logarGQL(input).then(sucesso => {
                switch (sucesso) {
                    case "1":
                        
                        break;
                
                    default:
                        break;
                }
            })
        }
    },
    mutations: {
        setUsuario(usuario) {
            console.log('logou', usuario)
        }
    }
}