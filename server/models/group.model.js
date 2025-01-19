const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema(
	{},
	{
		timestamps: true,
	}
);

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
