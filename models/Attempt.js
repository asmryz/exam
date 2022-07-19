const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const attemptSchema = new Schema({
	attid: Number,
	regno: String,
	testid: Number,
	marks: Number,
	shuffle: String,
	att_time: {
		type: String,
		timestamps: true,
	},
});

module.exports = model("Attempt", attemptSchema);
