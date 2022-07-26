const router = require("express").Router();
const db = require("../models");

router.get("/students", async (req, res) => {
	const students = await db.Student.find().sort({ regno: 1 });
	res.status(200).json(students);
});

router.get("/students/:regno", async (req, res) => {
	const student = await db.Student.find({ regno: req.params.regno });
	res.status(200).json(student[0]);
});

router.get("/tests/:code", async (req, res) => {
	const test = await db.Test.findOne({ code: { $regex: `^${req.params.code.toLowerCase()}$`, $options: "i" } });
	res.status(200).json(test);
});

module.exports = router;

// const db = require("../models");

// 	const students = await db.Student.find().sort({ regno: 1 });
// 	res.status(200).json(students);

// exports.getStudentByRegNo = (args) => {
//     const student = await db.Student.find({ regno: args.regno });
// 	res.status(200).json(student);
// }
