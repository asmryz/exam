import React, { useEffect, useState } from "react";
import { useSocket } from "./useSocket";

const Test = (props) => {
	const [socket] = useSocket();
	const [color, setColor] = useState("cyan");
	const [styles, setStyles] = useState({});
	//const socket = io("ws://localhost:9013");

	useEffect(() => {
		socket.on("connnection", () => {
			console.log("connected to server");
		});
		socket.on("feedback", (data) => {
			console.log(JSON.stringify(data));
			props.setTest(data);
			//console.log(JSON.stringify(data), typeof data === "object");
			if (typeof data !== "object") {
				setColor("rose");
				setStyles({ animation: "horizontal-shaking 0.25s linear" });
				setTimeout(() => {
					setColor("cyan");
					setStyles({});
				}, 2000);
			}
		});
		// eslint-disable-next-line
	}, []);

	// const handleClick = () => {
	// 	socket.emit("message", new Date().getTime());
	// };

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			socket.emit("db", { code: e.target.value, type: "test" });
		}
	};
	// style="animation:  infinite;animation-duration: 3;"
	return (
		<div>
			<div className="flex items-center justify-center h-screen flex-col">
				<input
					style={styles}
					className={`focus:ring-${color}-500 focus:border-${color}-500 block shadow-sm sm:text-sm border-gray-300 rounded-md w-32 text-center`}
					id="username"
					type="password"
					placeholder="TestId"
					onKeyDownCapture={handleKeyPress}
				/>
			</div>
		</div>
	);
};

export default Test;