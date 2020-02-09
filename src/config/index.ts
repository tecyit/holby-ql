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
  
  DB_URL: process.env.DB_URL
};