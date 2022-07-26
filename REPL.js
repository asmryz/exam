const mongoose = require("mongoose");
const db = require("./models");

db.Test.findOne({ code: { $regex: `^1ajaz$`, $options: "i" } })
	.sort({ testid: 1 })
	.then((res) => console.log(JSON.stringify(res, null, 2)));
