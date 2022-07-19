
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const optionSchema = new Schema({
    	oid: Number,
	qid: Number,
	option: String,
	seq: Number,
});

module.exports = model('Option', optionSchema);

