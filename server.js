const http = require("http");
const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
	},
});

const { getStudentByRegno } = require("./controller");

// CORS
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));

app.use("/api/", require("./api/"));

io.on("connection", (socket) => {
	console.log(`a user connected with socket id : ${socket.id}`);

	socket.on("db", async (args) => {
		io.to(socket.id).emit("feedback", await getStudentByRegno(args));
	});

	socket.on("message", (message) => {
		console.log(`message from ${socket.id} : ${message}`);
		time = new Date(message).toLocaleTimeString();
		time = `${time.split(" ")[0]}:${String(new Date(message).getMilliseconds()).padStart(3, "0")} ${time.split(" ")[1]}`;
		io.to(socket.id).emit("feedback", { time, msg: `Server Replied`, id: socket.id });
	});
});

// LISTEN
const port = process.env.PORT || 8000;
server.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
