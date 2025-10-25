/* eslint-disable no-undef */
import dotenv from "dotenv";

dotenv.config();

export const config = {
	app: {
		port: process.env.PORT || 3000,
	},
};
