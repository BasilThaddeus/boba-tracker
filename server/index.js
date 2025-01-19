const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// ExpressJS server settings
const app = express();
const PORT = process.env.PORT;

app.use(cors(), express.json());

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("[index.js] Connected to DB");
		app.listen(PORT, () => {
			console.log("[index.js] Started on port " + PORT);
		});
	})
	.catch((err) => {
		console.log("[index.js] Failed to connect to DB. Error:\n" + err);
	});
