const mongoose = require("mongoose");
const db = require("./models");

// db.Test.aggregate([
// 	{
// 		$lookup: {
// 			from: "conducts",
// 			foreignField: "testid",
// 			localField: "testid",
// 			as: "conducts",
// 		},
// 	},
// 	{
// 		$unwind: "$conducts",
// 	},
// 	{ $match: { "conducts.code": "DEB35" } },
// 	// {
// 	// 	$project: {
// 	// 		_id: 0,
// 	// 		question: 1,
// 	// 		answer: 1,
// 	// 		options: { option: 1, seq: 1 },
// 	// 	},
// 	// },
// ])
db.Test.aggregate([
	{ $lookup: { from: "conducts", foreignField: "testid", localField: "testid", as: "conducts" } },
	{ $unwind: "$conducts" },
	{ $match: { "conducts.code": { $regex: `^DEB35$`, $options: "i" } } },
])
	//.sort({ qid: 1 })
	// db.Question.aggregate([{ $match: { testid: 1 } }, { $lookup: { from: "options", foreignField: "qid", localField: "qid", as: "options" } }])
	// 	.sort({ qid: 1 })
	.then((res) => console.log(JSON.stringify(res, null, 2)));

// db.questions
// 	.aggregate([
// 		{ $match: { testid: 2 } },
// 		{ $lookup: { from: "options", foreignField: "qid", localField: "qid", as: "options" } },
// 		{ $project: { _id: 0, question: 1, answer: 1, options: { option: 1, seq: 1 } } },
// 	])
// 	.toArray();
