const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const testSchema = new Schema({
	testid: Number,
	course: String,
	crscode: String,
	total: Number,
});

module.exports = model("Test", testSchema);
