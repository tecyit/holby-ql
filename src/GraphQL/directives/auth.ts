import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";
import checkAuth from "../../utils/checkAuth";

class AuthDirective extends SchemaDirectiveVisitor {
	// eslint-disable-next-line class-methods-use-this
	visitFieldDefinition(field: any) {
		const { resolve = defaultFieldResolver } = field;
		// eslint-disable-next-line no-param-reassign
		field.resolve = (...args: any) => {
			const [, , context] = args;
			console.log("*********** context is: ", checkAuth(context));
			checkAuth(context);

			return resolve.apply(this, args);
		};
	}
}

export default AuthDirective;
