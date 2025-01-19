const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
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

const User = mongoose.model("User", UserSchema);

module.exports = User;
