import React, { useEffect, useState } from "react";
import { useSocket } from "./useSocket";

const Test = (props) => {
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
    <div>
      <div className="flex items-center justify-center h-screen flex-col">
        <p>Test</p>
      </div>
    </div>
  );
};

export default Test;
