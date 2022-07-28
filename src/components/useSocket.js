import { useState } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  //console.log(process.env.REACT_APP_PORT);
  const [socket] = useState(
    io(`ws://10.0.131.225:${process.env.REACT_APP_PORT}`)
  );
  //const [socket] = useState(io());

  return [socket];
};
