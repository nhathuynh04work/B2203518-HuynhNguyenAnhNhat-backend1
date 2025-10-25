/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";
import contactsRouter from "./app/routes/contact.route.js";
import { ApiError } from "./app/api-error.js";

const app = express();

app.use(cors());
app.use(express.json());

// main routes
app.use("/api/contacts", contactsRouter);

// not found route
app.use((req, res, next) => {
	throw new ApiError(404, "Resource not found");
});

// central error handler
app.use((error, req, res, next) => {
	res.status(error.statusCode || 500).json({
		message: error.message || "Internal Server Error",
	});
});

export default app;
