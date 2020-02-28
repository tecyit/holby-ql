import { Schema, model, Document } from "mongoose";

export interface AdminDoc extends Document {
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	phoneNumber: string;
	idNumber: string;
	affiliateCode: string;
	roles: [string];
	password: string;
	isVerified: boolean;
}

const adminSchema = new Schema(
	{
		firstName: {
			type: String,
			trim: true
		},
		lastName: {
			type: String,
			trim: true
		},
		email: {
			type: String,
			unique: true,
			trim: true
		},
		gender: {
			type: String,
			enum: ["Male", "Female", "Other"]
		},
		phoneNumber: {
			type: String,
			trim: true,
			unique: true
		},
		idNumber: {
			type: Number,
			trim: true,
			unique: true
		},
		affiliateCode: {
			type: String,
			unique: true
		},
		roles: {
			type: [
				{
					type: String,
					enum: ["admin", "publisher", "blogger"]
				}
			],
			default: "blogger"
		},
		password: String,
		isVerified: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true,
		strict: true
	}
);

export default model<AdminDoc>("User", adminSchema);
