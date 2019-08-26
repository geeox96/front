import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'


// Vue.use({
//     install(Vue) {
        const httpLink = createHttpLink({
            uri: 'http://52.70.198.116:3000/'
        })

        const authLink = setContext((_, { headers }) => {
            const token = localStorage.getItem('token')

            return {
                headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : ''
                }
            }
        })

        export const apolloClient = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'network-only'
                },
                query: {
                    fetchPolicy: 'network-only'
                }
            }
        })
//     }
// })
