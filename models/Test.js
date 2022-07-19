
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const testSchema = new Schema({
    	testid: Number,
	course: String,
	total: Number,
	code: String,
	testdate: String,
	duration: Number,
	faculty: String,
	semyr: String,
	head: String,
	sec: String,
	unitmark: Number,
});

module.exports = model('Test', testSchema);

