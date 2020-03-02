const validateSignup = (
	username: string,
	email: string,
	password: string
): any => {
	const errors: any = {};

	// username validations
	const regEx = /^[\w-_.]*$/;

	if (username.trim() === "") {
		errors.username = "Username is required";
	} else if (username.trim().length < 3) {
		errors.username = "Username must be at least 3 characters long";
	} else if (username.trim().length > 10) {
		errors.username = "Username should be less than 10 character";
	} else if (!username.trim().match(regEx)) {
		errors.username = "Username username";
	}

	// Phone number validations
	const emailRegEx = /\S+@\S+\.\S+/;

	if (email.trim() === "") {
		errors.email = "Email is required";
	} else if (!email.trim().match(emailRegEx)) {
		errors.email = "Invalid Email Address";
	}

	// Password validations
	if (password.trim() === "") {
		errors.password = "Password is required";
	} else if (password.trim().length < 6) {
		errors.password = "Password must be at least 6 characters long";
	} else if (password.trim().length > 15) {
		errors.password = "Password should be less than 15 character";
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1
	};
};

export default validateSignup;
