import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config";
import typeDefs from "./GraphQL/typeDefs";
import resolvers from "./GraphQL/resolvers";
import schemaDirectives from "./GraphQL/directives";

const PORT = process.env.PORT || config.PORT;

(async () => {
	try {
		const app = express();

		app.disable("x-powered-by");

		app.use(
			cors({
				credentials: true,
				origin: "*"
			})
		);

		const server = new ApolloServer({
			typeDefs,
			resolvers,
			schemaDirectives,
			context: ({ req }) => ({ req }),
			introspection: true,
			playground: true
		});
		server.applyMiddleware({ app, cors: false });

		await mongoose.connect(config.MONGODB_URI!, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		app.listen({ port: PORT }, () =>
			console.log(
				`
        ################################################

        🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀

        ################################################
        `
			)
		);
	} catch (e) {
		console.error(e);
	}
})();
