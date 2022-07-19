const axios = require("axios");
exports.getStudentByRegno = async (args) => {
	const student = await axios.get(`http://localhost:${process.env.PORT}/api/students/${args.regno}`);
	return student.data;
};
