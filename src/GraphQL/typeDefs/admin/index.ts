import { gql } from "apollo-server-express";

export default gql`
	extend type Query {
		admin_allAdmins(first: Int, offset: Int, search: String): AdminsResult
	}

	extend type Mutation {
		# TODO: add directives @auth @publisher
		admin_signUp(adminSignUpInput: AdminSignUpInput): Admin!
	}

	type Admin {
		id: ID
		firstName: String
		lastName: String
		email: String
		phoneNumber: String
		gender: String
		idNumber: String
		affiliateCode: String
		roles: [String]
		isVerified: Boolean
		isSuper: Boolean
	}
	type AdminsResult {
		admins: [Admin]
		totalCount: Int
	}
	input AdminSignUpInput {
		firstName: String!
		lastName: String!
		email: String!
		phoneNumber: String!
		gender: String!
		idNumber: String!
		roles: [String]
	}
	input AdminSignInInput {
		email: String!
		password: String!
	}
	type AuthResponse {
		token: String!
	}
`;
