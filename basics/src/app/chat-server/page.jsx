"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [connectionStatus, setConnectionStatus] = useState();

  const connect = () => {
    console.log("connecting...");
    setConnectionStatus("Connected");
  };

  const disconnect = () => {
    console.log("disconnecting...");
    setConnectionStatus("Disconnected");
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div>{connectionStatus}</div>;
};

export default page;
