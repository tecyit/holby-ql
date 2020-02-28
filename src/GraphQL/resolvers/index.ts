import * as admin from "./admin";

export default {
	Query: {
		...admin.adminQueries.Query
	},
	Mutation: {
		// ...admin.adminMutations.Mutation
	}
};
