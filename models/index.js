const mongoose = require("mongoose");
(async () => {
	await mongoose.connect(`mongodb://localhost:27017/exam`);
})();

module.exports = {
	Question: require("./Question"),
	Options: require("./Options"),
	Student: require("./Student"),
	Test: require("./Test"),
	Attempt: require("./Attempt"),
	Result: require("./Result"),
};
