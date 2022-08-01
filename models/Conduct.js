const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const conductSchema = new Schema({
	code: String,
	testdate: String,
	duration: Number,
	faculty: String,
	semyr: String,
	head: String,
	sec: String,
	unitmark: Number,
	testid: Number,
});

module.exports = model("Conduct", conductSchema);
