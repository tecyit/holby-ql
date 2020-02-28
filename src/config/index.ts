import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (!envFound) {
	// This error should crash whole process
	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
	/**
	 * Our favorite port
	 */
	PORT: parseInt(process.env.PORT!, 4000),

	/**
	 * Our app secret
	 */
	APP_SECRET: process.env.APP_SECRET,

	/**
	 * Our MongoDB URI
	 */
	MONGODB_URI: process.env.MONGODB_URI,

	/**
	 * Our secret sauce
	 */
	JWT_SECRET: process.env.JWT_SECRET
};
