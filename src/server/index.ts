import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";

import config from "#root/config";
import typeDefs from '#root/GraphQL/typeDefs'
import resolvers from "#root/graphql/resolvers";
 
const PORT = process.env.PORT || config.PORT;

const app = express();

app.disable("x-powered-by");

app.use( 
  cors({
    credentials: true,
    origin: '*'
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true
});

server.applyMiddleware({ app, cors: false });



app.listen({ port: PORT }, () => {
  console.info(` 
  ################################################
  🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀
  ################################################
  `);
});