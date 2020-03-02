import bcrypt from "bcryptjs";
import shortid from "shortid";
import generatePass from "../../../utils/generatePassword";
import Admin from "../../../models/admin.model";

export default {
	Mutation: {
		async admin_signUp(
			_: null,
			{
				adminSignUpInput: {
					firstName,
					lastName,
					email,
					phoneNumber,
					gender,
					idNumber,
					roles
				}
			}: any
		) {
			const genPassword = generatePass(8);
			const hashedPassword = await bcrypt.hash(genPassword, 12);
			const affiliateCode = shortid.generate();

			const adminNewInput = {
				firstName,
				lastName,
				email: email.toLowerCase(),
				phoneNumber,
				gender,
				idNumber,
				roles,
				affiliateCode,
				password: hashedPassword
			};

			const newAdmin = new Admin(adminNewInput);

			// // Save to DB
			const res = await newAdmin.save();

			console.log(adminNewInput);
			return {
				...res._doc,
				id: res._id
			};
		}
	}
};
