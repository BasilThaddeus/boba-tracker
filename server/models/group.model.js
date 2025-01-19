const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema(
	{
		owner: {
			type: String,
			required: true,
		},

		users: {
			type: Array,
			required: true,
		},

		groupCode: {
			type: Number,
			required: true,
		},

		bobas: {
			type: Array,
			required: false,
		},

		groupPFP: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
