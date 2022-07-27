const axios = require("axios");
const URL = `http://localhost:${process.env.PORT}`;

exports.getStudentByRegno = async (args) => {
	//console.log(`api args >> ${JSON.stringify(args)}`);
	const student = await axios.get(`${URL}/api/students/${args.regno}`);
	return student.data;
};

exports.getTestByCode = async (args) => {
	const student = await axios.get(`${URL}/api/tests/${args.code}`);
	return student.data;
};

exports.getQuestionsByTestId = async (args) => {
	const questions = await axios.get(`${URL}/api/questions/${args.testid}`);
	return questions.data;
};
