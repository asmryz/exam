
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const questionSchema = new Schema({
    	qid: Number,
	question: String,
	answer: Number,
	testid: Number,
});

module.exports = model('Question', questionSchema);

