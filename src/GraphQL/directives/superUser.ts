import { SchemaDirectiveVisitor } from "apollo-server-express";
import { UserInputError } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";
import checkAuth from "../../utils/checkAuth";
import Admin from "../../models/admin.model";

class SuperUserDirective extends SchemaDirectiveVisitor {
	// eslint-disable-next-line class-methods-use-this
	visitFieldDefinition(field: any) {
		const { resolve = defaultFieldResolver } = field;
		// eslint-disable-next-line no-param-reassign
		field.resolve = async (...args: any) => {
			const [, , context] = args;
			// Get User details from auth token
			const getContextResult = checkAuth(context);

			// Get user id from result above
			const adminId = getContextResult.id;

			// Get user details
			const getUser = await Admin.findOne({ _id: adminId });
			if (!getUser) {
				throw new UserInputError("Not found", {
					errors: {
						general: "User not found"
					}
				});
			}

			// Check if they are a super user
			const superAdmin = getUser.isSuper;

			// if not a super admin
			if (!superAdmin) {
				throw new UserInputError("Not a super admin", {
					errors: {
						general: "User is not a super admin"
					}
				});
			}

			// is a super admin
			return resolve.apply(this, args);
		};
	}
}

export default SuperUserDirective;
