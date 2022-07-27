const mongoose = require("mongoose");
const db = require("./models");

db.Question.aggregate([
	{ $match: { testid: 1 } },
	{
		$lookup: {
			from: "options",
			foreignField: "qid",
			localField: "qid",
			as: "options",
		},
	},
	{
		$project: {
			_id: 0,
			question: 1,
			answer: 1,
			options: { option: 1, seq: 1 },
		},
	},
])
	.sort({ qid: 1 })
	// db.Question.aggregate([{ $match: { testid: 1 } }, { $lookup: { from: "options", foreignField: "qid", localField: "qid", as: "options" } }])
	// 	.sort({ qid: 1 })
	.then((res) => console.log(JSON.stringify(res, null, 2)));
