// webpack.config.js
const dotEnv = require("dotenv-webpack");
module.exports = {
	plugins: [new dotEnv()],
};
