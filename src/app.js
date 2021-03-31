import express from 'express';
import coreQuery from './graphql/core';
import { typeDefs } from './graphql/schema/index';
import { resolvers } from './graphql/resolvers';
import { ApolloServer } from 'apollo-server-express';
import db from './database/postgres';

const app = express();
app.use('/health-check', (_, res) => res.sendStatus(200));

db.connect();

const server = new ApolloServer({
  typeDefs: [coreQuery, ...typeDefs],
  resolvers: resolvers,
  context: () => {
    //   All req will pass through context
    return { contextData: 'From context' };
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 });
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
export { server, app };
