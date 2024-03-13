import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: process.env.BFF_GRAPHQL_HOST,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;