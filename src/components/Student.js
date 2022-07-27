import React, { useEffect, useState } from "react";
import { useSocket } from "./useSocket";

const Student = (props) => {
	const [socket] = useSocket();
	const [wrong, setWrong] = useState(false);
	const [styles, setStyles] = useState({});
	//const socket = io("ws://localhost:9013");

	useEffect(() => {
		socket.on("connnection", () => {
			console.log("connected to server");
		});
		socket.on("feedback", (data) => {
			console.log(JSON.stringify(data));
			if (data !== "") {
				props.setStudent(data);
			} else {
				setWrong(true);
				setStyles({ animation: "horizontal-shaking 0.25s linear" });
				setTimeout(() => {
					setWrong(false);
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
		if (e.key === "Enter" && e.target.value !== "") {
			socket.emit("db", { regno: e.target.value, type: "student" });
		}
	};
	// style="animation:  infinite;animation-duration: 3;"
	return (
		<div>
			<div className="flex items-center justify-center h-screen flex-col">
				{props.status === 2 && (
					<>
						<div style={{ fontSize: "26pt", fontWeight: "bolder" }}>{props.student.studentname}</div>
						<br />
					</>
				)}
				<input
					style={styles}
					className={`${
						wrong ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-indigo-500 focus:border-indigo-500"
					} block shadow-sm sm:text-sm border-gray-300 rounded-md w-32 text-center`}
					id="username"
					type="text"
					placeholder="Reg. No"
					onKeyDownCapture={handleKeyPress}
				/>
				{props.status === 2 && (
					<>
						<br />
						<button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
							Start
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Student;
