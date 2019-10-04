import ApolloClient from 'apollo-boost';

const graphqlClient = new ApolloClient({
  uri: '/api/graphql',
});

export default graphqlClient;
