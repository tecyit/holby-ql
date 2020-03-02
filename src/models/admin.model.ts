import { Schema, model, Document } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export interface AdminDoc extends Document {
	_doc: any;
	id: string;
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
	isSuper: boolean;
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
			enum: ["male", "female", "other"]
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
		},
		isSuper: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true,
		strict: true
	}
);

adminSchema.plugin(mongoosePaginate);

export default model<AdminDoc>("Admin", adminSchema);
