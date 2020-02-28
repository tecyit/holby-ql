import jwt from "jsonwebtoken";
import config from "../config";

const generateToken = (user: any) =>
	jwt.sign(
		{
			id: user.id
		},
		config.JWT_SECRET!,
		{ expiresIn: "1d" }
	);

export { generateToken };
