
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const resultSchema = new Schema({
    	rid: Number,
	testid: Number,
	regno: String,
	qid: Number,
	answer: Number,
});

module.exports = model('Result', resultSchema);

