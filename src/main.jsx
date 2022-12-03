import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider } from "react-router-dom";
import "./index.css";
import { route } from "./Routes/Route";
import {
	StateMachineProvider,
  } from 'little-state-machine';
  
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		 <StateMachineProvider>
			<RouterProvider router={route}></RouterProvider>
			</StateMachineProvider>
	</React.StrictMode>
);
