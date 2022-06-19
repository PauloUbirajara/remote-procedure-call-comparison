import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});