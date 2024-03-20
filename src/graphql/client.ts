import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache(),
        ssrMode: typeof window === 'undefined',
        connectToDevTools: true

    });
};

export default createApolloClient;