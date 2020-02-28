import Admin from "../../../models/admin.model";

export default {
	Query: {
		admin_allAdmins: () => Admin.find({})
	}
};
