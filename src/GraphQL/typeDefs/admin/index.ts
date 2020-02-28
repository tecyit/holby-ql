import { gql } from "apollo-server-express";

export default gql`
	extend type Query {
		admin_allAdmins: [Admin]
	}

	type Admin {
		id: ID!
		firstName: String
		lastName: String
		email: Email!
		gender: String
		idNumber: String
		affiliateCode: String
		roles: [String]
		isVerified: Boolean
	}
	type Email {
		emailAddress: String!
		isVerified: Boolean
	}
	input AdminSignUpInput {
		firstName: String!
		lastName: String!
		email: String!
		phoneNumber: String!
		idNumber: String!
		affiliateCode: String!
		password: String!
	}
	input AdminSignInInput {
		email: String!
		password: String!
	}
	type AuthResponse {
		token: String!
	}
`;
