const mongoose = require("mongoose");
const db = require("./models");

db.Student.find().then((res) => console.log(JSON.stringify(res, null, 2)));
