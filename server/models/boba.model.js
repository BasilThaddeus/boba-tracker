// Default values for everything, Jasmine needs to change all the values for email etc. to match the Boba model

const mongoose = require("mongoose");

const BobaSchema = mongoose.Schema(
	{
		month: {
			type: String,
			required: true,
		},

		day: {
			type: Number,
			required: true,
		},

		store: {
			type: String,
			required: true,
		},

		drink: {
			type: String,
			required: true,
		},

		toppings: {
			type: Array,
			required: false,
		},

		drinkName: {
			type: String,
			required: false,
		},

		friends: {
			type: Array,
			required: false,
		},

		cost: {
			type: Number,
			required: true,
		},

		size: {
			type: String,
			required: true,
		},

		rating: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Boba = mongoose.model("Boba", BobaSchema);

module.exports = Boba;
