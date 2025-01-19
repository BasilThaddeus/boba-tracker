// Default values for everything, Jasmine needs to change all the values for email etc. to match the Boba model

const mongoose = require("mongoose");

const BobaSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},

		username: {
			type: String,
			required: true,
		},

		pfp: {
			type: String,
			required: false,
			default: "default.png",
		},

		bobas: {
			type: Array,
			default: false,
		},

		groups: {
			type: Array,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Boba = mongoose.model("Boba", BobaSchema);

module.exports = Boba;
