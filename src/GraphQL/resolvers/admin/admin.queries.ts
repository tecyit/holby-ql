import Admin from "../../../models/admin.model";

interface Admin {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	gender: string;
	idNumber: string;
	affiliateCode: string;
	roles: [string];
	isVerified: boolean;
	isSuper: boolean;
}
interface AdminResult {
	totalCount: number;
	admins: Admin[];
}
export default {
	Query: {
		async admin_allAdmins(
			_: null,
			{
				first,
				offset = 0,
				search
			}: { first: number; offset: number; search: string }
		): Promise<AdminResult> {
			const query = {
				$or: [
					{ firstName: { $regex: search, $options: "i" } },
					{ lastName: { $regex: search, $options: "i" } },
					{ email: { $regex: search, $options: "i" } }
				]
			};

			const result = await Admin.find(query);

			const totalCount = result.length;

			console.log("Offset is: ", result.slice(offset));
			const admins =
				first === undefined
					? result.slice(offset)
					: result.slice(offset, offset + first);

			const output = {
				admins,
				totalCount
			};

			return output;
		}
	}
};
