import React from "react";
import { useEffect } from "react";
import "./App.css";
import Example from "./components/Example";

import { useSocket } from "./components/useSocket";

//import { io } from "socket.io-client";

function App() {
	const [socket] = useSocket();
	//const socket = io("ws://localhost:9013");

	useEffect(() => {
		socket.on("connnection", () => {
			console.log("connected to server");
		});
		socket.on("feedback", (data) => {
			console.log(JSON.stringify(data));
		});
		// eslint-disable-next-line
	}, []);

	const handleClick = () => {
		socket.emit("message", new Date().getTime());
	};

	return (
		<div>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<p>Socket.io app</p>
			<button
				type="button"
				className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				onClick={handleClick}
			>
				Emit a time message
			</button>
			PORT: {JSON.stringify(process.env.REACT_APP_PORT)}
			<Example />
		</div>
	);
}

export default App;
