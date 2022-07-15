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
      {/* <button
        type="button"
        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleClick}
      >
        Emit a time message
      </button> */}
      <div className="flex items-center justify-center h-screen">
        <input
          className="rounded w-32 text-center"
          id="username"
          type="password"
          placeholder="TestId"
        />
      </div>
      {/* <Example /> */}
    </div>
  );
}

export default App;
