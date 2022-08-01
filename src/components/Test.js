import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIndex } from "../store/Test";
import { useSocket } from "./useSocket";

const Test = (props) => {
	const dispatch = useDispatch();
	const { test, status, student, shuffle, bank, index } = useSelector((state) => state.test);
	const [socket] = useSocket();

	useEffect(() => {
		socket.on("connnection", () => {
			console.log("connected to server");
		});
		socket.on("feedback", (data) => {
			console.log(JSON.stringify(data));
		});
		// eslint-disable-next-line
	}, []);

	return (
		<div className="flex h-screen flex-col">
			<div className="h-30 border-b border-gray-200">
				Header <span className="px-5"> {index}</span>{" "}
			</div>
			<div className="flex-auto p-5">
				{bank[shuffle[index]].question}
				{bank[shuffle[index]].options.map((o) => (
					<div key={o.oid}>{o.option}</div>
				))}
			</div>
			{`${"My Name is \n Asim Riaz"}`}
			<div className="h-50 p-5 pb-5 text-end">
				<button
					className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
					onClick={() => dispatch(setIndex(1))}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Test;
