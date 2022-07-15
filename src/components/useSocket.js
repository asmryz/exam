import { useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
	console.log(process.env.REACT_APP_PORT);
	const [socket] = useState(io(`ws://localhost:${process.env.REACT_APP_PORT}`));
	//const [socket] = useState(io());

	return [socket];
};
